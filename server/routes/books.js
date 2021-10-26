// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const books = require('../models/books');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/details', (req, res, next) => {
  res.render('books/details', {title: 'Add Book', books: ''})
});

// POST process the Book Details page and create a new Book - CREATE
router.post('/details', (req, res, next) => {
  let newBook = book({
    "name": req.body.name,
    "author": req.body.author,
    "published": req.body.published,
    "description": req.body.description,
    "price": req.body.price
  });

  book.create(newBook, (err, book) =>{
    if(err){
      console.log(err);
      res.end(err);
    }else{
      //refresh booklist
      res.redirect('/books');
    }
  });

});

// GET the Book Details page in order to edit an existing Book
router.get('/details/:id', (req, res, next) => {
  let id = req.params.id;
  book.findById(id, (err, bookToEdit) =>{
    if(err){
      console.log(err);
      res.end(err);
    } else {
      res.render('books/details', {title: 'Edit Book', books: bookToEdit});
    }
  });
});

// POST - process the information passed from the details form and update the document
router.post('/details/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

});

// GET - process the delete by user id
router.get('/details/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
});


module.exports = router;
