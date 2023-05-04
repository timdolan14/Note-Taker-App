const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('../public/index.html');
const notesRouter = require('../public/notes.html');
const PORT = process.env.PORT || 3001;

app.use(express);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/index', indexRouter);
app.use('/notes', notesRouter);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
