import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository){}
  // userRepo:UserRepository=new UserRepository();
  async createUser(userDto: UserDto) {
    //creating user entity instance
    console.log(userDto);
    const user = this.userRepo.create({
      address: userDto?.address,
      age: userDto?.age,
      name:userDto?.name,
      password:userDto?.password,
      phoneNumber:userDto?.phoneNumber,
    });
    //saving data to database
    await this.userRepo.getEntityManager().persistAndFlush(user);
    return{
      message : "successfully user created",
      user: user

    };
    
  }
  async updateUser(dto: UserDto,id: number) {
    const oldUser = await this.userRepo.findOne(id);
    if(oldUser == null){
      throw new NotFoundException(HttpStatus.NOT_FOUND,"user not found");
    }

    const user = this.userRepo.assign(oldUser,{
      address: dto?.address,
      age: dto?.age,
      name: dto?.name,
      password: dto?.password,
      phoneNumber: dto?.phoneNumber,
    });
    await this.userRepo.getEntityManager().persistAndFlush(user);
    return{
      message : "successfully user updated",
      user: user
  };
 
}
 getUser(){
    return this.userRepo.findAll();
  }

  async getById(id: number) {
    const oldUser = await this.userRepo.findOne(id);
    if(oldUser == null){
      throw new NotFoundException(HttpStatus.NOT_FOUND,'user not found'); 
    }
    return {
      message: 'user by id fetched',
      user: oldUser
    };
  }
  async deleteUser(id: number) {
      await this.userRepo.nativeDelete({id});
      return {
        message: 'deleted succesfully',
      };
  }
}
