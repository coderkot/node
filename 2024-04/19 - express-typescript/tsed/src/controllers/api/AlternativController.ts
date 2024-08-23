import {Controller} from "@tsed/di";
import { NotFound } from "@tsed/exceptions";
import { BodyParams, PathParams, QueryParams } from "@tsed/platform-params";
import {Get, Post} from "@tsed/schema";
import { UsersService } from "../../services/UsersService";
import { User } from "src/models/user";

@Controller("/alternative")
export class AlternativController {
  constructor(private readonly userService:UsersService){
  }


  @Get("/")
  get() {
    return this.userService.get();
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
