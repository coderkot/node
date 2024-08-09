import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  userCreate(user: any): { success: boolean } {
    console.log('user', user);

    return { success: false };
  }
}
