

 export function createDate(milliseconds: number): Date;
 export function createDate(year: number, month: number): Date;

 export function  createDate(
    firstNumber: number,
    secondNumber?: number,
    thirdNumber?: number) {

    if (secondNumber === undefined)  {
        console.log('Only first');
        return new Date(firstNumber);
    }
    console.log('First second third');
    return new Date(firstNumber, secondNumber, thirdNumber || 0);

}

const doFun = ()=>{
 console.log(   createDate(1720549430218));
 console.log(   createDate(2024, 3));
}
export default doFun;