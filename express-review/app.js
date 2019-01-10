const express = require('express');

const app = express();

app.use((req, res, next) => {
  req.clientName = req.get('User-Agent');
  next();
});


app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  
  res.send('hello');
});

app.get('/foo', (req, res) => {
  console.log('hello!');
  res.send('user agent was ' + req.clientName);
});


app.use((req, res, next) => {
  console.log('at the end');
})



app.listen(3000);
