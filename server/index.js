const express = require('express');
const path = require('path');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.use('/static', express.static(path.join(__dirname, '../client/widget')));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
