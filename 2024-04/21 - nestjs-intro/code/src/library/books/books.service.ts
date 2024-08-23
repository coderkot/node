import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {

    public get(){
        return ['Фет'];
    }
}
