import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibraryController } from './library/library.controller';
import { LibraryModule } from './library/library.module';
import { LibraryService } from './library/library.service';
import { LoggerMidMiddleware, LoggerMidMiddleware2 } from './logger-mid.middleware';

@Module({
  imports: [
    LibraryModule,
    RouterModule.register([
      {
        path: 'api/v2',
        module: LibraryModule,
      }])
  ],
  controllers: [AppController],
  providers: [AppService, LibraryService,],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    
    
    .apply(LoggerMidMiddleware)
      .forRoutes({ path: '/ll', method: RequestMethod.ALL })



      .apply(LoggerMidMiddleware2)
      .forRoutes({ path: '/ll', method: RequestMethod.ALL })
  }
}
