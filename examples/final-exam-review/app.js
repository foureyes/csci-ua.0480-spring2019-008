const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/movies', (req, res) => {
  res.json([{title: 'return of the jedi', year: 1983}]);
});


app.listen(3000);
