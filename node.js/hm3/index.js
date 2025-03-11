import express from 'express';
import fs from 'fs/promises';

const app = express();

const PORT = 3000;
const HOSTNAME = 'localhost';

const filePath = './data/tasks.json';

app.use(express.json());

app.get('/books', async (req, res) => {
    const books = await fs.readFile(filePath, 'utf-8');
    res.send(JSON.parse(books));
});

app.get('/books/:id', async (req, res) => {

    const books = await fs.readFile(filePath, 'utf-8');
    const parsedBooks = JSON.parse(books);
    const book = parsedBooks.find(b => b.id === parseInt(req.params.id));
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
}
);

app.post('/books', async (req, res) => {
    const books = await fs.readFile(filePath, 'utf-8');
    const parsedBooks = JSON.parse(books);
    const newBooks = {
        ...req.body,
        id: parsedBooks.length + 1,
    };
    parsedBooks.push(newBooks);

    await fs.writeFile(filePath, JSON.stringify(parsedBooks, null, 2));

    res.status(201).send(newBooks);
}
);

app.delete('/books/:id', async (req, res) => {
    const { id } = req.params;
    const books = await fs.readFile(filePath, 'utf-8');
    const parsedBooks = JSON.parse(books);
    const delBook = parsedBooks.filter(book => book.id !== parseInt(id));
    await fs.writeFile(filePath, JSON.stringify(delBook, null, 2));

    res.sendStatus(204);
});

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is now listening at: http://${HOSTNAME}:${PORT}`);
});