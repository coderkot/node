import { Injectable } from "@tsed/di";
import { User } from "src/models/user";

@Injectable()
export class UsersService {
    
    id = 4;
    users: User[] = [
        { id: 1, name: 'afet', age: 54 },
        { id: 2, name: 'apushkin', age: 35 },
        { id: 4, name: 'fdostoevsky', age: 42 },
    ]

    getById(id: number) {
        const user = this.users.find(x => x.id === id);
        return user;
    }

    get(){
        return this.users;
    }

    createUser(user: Omit<User, 'id'>) {
        const newUser = user as User;
        newUser.id = this.id++;
        this.users.push(newUser);
    }
}
