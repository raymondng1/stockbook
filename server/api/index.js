const router = require('express').Router();
require('dotenv').config();
const axios = require('axios');
//use process.env.IEXCLOUD_PUBLIC_KEY

// const stockQuoteUrl =
// 	'https://cloud.iexapis.com/stable/stock/aapl/quote?token=YOUR_TOKEN_HERE';

// router.get('/stocks/:stockSymbol', (req, res, next) => {

// 	axios
// 		.get(
// 			`https://cloud.iexapis.com/stable/stock/aapl/quote?token=${process.env.IEXCLOUD_PUBLIC_KEY}`
// 		)
// 		.then(response => res.send(response.data));
// });

module.exports = router;
