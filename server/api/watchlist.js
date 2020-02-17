const express = require('express');
const router = express.Router();

const { WatchList } = require('../db/models');

router.get('/', (req, res, next) => {
	WatchList.findAll()
		.then(data => {
			console.log('this is the data', data );
			res.status(200).send(data);
		})
		.catch(e => {
			res.status(404);
			next();
		});
});

module.exports = router;
