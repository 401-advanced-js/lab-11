'use strict';

const express = require('express');
const router = express.Router();

const auth = require('../auth/middleware.js');
router.use(auth);

router.get('/books', handleGetAll);
router.get('/books/:id', handleGetOne);

// Route Handlers
/**
 * Gets all the books and return the books in an object
 * @param {object} req 
 * @param {object} res 
 * @param {function} next
 * @returns {object} books 
 */
function handleGetAll(req, res, next) {
  let books = {
    count: 3,
    results: [
      { title:'Moby Dick' },
      { title:'Little Women' },
      { title: 'Eloquent Javascript' },
    ],
  };
  res.status(200).json(books);
}

/**
 * Get's one book, responsds back with the book object
 * @param {object} req 
 * @param {object} res 
 * @param {function} next 
 * @returns {object} book
 */
function handleGetOne(req, res, next) {
  let book = {
    title:'Moby Dick',
  };
  res.status(200).json(book);
}

module.exports = router;
