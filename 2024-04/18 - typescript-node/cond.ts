type IsNum<T> = T extends number? 'number':'other';

type TypeName<T> =
| T extends string ?'string':
T extends number ? 'number':
T extends undefined? 'undefined':
'obj';

type LargeNumber = IsNum<number>;
type VeryBigNumber = IsNum<bigint>;



function printTypeName<T>(v:T ) {
    console.log(typeof  v as TypeName<T>)
}

const cond = ()=>{
printTypeName(1);
printTypeName(2);
printTypeName('3');
printTypeName({});
printTypeName(true);
}

export default cond;