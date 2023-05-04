const path = require('path');
const app = require('express').Router();
const indexRouter = require('./routes/index.js');
const notesRouter = require('./routes/notes.js');

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, "./public/notes.html"))
);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);

module.exports = app;