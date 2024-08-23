export class Library {

    constructor(
        id: number,
        name: string,
        address: string) {

        this.id = id;
        this.name = name;
        this.address = address;
        this.open=true;
    }
    id: number;
    name: string;
    address: string;
    open:boolean;
}