import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  signup(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @Post('signin')
  signin(@Body() body: any) {
    return body;
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return this.usersService.delete(id);
  }

  @Patch(':id')
  update(@Param('id') id, @Body() updateUserDto: UpdateUserDto) {
    console.log('updateUserDto', updateUserDto);
    return this.usersService.update(id, updateUserDto);
  }
}
