const mongoose = require('mongoose');



const mongoURi=`mongodb+srv://azizmh02hirani:azizmh02hirani@book-store-aziz.yblusho.mongodb.net/books-collection?retryWrites=true&w=majority`



const connectToMongo = () => {

    mongoose.connect(mongoURi, {
    }).then(() => {
        console.log('connected to mongo successfully');
    }).catch((e) => {
        console.log(e, 'not connected');
    });
} 

module.exports = connectToMongo;