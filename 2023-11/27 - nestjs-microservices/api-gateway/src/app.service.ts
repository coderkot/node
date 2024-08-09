import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('MAILER_SERVICE') private readonly mailerService: ClientProxy,
  ) {}
  
  async createUser(user: any){
    const pattern = { cmd: 'user-create' };
    const payload = user;

    // Второй сервис, который создает юзеров сам
    // Третий сервис, нужно положить аналитическую БД этого юзера.

    // pattern - это способ подписать событие
    // payload - это полезная нагрузка
    // this.mailerService.send<any>(pattern, payload);

    // Observable - rxjs

    const mailRes = await lastValueFrom(this.mailerService.send<any>(pattern, payload));

    console.log('mailRes', mailRes);

    return { success: true };
  }
}

// Pub-Sub
// Один публикует событие. Но не важно, что его прочитали

// Сlient-Server
// Я публикую событие и жду ответа.
