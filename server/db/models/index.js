const db = require('./../database');
const User = require('./users');
const WatchList = require('./watchlist');

//Model Association
WatchList.belongsTo(User);
User.hasMany(WatchList);

module.exports = {
	db,
	User,
	WatchList
};
