const router = require('express').Router();
const axios = require('axios');
require('dotenv').config();

//these api routes are to get the information from IEX cloud api-endpoint

router.post('/', (req, res, next) => {
	const { stockSymbol } = req.body;
	axios
		.get(
			`https://sandbox.iexapis.com/stable/stock/${stockSymbol}/quote?token=${process.env.SANDBOX_PUBLISHABLE_KEY}`
		)
		.then(axResponse => res.send(axResponse.data))
		.catch(e => res.status(404));
});

router.post('/prices', (req, res, next) => {
	const { stockSymbol } = req.body;
	axios
		.get(
			`https://sandbox.iexapis.com/stable/stock/${stockSymbol}/chart/max?token=${process.env.SANDBOX_PUBLISHABLE_KEY}`
		)
		.then(axResponse => res.send(axResponse.data))
		.catch(e => res.status(404));
});

router.post('/companyinfo', (req, res, next) => {
	const { stockSymbol } = req.body;
	axios
		.get(
			`https://sandbox.iexapis.com/stable/stock/${stockSymbol}/company/?token=${process.env.SANDBOX_PUBLISHABLE_KEY}`
		)
		.then(axResponse => res.send(axResponse.data))
		.catch(e => res.status(404));
});

module.exports = router; 