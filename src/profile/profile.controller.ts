import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ProfileDto } from "./profile.dto";
import { ProfileService } from "./profile.service";

@Controller('profile')
@ApiTags('Profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) { }

    @Post('create')
    createProfile(@Body() profileDto: ProfileDto) {
        //localhost:3000/profile
        //postcr
        return this.profileService.createProfile(profileDto);
    }
    @Post()
    saveProfile(@Body() profileDto: ProfileDto) {
        //localhost:3000/profile/post
        //post
        return this.profileService.saveProfile(profileDto);
    }

    @Patch(':id')
    updateProfile(@Body() profileDto: ProfileDto, @Param('id') id: number) {
        //localhost:3000/profile/updateprofile/1
        //patch
        return this.profileService.updateProfile(profileDto, id);
    }

    @Get(':id')
    getProfile(@Param('id') id: number) {
        //localhost:3000/profile/getprofile/23 
        //get
        return this.profileService.getById(id);
    }
    @Get()
    getAllProfile() {
        //localhost:3000/profile/getallprofile
        //get
        return this.profileService.getProfile();
    }

    @Delete(':id')
    deleteProfile(@Param('id') id: number) {
        //localhost:3000/profile/deleteprofile
        //delete
        return this.profileService.deleteProfile(id);
    }


}

