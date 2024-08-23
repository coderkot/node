type LargeCoord = {
    x: number,
    y: number,
    z: number,
}

type Wheel = {
    name: string
}

type Color = 'RED' | 'BLUE' | 'WHITE' | 'GREEN' | 'YELLOW';
type Car = {
    name: string,
    vin: string,
    color: Color,
    wheels: [Wheel, Wheel, Wheel, Wheel],
}

/*
{
    name: boolean,
    vin: boolean,
    wheels:boolean,
}

*/


type a = Partial<Car>




type FlagType<T> = {
    [fancy in keyof T]: boolean;
}



type CarFlags = FlagType<Car>
type LargeCoordFlags = FlagType<LargeCoord>

const nissanFlags: CarFlags = {
    name: true,
    vin: false,
    wheels: true,
    color: true,
}

const nissan: Car = {
    name: 'Nisan',
    color: 'RED',
    vin: 'assdfl;',
    wheels: [{ name: 'w1' }, { name: 'w2' }, { name: 'w3' }, { name: 'w4' }]
}

const printValueOfObject = <T>(obj: T, field: keyof T) => {
    console.log((obj as any)[field]);
}


const doTypeof = () => {

    printValueOfObject(nissan, 'wheels');
}

export default doTypeof;







