const express = require('express');
const { getAllQuotes, getQuoteById } = require('../controllers/quotes.controller');
const quotesRouter = express.Router();

quotesRouter.get('/quotes', getAllQuotes);
quotesRouter.get('/quotes/:questionId', getQuoteById);

module.exports = quotesRouter;