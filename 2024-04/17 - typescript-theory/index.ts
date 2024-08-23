import { Console } from "console";

const sum2Number1 = (number1: number, number2: number, extraString: string) => {
    console.log(extraString);
    return number1 + number2;
}

function plus2(num: number | null): number {
    if (num === null) {
        return 2;
    }

    return (num + 2);
}


const aaa = 4;


console.log(`Hello value= ${aaa} OTUS`);

plus2(4);




const a: string = "2";
const b: boolean = true;
const s: string = '';
const arr: string[] = ['a, ', 'b', 'c'];
const arr1: Array<number> = [1, 2,];

a.toLowerCase();


//https://catfact.ninja/fact

enum HttpStatus {
    OK = "200",
    Redirect = 301,
    NotFound = "404",
    InternalError = 500,
}


const webstatus = HttpStatus.NotFound;
console.log('-----')
console.log(webstatus);
console.log('-----')
type ColorOfDuck = 'orange' | 'blue' | 'black' | 'white';
type Duck = {
    name: string,
    quackFunc: () => string,
    color?: ColorOfDuck,
};




const duckSam: Duck = {
    name: 'Sam',
    quackFunc: () => 'Hi, I\'m Sam, Quack',
    color: undefined
}

type aa = { a: 2 };
const tryStrcture = (obj: unknown) => {


    console.log(typeof obj);
    if (typeof obj === 'string') {
        console.log(obj.toLowerCase());
    }

    console.log(`Ко мне пришел объект ${obj}`);
}


let anyObj: any = 2;
anyObj = 444;
anyObj = {}

anyObj = 'fasfas';





interface Vehicle {
    name: string;
    number: number;
}


type Wing = { superNumber: string };

interface FlyingVehicle extends Vehicle {

    wings: [Wing, Wing]
}


const boeing: FlyingVehicle = {
    wings: [{ superNumber: '1' }, { superNumber: '2' }],
    name: "boeing",
    number: 747
}



class Fancy {
    fancyName: string;
    constructor(numNum: number) {
        this.fancyName = numNum + '';
    }
}

class Car extends Fancy implements Vehicle {
    name: string;
    number: number;
    internalVin: string;


    constructor(name: string, number: number, vin: string) {
        super(2);
        this.name = name;
        this.number = number;
        this.internalVin = vin;
    }

    vrum() {
        console.log('vrum!');
    }
}

const nissan = new Car('X-Trail', 123, 'VIN123455');



const printVehicleInfo = (v: Vehicle) => {
    console.log(`[Name: ${v.name}, Number: ${v.number}]`);
}

console.log('----------------------');
printVehicleInfo(nissan);
printVehicleInfo({ name: 'Lada', number: 1 });

console.log('----------------------');


type CatFact = {
    fact:string,
    length:string
};




type StatusValue='OK'|'ERROR';

type NormalResponse<T>= {
    status:'OK',
    data: T;
};


type ErrorResponse={
    status:'ERROR',
    message:string;
}

type MyResponse<T> = NormalResponse<T> | ErrorResponse;

class MyHttpService {



    get<T>(url: string): Promise<MyResponse<T>> {
        return fetch(url)
            .then(data => data.json())
            .then(data => {
                const res = data as T;
                return { status: 'OK' as StatusValue, data: res } as NormalResponse<T>;
            })
            .catch(() => {
                return { status: 'ERROR', message: 'Произошла ошибка' } as ErrorResponse;
            })
    }
}


const service = new MyHttpService();
void service.get<CatFact>('https://catfact.ninja/fact').then(data => {
    console.log(1);
    if (data.status === 'ERROR') {
        console.log(data.message)
    } else {
        console.log(data.data.fact);
    }

})

void service.get<CatFact>('https://catfac1t.ninja/fact').then(data => {
    console.log(2);
    if (data.status === 'ERROR') {
        console.log(data.message)
    } else {
        console.log(data.data.fact);
    }
})



tryStrcture({ a: 2 });

tryStrcture(11111);

tryStrcture("Валерий Леонтьев");



tryStrcture(false);

tryStrcture(new Date());


console.log('----------------------')

// console.log(duckSam.quackFunc());


// console.log(sum2Number1(100, 200, '300'));

// console.log(sum2Number1(-124, 1, 'Hello otus'));

