import express from 'express';
import { Book } from '../models/book.model.js';

const router = express.Router();

//Route for Saving a new BOOK 
router.post('/', async(request, response) => {
    try{
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear )
        {
            return response.status(400).send(
                {message:'Send all required fields: title, author, publishYear'});
        }
        const newBook ={
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

    const book= await Book.create(newBook);
   //book sent as response 
    return response.status(201).send(book);
    }
    catch(error) {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
    
});

//Route TO get ALL BOOKS from DATABASE 
router.get('/', async(request, response) => {
    try{
        const books = await Book.find({});
        //book retrieved as response in json format
        return response.status(200).json({
          count: books.length,
          data: books
    });
    }
    catch(error) {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});


//Route TO get one  BOOK by ID
router.get('/:id', async(request, response) => {
  try{
    
    const { id } = request.params;
    
    const book = await Book.findById(id);
    //book retrieved as response in json format
    return response.status(200).json({book});
  }
  catch(error) {
      console.log(error.message);
      response.status(500).send({message:error.message});
  }
});


// Route for Update a Book
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }
    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }
    return response.status(200).send({ message: 'Book updated successfully' });

  } 
  catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


//Route for Deleting a BOOK
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    
    const result = await Book.findByIdAndDelete(id);

    if(!result) {
      return response.status(404).json({ message: 'Book not found' });
    }
    return response.status(200).send({ message: 'Book deleted successfully' });
}catch (error) {
  console.log(error.message);
  response.status(500).send({ message: error.message });
}
});

export default router;