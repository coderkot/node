
const isDate = (val: unknown): val is Date => {

    return val instanceof Date;
}

const processObj = (data: unknown) => {

    console.log(typeof data);

    if (isDate(data)) {
        console.log(`You sent me date = ${data.getMonth()}`);

    } const innerVar: typeof data = data;


    console.log(typeof innerVar);



}

type A = {
    a: string,
    b: number
}


const doType = () => {
    const t = true;
    const aaa: A = { a: '2424242', b: 4 };
    const date = new Date();
    processObj(t);
    processObj(aaa);
    processObj(aaa);
    processObj(date);



    const fancyVariable = { f: 5, currentDate: new Date(), superString: '42242' };

    const secretFun = () => {
        return {
            x: 1.4215125,
            y: 52525,
            z: 53,
        };
    }

    type ReturnCoordType = ReturnType<typeof secretFun>;

    const newDot: ReturnCoordType = {
        x: 1,
        y: 2,
        z: 24,
    }

}

export default doType;