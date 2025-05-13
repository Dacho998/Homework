import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Put,
    Query,
} from '@nestjs/common';

interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
}

type UpsertBook = Omit<Book, 'id'>;

interface BooksSearchParams {
    title?: string;
    author?: string;
    price?: number;
}

@Controller('books')
export class BookController {
    private books: Book[] = [];

 @Get()
getBooks(@Query() searchParams: BooksSearchParams): Book[] {
  let filteredBooks = [...this.books];

  if (searchParams.title) {
    filteredBooks = filteredBooks.filter((book) =>
      book.title.toLowerCase().includes((searchParams.title ?? '').toLowerCase()),
    );
  }

  if (searchParams.author) {
    filteredBooks = filteredBooks.filter((book) =>
      book.author.toLowerCase().includes((searchParams.author ?? '').toLowerCase()),
    );
  }

  if (searchParams.price) {
    filteredBooks = filteredBooks.filter(
      (book) => book.price === Number(searchParams.price),
    );
  }

  return filteredBooks;
}

    @Get(':id')
    getBookById(@Param('id') id: string): Book {
        const index = this.books.findIndex((b: Book) => b.id === parseInt(id));
        if (index === -1) {
            throw new Error('Book not found');
        }
        return this.books[index];
    }

@Post()
createBook(@Body() book: UpsertBook): Book {
  const newBook = {
    ...book,
    id: Date.now(),
  } satisfies Book;
  this.books.push(newBook);
  return newBook; 
}
@Put('/:id')
    updateBook(
       @Body() updatedBookData: UpsertBook,
       @Param('id') id: string,
    ) {
        const bookIndex = this.books.findIndex(
            (book) => book.id === parseInt(id),
        );

        const updatedBook = {
            ...updatedBookData,
            id: parseInt(id),
        } satisfies Book;

        this.books[bookIndex] = updatedBook;
        return updatedBook;
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteBook(@Param('id') id: string): void {
        this.books = this.books.filter((b) => b.id !== parseInt(id));
    }
}
