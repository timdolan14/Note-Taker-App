const express = require('express');

const indexRouter = require('../public/index.html');
const notesRouter = require('../public/notes.html');

const app = express();

app.use('/index', indexRouter);
app.use('/notes', notesRouter);

module.exports = app;