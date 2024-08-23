import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(){
    console.log('im service');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
