import { Controller } from "@tsed/di";
import { NotFound } from "@tsed/exceptions";
import { BodyParams, PathParams, QueryParams } from "@tsed/platform-params";
import { Get, Post } from "@tsed/schema";
import { User } from "src/models/user";
import { UsersService } from "../../services/UsersService";



type MyQuery = {
  maslo:string,
  ryba:string;
}

@Controller("/users")
export class UsersController {

constructor(private readonly userService:UsersService){

}



  @Get("/")
  get() {
    return this.userService.get();
  }


  @Get('/query')
  checkQuery(@QueryParams() mq: MyQuery) {

    return mq;
  }


  @Get('/:id1')
  getById(@PathParams('id1') id: number) {
    const user = this.userService.getById(id);

    if (!user) {
      throw new NotFound(`User with id = ${id} not found`);
    }
    return user;
  }



  @Post('/')
  createUser(@BodyParams() user: Omit<User, 'id'>) {
   
    this.userService.createUser(user)
    return 'ok'
  }

}
