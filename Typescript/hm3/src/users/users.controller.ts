import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService, User } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): User | null {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() user: User): User {
    return this.usersService.create(user);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: User): User | null {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: number): User | null {
    return this.usersService.delete(id);
  }
}
