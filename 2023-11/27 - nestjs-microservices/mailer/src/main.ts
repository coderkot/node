import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS,
    options: {
      host: '0.0.0.0',
      port: 6379,
    },
  });
  app.listen();

  new Logger('Server').log('Mailer service started');
}
bootstrap();
