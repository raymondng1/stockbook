const express = require('express');
const router = express.Router();

router.post('/login', (req, res, next) => {
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

module.exports = router; 