/* eslint-disable prettier/prettier */
import { Controller,Post,Delete,Put,Get, Param} from "@nestjs/common";
import { BookService } from "./app.service";
@Controller('book')
export class BookController{
constructor(private bookService:BookService){}
    //addBook
   @Post("/add")
   addBook() : string{
    return this.bookService.addBook();
   }

   //deleteBook
   @Delete("/delete")
   deleteBook() : string{
    return this.bookService.deleteBook();
   }

   //updateBook
   @Put('/update')
   updateBook() : string{
    return this.bookService.updateBook();
   }

   //findAll
   @Get('/findAll')
   findAllBook() : string{
    return this.bookService.findAllBook();
   }

   @Get('/findBookById/:bookId')
findBookById(@Param() params: any): string {
  return this.bookService.findBookById(params.bookId);
}
}

