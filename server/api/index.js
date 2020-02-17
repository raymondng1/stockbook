const router = require('express').Router();

//use process.env.IEXCLOUD_PUBLIC_KEY - real API - Key

router.use('/stocks', require('./stocks'));
router.use('user', require('./user'));

//sandbox.iexapis.com/stable/stock/${stockSymbol}/chart/max?token=${process.env.SANDBOX_PUBLISHABLE_KEY}

module.exports = router;
