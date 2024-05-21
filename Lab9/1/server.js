const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let shoppingLists = [];

app.use(bodyParser.json());

app.get('/shopping-lists', (req, res) => {
  res.json(shoppingLists);
});

app.post('/shopping-lists', (req, res) => {
  const newList = req.body;
  shoppingLists.push(newList);
  res.status(201).send('Shopping list created successfully.');
});

app.get('/shopping-lists/:name', (req, res) => {
  const name = req.params.name;
  const list = shoppingLists.find(list => list.name === name);
  if (!list) {
    res.status(404).send('Shopping list not found.');
  } else {
    res.json(list);
  }
});

app.delete('/shopping-lists/:name', (req, res) => {
  const name = req.params.name;
  shoppingLists = shoppingLists.filter(list => list.name !== name);
  res.send('Shopping list deleted successfully.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
