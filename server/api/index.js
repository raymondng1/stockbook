const router = require('express').Router();
require('dotenv').config();
const axios = require('axios');

//use process.env.IEXCLOUD_PUBLIC_KEY - real API - Key
require('dotenv').config();

router.get('/stocks', (req, res, next) => {
	res.send();
});

//sandbox.iexapis.com/stable/stock/${stockSymbol}/chart/max?token=${process.env.SANDBOX_PUBLISHABLE_KEY}

router.post('/stocks', (req, res, next) => {
	const { stockSymbol } = req.body;
	axios
		.get(
			`https://sandbox.iexapis.com/stable/stock/${stockSymbol}/quote?token=${process.env.SANDBOX_PUBLISHABLE_KEY}`
		)
		.then(axResponse => res.send(axResponse.data))
		.catch(e => res.status(404));
});

router.post('/stocks/prices', (req, res, next) => {
	const { stockSymbol } = req.body;
	axios
		.get(
			`https://sandbox.iexapis.com/stable/stock/${stockSymbol}/chart/max?token=${process.env.SANDBOX_PUBLISHABLE_KEY}`
		)
		.then(axResponse => res.send(axResponse.data))
		.catch(e => res.status(404));
});

router.post('/stocks/companyinfo', (req, res, next) => {
	const { stockSymbol } = req.body;
	axios
		.get(
			`https://sandbox.iexapis.com/stable/stock/${stockSymbol}/company/?token=${process.env.SANDBOX_PUBLISHABLE_KEY}`
		)
		.then(axResponse => res.send(axResponse.data))
		.catch(e => res.status(404));
});

module.exports = router;
