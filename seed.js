const { User, WatchList } = require('./server/db/models');

const users = [
	{
		email: 'raymond.ng47@gmail.com',
		password: '123',
		userType: 'customer',
		firstName: 'Raymond',
		lastName: 'Ng'
	},
	{
		email: 'fakeemail@gmail.com',
		password: '123',
		userType: 'customer',
		firstName: 'fake',
		lastName: 'lastname'
	}
];

const watchlists = [
	{
		stockTicker: 'FB',
		companyName: 'FACEBOOK'
	},
	{
		stockTicker: 'TSLA',
		companyName: 'TESLA'
	}
];

const seed = async () => {
	await Promise.all(users.map(user => User.create(user)));
	await Promise.all(watchlists.map(stocks => WatchList.create(stocks)));
};

module.exports = seed;
