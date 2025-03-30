import bookModel from '../models/book.models.js';


const bookController  = {
async getBooks(req, res) {
    const books = await bookModel.getAllBooks();
    res.json(books);
},

async getBook(req, res) {
    const book = await bookModel.getBookById(req.params.id);
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
},

async createBook(req, res) {
    const newBook = await bookModel.addBook(req.body);
    res.status(201).json(newBook);
},

async  removeBook(req, res) {
    await bookModel.deleteBook(req.params.id);
    res.sendStatus(204);
}
};
export default bookController;
