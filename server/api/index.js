const router = require('express').Router();

//use process.env.IEXCLOUD_PUBLIC_KEY - real API - Key

router.use('/stocks', require('./stocks'));
router.use('/users', require('./users'));

//sandbox.iexapis.com/stable/stock/${stockSymbol}/chart/max?token=${process.env.SANDBOX_PUBLISHABLE_KEY}

module.exports = router;
