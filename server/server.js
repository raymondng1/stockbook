const express = require('express');
const app = express();
const path = require('path');
const { User, Session } = require('./db/models');
const cookieParser = require('cookie-parser'); //'uuid='

// //console logging middleware to see this
// app.use((req, res, next) => {
// 	console.log(`Request made to ${req.path}`);
// 	next();
// });
app.use(cookieParser());
app.use(express.json());

//middleware for webpack to send the static html file
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./api'));
//middleware for seeing any request that comes in that has a cookie/uuid, will look up if that uuid is in our db, if it is will attach this property to the request and say it is true, every express handler after this will look at req.loggedin

// Send index.html for any other requests , "*" -will send our react application
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((req, res, next) => {
	if (req.cookies.uuid) {
		User.findByPk(req.cookies.uuid)
			.then(userOrNull => {
				console.log('userOrNull', userOrNull);
				if (userOrNull) {
					req.user = userOrNull;
					next();
				} else {
					next();
				}
			})
			.catch(e => {
				console.error(e);
			});
	}
});

//Error-handling endware
app.use('/', (err, req, res, next) => {
	res
		.status(err.status || 500)
		.send({ message: err.message } || 'Internal server error');
});

module.exports = app;
