const path = require('path');
const app = require('express').Router();
// const uuid = require('');

app.get('/notes', (req, res) =>
  readFromFile(path.join(__dirname, '../db/db.json'))
);

app.post('/notes', (req, res) => {
  let newEntry = {
    id: "",
    title: body.title,
    text: body.text,
  }


  fs.readFile('../db/db.json', (req, res) => {
    let newData = JSON.parse(data);
    newData.push(newEntry);

    readAndAppend(newEntry, '../db/db.json');
    res.json(`Added successfully 🚀`);
    res.error('Error in adding tip');
  })

});


module.exports = app;