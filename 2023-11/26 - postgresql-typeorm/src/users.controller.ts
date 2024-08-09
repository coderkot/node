import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './services/user.service';
import { User } from './db/Entities/User.entity';

@Controller("/users")
export class UsersController {
  constructor(private readonly usersService: UserService) { }

  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Post()
  async createUser(@Body() body: User) {
    await this.usersService.createUser(body);

  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() body: User) {
    await this.usersService.updateUser(id, body);

  }

  @Delete(":id")
  async delete(@Param("id") id: number): Promise<void> {
    await this.usersService.deleteUser(id);

  }
}
