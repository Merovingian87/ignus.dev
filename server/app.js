const express = require('express');
const path = require('path');
const { resolve } = require('path');

const pathToPublicDir = path.join(__dirname, '../client/public');
const app = express();

app.use(express.static(pathToPublicDir));
app.use(express.json());

app.get('/home', (req, res) => {
  res.sendFile(`${pathToPublicDir}/index.html`);
})
app.get('/about', (req, res) => {
  res.sendFile(`${pathToPublicDir}/index.html`);
})
app.get('/contact', (req, res) => {
  res.sendFile(`${pathToPublicDir}/index.html`);
})

const port = 8000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});
