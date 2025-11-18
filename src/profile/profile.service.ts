import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { ProfileDto } from "./profile.dto";
import { Profile } from "./profile.entity";
import { ProfileRepository } from "./profile.repository";

@Injectable()
export class ProfileService {
    //dependency injection using profileRepo
    constructor(private readonly profileRepo: ProfileRepository) { }

    async saveProfile(dto: ProfileDto) {
        //check user  exist with id dto.userId
        const oldProfile = await this.profileRepo.findOne({ userId: dto.userId });
        if (oldProfile) {
            const profile = this.profileRepo.assign(oldProfile, dto);
            await this.profileRepo.getEntityManager().persistAndFlush(profile);
        } else {
            //creating for the first time
            const profile = this.profileRepo.create({
                ...Profile,
                education: dto.education,
                address: dto.address,
                job: dto.job,
                bankDetails: dto.bankDetails,
                picture: dto.picture,
                userId: dto.userId,
            });
            await this.profileRepo.getEntityManager().persistAndFlush(profile);
        }
        return {
            message: "Profile has been saved successfully",
        }
    }

    async createProfile(profileDto: ProfileDto) {
        //creating profile entity instance
        const profile = this.profileRepo.create({
            education: profileDto?.education,
            address: profileDto?.address,
            job: profileDto?.job,
            bankDetails: profileDto?.bankDetails,
            picture: profileDto.picture,
            userId: profileDto.userId,

        });
        //saving data to the database
        await this.profileRepo.getEntityManager().persistAndFlush(profile);
        return {
            data: profile, message: 'profile has been created successfully'
        };
    }

    async updateProfile(dto: ProfileDto, id: number) {
        const oldProfile = await this.profileRepo.findOne(id);
        if (oldProfile == null) {
            throw new NotFoundException(HttpStatus.NOT_FOUND, 'User not found');
        }
        const profile = this.profileRepo.assign(oldProfile, {
            education: dto?.education,
            address: dto?.address,
            job: dto?.job,
            picture: dto?.picture,
            userId: dto?.userId,
            bankDetails: dto?.bankDetails,
        });
        await this.profileRepo.getEntityManager().persistAndFlush(profile);
        return {
            message: 'Profile has been updated successfully',
            profile: profile,
        };
    }

    getProfile() {
        return this.profileRepo.findAll();
    }

    async getById(id: number) {
        const oldProfile = await this.profileRepo.findOne(id);
        if (oldProfile == null) {
            throw new NotFoundException(HttpStatus.NOT_FOUND, 'profile not found');
        }
        return {
            message: 'profile by id fetched',
            user: oldProfile
        };
    }
    async deleteProfile(id: number) {
        await this.profileRepo.nativeDelete({ id });
        return {
            message: 'deleted succesfully',
        };
    }
}