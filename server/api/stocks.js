const router = require('express').Router();
const axios = require('axios');
require('dotenv').config();

//these api routes are to get the information from IEX cloud api-endpoint

router.post('/', (req, res, next) => {
	const { stockSymbol } = req.body;
	axios
		.get(
			`https://cloud.iexapis.com/stable/stock/${stockSymbol}/quote?token=${process.env.IEXCLOUD_PUBLIC_KEY}`
		)
		.then(axResponse => res.send(axResponse.data))
		.catch(e => res.status(404));
});

router.post('/prices', (req, res, next) => {
	const { stockSymbol } = req.body;
	axios
		.get(
			`https://cloud.iexapis.com/stable/stock/${stockSymbol}/chart/max?token=${process.env.IEXCLOUD_PUBLIC_KEY}`
		)
		.then(axResponse => res.send(axResponse.data))
		.catch(e => res.status(404));
});

router.post('/companyinfo', (req, res, next) => {
	const { stockSymbol } = req.body;
	axios
		.get(
			`https://cloud.iexapis.com/stable/stock/${stockSymbol}/company/?token=${process.env.IEXCLOUD_PUBLIC_KEY}`
		)
		.then(axResponse => res.send(axResponse.data))
		.catch(e => res.status(404));
});

// router.post('/news', (req, res, next) => {
// 	const { stockSymbol } = req.body;
// 	axios
// 		.get(
// 			`https://cloud.iexapis.com/stable/stock/time-series/news/${stockSymbol}?range=last-week&limit=10&token=${process.env.IEXCLOUD_PUBLIC_KEY}`
// 		)
// 		.then(axResponse => {
// 			console.log('this is the news', axResponse.data);
// 			res.send(axResponse.data);
// 		})
// 		.catch(e => res.status(404));
// });

router.get('/recentnews', (req, res, next) => {
	axios
		.get(
			`https://cloud.iexapis.com/stable/time-series/news/aapl?range=last-week&limit=3&token=${process.env.IEXCLOUD_PUBLIC_KEY}`
		)
		.then(axResponse => {
			res.send(axResponse.data);
			console.log('this is the news data', axResponse.data)
		});
});

module.exports = router;
