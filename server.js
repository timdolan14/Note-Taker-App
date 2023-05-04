const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routes/index.js');
const notesRouter = require('./routes/notes.js');
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/', indexRouter);
app.use('/api', notesRouter);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
