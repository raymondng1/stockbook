const router = require('express').Router();

//use process.env.IEXCLOUD_PUBLIC_KEY - real API - Key

router.use('/stocks', require('./stocks'));
router.use('/users', require('./users'));
router.use('/watchlist', require('./watchlist'));

//sandbox.iexapis.com/stable/stock/${stockSymbol}/chart/max?token=${process.env.SANDBOX_PUBLISHABLE_KEY}
router.use((req, res, next) => {
  const err = new Error('API route not found');
  res.status(404);
  next(err);
});

module.exports = router;
