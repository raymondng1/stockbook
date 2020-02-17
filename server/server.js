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

app.post('/login', (req, res, next) => {
	const { email, password } = req.body;
	User.findOne({
		where: {
			email,
			password
		}
	})
		.then(userOrNull => {
			if (userOrNull) {
				res.status(202).send('Success!');
			}
			//if can't find user is not a catch error but an else statement
			res.status(401).send('Failure');
		})
		.catch(e => {
			res.status(500).send('Internal Error!');
		});
});

//Error-handling endware
app.use('/', (err, req, res, next) => {
	res
		.status(err.status || 500)
		.send({ message: err.message } || 'Internal server error');
});

module.exports = app;
