const express = require('express');
const router = express.Router();
const { User } = require('../db/models');
//searching database for req.body;

router.post('/login', (req, res, next) => {
	const { email, password } = req.body;
	User.findOne({
		where: {
			email,
			password
		}
	})
		.then(userOrNull => {
			//if true/foundUser shove a cookie
			if (userOrNull) {
				res.cookie('uuid', userOrNull.id, {
					path: '/',
					expires: new Date(Date.now() + 1000 * 60 * 60 * 24)
				});
				return res.status(202).send('Success!');
			}
			//if can't find user is not a catch error but an else statement
			res.status(401).send('Failure');
		})
		.catch(e => {
			res.status(500).send('Internal Error!');
		});
});

module.exports = router;
