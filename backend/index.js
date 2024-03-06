// import express from "express";
// import { PORT ,mongoDBURI} from "./config.js";
// import mongoose from "mongoose";
// import { Book } from "./models/book.model.js";
// import  booksRoute from "./routes/booksRoute.js";
// import cors from "cors";
// import connectToMongo from "./db.js";
// import {dirname} from "path"
const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5555
const path =require('path')

//middleware for parsing request body 
app.use(express.json( )); 
connectToMongo();
// const corsOptions = {
//   origin: 'https://rainbow-cannoli-d0460a.netlify.app/#/'
// }
app.use(cors());
  // {
  //   origin: 'http://localhost:3000',
  //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
  //   allowHeaders: ['Content-Type'],
  // }
  app.use('/api/books', require('./routes/booksRoute'));

  app.use(express.static(path.join(__dirname, "../frontend/dist/")));
  app.get("*", function (_, res) {
    
    res.sendFile(
      path.join(__dirname, "../frontend/dist/index.html"),
      function (err) {
        res.status(500).send(err);
      }
      );
    });
    
    if (process.env.NODE_ENV === "production") {
      app.get('/', (req, res) => {
        app.use(express.static(path.join(__dirname, "../frontend/dist/")));
        res.sendFile (path.join(__dirname, "../frontend/dist/index.html"));
      })
}



// app.get('http://localhost:5555/',(request,response) => {
//   console.log(request);
//   return response.status(234).send('Welcome To MERN BookStore');
// });



app.listen(port, () => {
  console.log('Listening to ', port);
})