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

router.post('/news', (req, res, next) => {
	const { firstCompany } = req.body;
	console.log('this is the req.body', req.body);
	axios
		.get(
			`https://sandbox.iexapis.com/stable/time-series/news/${firstCompany}?range=last-week&limit=10&token=${process.env.SANDBOX_PUBLISHABLE_KEY}`
		)
		.then(axResponse => res.send(axResponse.data))
		.catch(e => res.status(404));
	consol.log('this is the news', req.body);
});
module.exports = router;
