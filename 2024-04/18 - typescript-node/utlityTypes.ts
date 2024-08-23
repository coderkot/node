import { read } from "fs";



type CheckList = {
    buyGroceries: boolean,
    payBills?: boolean,
    feedTheDog: boolean;
    rentACar: boolean;
}


type MandatoyCheckList = Required<CheckList>

const req:MandatoyCheckList= {
    buyGroceries:true,
    feedTheDog:true,
    payBills:true,
    rentACar:true,
}

type ReadonlyCheckList = Readonly<CheckList>

const readOnlu:ReadonlyCheckList= {
    buyGroceries:true,
    feedTheDog:true,
    payBills:true,
    rentACar:true,
}




type OptionCheckLust = Partial<CheckList>;


const f:OptionCheckLust = {

}

class MyState {
    private toDo: CheckList = {
        rentACar: false,
        buyGroceries: false, feedTheDog: false, payBills: false,
    }


    public update(data: OptionCheckLust) {
        this.toDo = { ...this.toDo, ...data };
    }
    public print() {
        console.log(this.toDo);
    }
}




const utils = () => {


    const me = new MyState();
    me.update({ feedTheDog: true });
    me.print();
    me.update({ payBills: true, buyGroceries: true });


}

export default utils;




