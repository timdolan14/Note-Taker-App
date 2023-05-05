const path = require('path');
const app = require('express').Router();
const fs = require('fs');
const db = require("../db/db.json");
console.log(db);
const uuid = require('uuid');

app.get('/notes', (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  }
  )
});

app.post('/notes', (req, res) => {
  let newEntry = {
    id: uuid(),
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