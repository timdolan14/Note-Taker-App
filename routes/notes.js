const path = require('path');
const app = require('express').Router();
const fs = require('fs');
const db = require("../db/db.json");
console.log(db);

app.get('/notes', (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", (data) => {
    console.log(data);
    res.json(data)
  })
});

app.post('/notes', (req, res) => {
  let newEntry = {
    title: req.body.title,
    text: req.body.text,
  }

  console.log(newEntry);

  fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", (data) => {
    let newData = JSON.parse(data);
    newData.push(newEntry);
  
    fs.writeFile("./db/db.json", JSON.stringify(newData), null, "  ");
    res.send(`Added successfully 🚀`);
    res.error('Error in adding values');
  }) 

});


module.exports = app;