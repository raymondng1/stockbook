const db = require('../database');
const Sequelize = require('sequelize');
const { UUID, UUIDV4, STRING } = Sequelize;

const WatchList = db.define('watchlist', {
	id: {
		primaryKey: true,
		type: UUID,
		defaultValue: UUIDV4
	},
	stockTicker: {
		type: STRING
	},
	companyName:{
		type: STRING
	}
});

module.exports = WatchList;
