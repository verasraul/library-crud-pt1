const express = require('express');
const app = express();
const bookModel = require('../models/book');


app.get("/books", async (request, response) => {
    const books = await bookModel.find({});

    try{
        response.send(books);
    } catch (error){
        response.status(500).send(error);
    }
});

module.exports = app;