const router = require('express').Router();
require('dotenv').config();
const axios = require('axios');
//use process.env.IEXCLOUD_PUBLIC_KEY
require('dotenv').config();

router.get('/stocks', (req, res, next) => {
	res.send();
});

//sandbox.iexapis.com/stable/stock/twtr/chart/max?token=Tsk_ca6a236721d54695a775ab2a5a02b915

router.post('/stocks', (req, res, next) => {
	const { stockSymbol } = req.body;
	axios
		.get(
			`https://cloud.iexapis.com/stable/stock/${stockSymbol}/quote?token=${process.env.IEXCLOUD_PUBLIC_KEY}`
		)
		.then(axResponse => res.send(axResponse.data))
		.catch(e => res.status(404));
});

router.get('/stocks/prices', (req, res, next) => {
	const stockSymbol = 'IQ';
	// const { stockSymbol } = req.body;
	axios
		.get(
			`https://cloud.iexapis.com/stable/stock/${stockSymbol}/chart/max?token=${process.env.IEXCLOUD_PUBLIC_KEY}`
		)
		.then(axResponse => res.send(axResponse.data))
		.catch(e => res.status(404));
});

module.exports = router;
