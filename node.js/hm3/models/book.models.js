import fs from 'fs/promises';

const filePath = './data/tasks.json';


const bookModel = {
async getAllBooks() {
    const books = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(books);
},

 async  getBookById(id) {
    const books = await bookModel.getAllBooks();
    return books.find(b => b.id === parseInt(id));
},

async  addBook(newBook) {
    const books = await bookModel.getAllBooks();
    const book = { ...newBook, id: books.length + 1 };
    books.push(book);
    await fs.writeFile(filePath, JSON.stringify(books, null, 2));
    return book;
},

async deleteBook(id) {
    const books = await bookModel.getAllBooks();
    const filteredBooks = books.filter(b => b.id !== parseInt(id));
    await fs.writeFile(filePath, JSON.stringify(filteredBooks, null, 2));
}
}

export default bookModel;