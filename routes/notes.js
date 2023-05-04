const path = require('path');
const app = require('express').Router();
// const uuid = require('');

app.get('/api/notes', (req, res) =>
  readFromFile(path.join(__dirname, '../db/db.json'))
);

app.post('/api/notes', (req, res) => {
  let newEntry = {
    id: "",
    title: body.title,
    text: body.text,
  }


  fs.readFile('../db/db.json', (req, res) => {
    let newData = JSON.parse(data);
    newData.push(newEntry);

    readAndAppend(newEntry, './db/tips.json');
    res.json(`Added successfully 🚀`);
    res.error('Error in adding tip');
  })



});




app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);


module.export = app;