import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMidMiddleware2 implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('httpVersion22222: '+req.httpVersion);
    next();
  }
}



@Injectable()
export class LoggerMidMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('httpVersion: '+req.httpVersion);
    throw new HttpException("KARAMBA", HttpStatus.NOT_FOUND);
  }
}

