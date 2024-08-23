import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BooksService } from './library/books/books.service';
import { LibraryService } from './library/library.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private lib:LibraryService,
    private books:BooksService) {

    }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ll')
  getLibs() {
    return this.lib.getLibraries();
  }

  @Get('bb')
  getBooks() {
    return this.books.get();
  }
}


