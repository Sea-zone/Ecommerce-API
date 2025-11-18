import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Post()
  createUser(@Body() userDto: UserDto) {
    console.log(userDto);
    return this.userService.createUser(userDto);
  }

  @Patch(':id')
  updateUser(@Body() userDto: UserDto, @Param('id') id: number) {
    return this.userService.updateUser(userDto, id);
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.userService.getById(id);
  }

  @Get()
  getAll() {
    return this.userService.getUser();
  }


  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
