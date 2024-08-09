// function printLength(value: string | null) {
//     if (value === null) {
//         console.log('К нам пришла пустая строка')
//     } else {
//         console.log(`к нам пришла строка ${value} длиной ${value.length}`);
//     }
// }
export type Guid = string;


type Guidable = { id: Guid };
export interface IRepository<T extends Guidable> {
    create(item: Omit<T, 'id'>): Guid;

    remove(id: Guid): void;

    findOne(predicate: (o: T) => boolean): T;

    findMany(predicate: (o: T) => boolean): T[];

    findById(id: Guid): T;

    update(item: T): void;
}



export class BaseRepository<T extends Guidable> 
    implements IRepository<T>{

    private items: T[] = [];


    create(item: Omit<T, 'id'>): Guid {

        const tipaGuid = new Date()+'';
        const temp = item as T & { id: Guid };
        temp.id = tipaGuid ;
        this.items.push(temp);
        return tipaGuid;
    }
    remove(id: Guid): void {
        const index = this.items.findIndex(x => x.id === id);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
    findOne(predicate: (o: T) => boolean): T {
        const item = this.items.find(predicate);
        if (!item)
            throw new Error("Элемент не найден");
        return item;
    }
    findMany(predicate: (o: T) => boolean): T[] {
        return this.items.filter(predicate);
    }
    findById(id: Guid): T {
        return this.findOne(x => x.id === id);
    }
    update(item: T): void {
        const v = this.findById(item.id);
        if (v) {
            Object.assign(v, item);
        }
    }
}

interface IUser {
    id: Guid;
    username: string;
    pwd: string;
    created: Date;
}


interface IUserRepository extends IRepository<IUser> {
    changePassword(id: Guid, pwd: string): void;
}


export class UserRepository extends BaseRepository<IUser> implements IUserRepository {
    changePassword(id: Guid, pwd: string): void {
        throw new Error("Method not implemented.");
    }
}
// {
//     id:1,
//     username:"otus",
//     created: '2023-08-08'
// }


// {

//     username:"otus",
//     created: '2023-08-08'
// }





// function printColor(n: number) {
//     switch (n) {
//         case 1:
//             console.log('Красный');
//             return 100;
//         case 2:
//             console.log('Синий');
//             return 400;
//         case 3:
//             console.log('Желтый');
//             return 200;
//         case 4:
//             console.log('Зелный');
//             const f = "Текст";
//             console.log(`Я текст со значением ${f}`);
//             return 2222;
//         default:
//             return 0;
//     }
// }


// const s = 2;

// printColor(1);
// printColor(2);
// printColor(3);
// printColor(4);

// printLength("asfasfasfasf");
// printLength(null);


// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   readline.question('Who are you?\n', (name:string) => {
//     console.log(`Hey there ${name}!`);
//     readline.close();
//   });


const userRepo = new UserRepository();
const id = userRepo.create(
    {
        username: 'otus',
        pwd: '1234', created: new Date()
    });

console.log(userRepo.findMany(x=>true));

userRepo.create(
    {
        username: 'otus2',
        pwd: '12344', created: new Date()
    });


userRepo.create(
    {
        username: 'otus3',
        pwd: '1235', created: new Date()
    });

const item = userRepo.findById(id);

item.pwd='fafafa';
userRepo.update(item);

console.log('-------------------------------')
console.log(userRepo.findMany(x=>true));


type AddressType = 'city'| 'street'| 'house';



type Address = Readonly< Record<AddressType, string>>;



const a1: Address = {
    city: 'Moscow',
   street:'Lenina',
    house: '1'
};

type CityOnly= Pick<Address, 'city'>;

