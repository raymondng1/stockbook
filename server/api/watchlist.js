const express = require('express');
const router = express.Router();

const { WatchList } = require('../db/models');

router.get('/', (req, res, next) => {
	WatchList.findAll()
		.then(data => {
			console.log('this is the data', data);
			res.status(200).send(data);
		})
		.catch(e => {
			res.status(404);
			next();
		});
});

router.get('/:userId', (req, res, next) => {
	WatchList.findAll()
		.then(data => {
			console.log('this is the data', data);
			res.status(200).send(data);
		})
		.catch(e => {
			res.status(404);
			next();
		});
});

router.post('/', (req, res, next) => {
  console.log('this is the request body', req.body)
	WatchList.create(req.body)
		.then(newItem => res.status(201).send(newItem))
		.catch(e => {
			res.status(404);
			next();
		});
});

module.exports = router;
