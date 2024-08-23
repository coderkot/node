import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  User } from './db/Entities/User.entity';
import { UsersController } from './users.controller';
import { UserService } from './services/user.service';
import { Country } from './db/Entities/Country.entity';
import { connection } from './db/connection';
@Module({
  imports: [
    TypeOrmModule.forRoot(connection),
    TypeOrmModule.forFeature([Country,User]),
  ],
  
  controllers: [AppController, UsersController],
  providers: [AppService ,UserService],
})
export class AppModule { }
