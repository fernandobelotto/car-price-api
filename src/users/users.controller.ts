import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  @Post('signup')
  signup(@Body() body: CreateUserDto) {
    return body;
  }

  @Post('signin')
  signin(@Body() body: any) {
    return body;
  }

  @Get()
  findAll(): string {
    return 'This action returns all users';
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return `This action returns a #${id} user`;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return `This action removes a #${id} user`;
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return `This action updates a #${id} user`;
  }
}
