const express = require('express');
const app = express();
const path = require('path');
const User = require('./db/models/users');

//console logging middleware to see this 
app.use((req,res,next) => {
  console.log(`Request made to ${req.path}`)
  next()
})

//middleware for parsing
app.use(express.json());

//middleware for webpack to send the static html file
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
