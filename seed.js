const { User, WatchList } = require('./server/db/models');

const users = [
	{
		email: 'raymond.ng47@gmail.com',
		password: '123'
	},
	{
		email: 'fakeemail@gmail.com',
		password: '123'
	}
];

const watchlists = [
	{
		stockTicker: 'FB'
	},
	{
		stockTicker: 'TSLA'
	}
];

const seed = async () => {
	await Promise.all(users.map(user => User.create(user)));
	await Promise.all(watchlists.map(stocks => WatchList.create(stocks)));
};

module.exports = seed;
