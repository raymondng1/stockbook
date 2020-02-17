const db = require('./../database');
const User = require('./users');
const Session = require('./sessions')
const WatchList = require('./watchlist');

//Model Association
WatchList.belongsTo(User);
User.hasMany(WatchList);

//Sessions
Session.hasOne(User);
User.belongsTo(Session);

module.exports = {
	db,
	User,
	WatchList,
	Session
};
