import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Post('user/create')
  async createUser(
    @Body() user: any
  ){
    return await this.appService.createUser(user);
  }
}
