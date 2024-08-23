

type Duck = {
    quack: () => void,
    name: string;
}


type Cat = {
    name: string;
    meow: () => void;
};


const samuel: Duck = {
    name: 'Samuel',
    quack: () => {
        console.log('QUACK, I\'m Samuel');
    }
};


type SuperDuck = Duck & { super: boolean };



const bernard: Duck = {
    name: 'Bernard',
    quack: () => {
        console.log('*Intelligent quack*');
    }
};


const jack: Cat = {
    name: 'Jack',
    meow: () => console.log('Meow')
}

const leopold: SuperDuck = {
    name: 'Leopold',
    quack: () => {
        console.log('*Intelligent quack*');
    },
    super: true,
};








export function DoDuckThings<T extends Duck>(duck: T) {
    console.log('-------');

    console.log(`Once uppon a time there was a duck named ${duck.name}`);


    console.log('And every morning he was doing next thing:');
    duck.quack();


}

const  do1 = () => {
    DoDuckThings(bernard);
    DoDuckThings<SuperDuck>(leopold);


    DoDuckThings<Duck>(samuel);
};
export default do1;

