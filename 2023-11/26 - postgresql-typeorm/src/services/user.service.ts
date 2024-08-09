import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/db/Entities/User.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {

    }


    getAll() {
        return this.usersRepository.find();
    }

    async createUser(user: User) {
        await this.usersRepository.save(user);
    }

    async deleteUser(id:number){
        // delete from users where id="id"
        await this.usersRepository.delete(id);
        await this.usersRepository.delete({ id });
    }

    async updateUser(id: number, user: User) {
        // select * from users where id= "id" limit 1
        const existing =await  this.usersRepository.findOne(
            {
                where: { id }
            });
        if (!existing) {
            throw new Error(`User id=${id} notFound`);
        }
      
        await this.usersRepository.update(id, { ...existing, ...user });
    }
}