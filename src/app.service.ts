/* eslint-disable prettier/prettier */
import { Injectable, Param } from '@nestjs/common';

/* eslint-disable prettier/prettier */
@Injectable()
export class BookService {
  addBook(): string {
    return 'this will add a book';
  }
  updateBook(): string {
    return 'this will update the book'
  }
  deleteBook(): string {
    return 'this will delete Book'
  }
  findAllBook(): string {
    return 'this will find all the book'
  }
  findBookById(@Param() BOOKID: any): string {
    console.log(BOOKID)
    return `This will find the book of Id #${BOOKID} `;
  }

}
