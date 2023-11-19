import express from "express";
import { PORT ,mongoDBURI} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/book.model.js";
import  booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

//middleware for parsing request body 
app.use(express.json( )); 

const corsOptions = {
  origin: 'https://bookstore-mern-aziz-lhb5.vercel.app/'
}
app.use(cors(corsOptions));
  // {
  //   origin: 'http://localhost:3000',
  //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
  //   allowHeaders: ['Content-Type'],
  // }




app.get('https://bookstore-mern-aziz.onrender.com/',(request,response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN BookStore');
});

app.use('https://bookstore-mern-aziz.onrender.com/books', booksRoute);


mongoose
  .connect(mongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('App Connected to Database!');
    app.listen(PORT, () => {
      console.log(`App is listening to port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
