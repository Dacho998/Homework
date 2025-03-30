import express from 'express';
import bookController from '../controllers/book.controllers.js';

const router = express.Router();

router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBook);
router.post('/', bookController.createBook);
router.delete('/:id', bookController.removeBook);

export default router;