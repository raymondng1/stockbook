const express = require('express');
const app = express();
const path = require('path');

//middleware for parsing
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));



app.use('/api', require('./api'));


// Send index.html for any other requests , "*" -will send our react application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//Error-handling endware
app.use('/', (err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ message: err.message } || 'Internal server error');
});


module.exports = app;
