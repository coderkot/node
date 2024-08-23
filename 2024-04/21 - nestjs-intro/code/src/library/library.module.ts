import { Module } from '@nestjs/common';

import { LibraryController } from './library.controller';
import { LibraryService } from './library.service';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';

@Module({
  controllers: [LibraryController, BooksController],
  providers: [LibraryService, BooksService],
  exports: [LibraryService, BooksService]
})
export class LibraryModule { }
