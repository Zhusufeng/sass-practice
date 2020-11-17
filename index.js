const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('/');
});

app.listen(port, error => {
  if (error) console.error(`${error}`);
  console.log(`Example app listening at http://localhost:${port}`)
})