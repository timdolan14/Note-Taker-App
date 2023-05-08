const path = require('path');
const app = require('express').Router();
const fs = require('fs');
const db = require("../db/db.json");
console.log(db);
const { v4: uuidv4 } = require('uuid');

app.get('/notes', (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  }
  )
});

app.post('/notes', (req, res) => {
  let newEntry = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
  }

  console.log(newEntry);

  fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", (err, data) => {
    if (err) throw err;
    let db = JSON.parse(data);
    db.push(newEntry);
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(db), (err) => {
      if (err) throw err;
      res.json(db);
    })
  }) 

});


module.exports = app;