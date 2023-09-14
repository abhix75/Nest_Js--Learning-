/* eslint-disable prettier/prettier */
import { Controller,Post,Delete,Put,Get, Param} from "@nestjs/common";
@Controller('book')
export class BookController{

    //addBook
   @Post("/add")
   addBook() : string{
    return "This will Add  Book"
   }

   //deleteBook
   @Delete("/delete")
   deleteBook() : string{
    return "This will delete the Book"
   }

   //updateBook
   @Put('/update')
   updateBook() : string{
    return "This will Update the Book"
   }

   //findAll
   @Get('/findAll')
   findAllBook() : string{
    return "This will Find the Books"
   }

   @Get('/findBookById/:bookId')
findBookById(@Param() params: any): string {
  return `This will find the book of Id #${params.bookId} `;
}
}

