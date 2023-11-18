import express from "express";
import { PORT ,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/book.model.js";
import  booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

//middleware for parsing request body 
app.use(express.json( )); 

app.use(cors(
  {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type'],
  }
));

app.get('/',(request,response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN BookStore');
});

app.use('/books', booksRoute);


mongoose
  .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('App Connected to Database!');
    app.listen(PORT, () => {
      console.log(`App is listening to port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
