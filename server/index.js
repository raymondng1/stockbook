const app = require('./server.js');
const PORT = process.env.PORT || 3000;
const db = require('./db/database');
const seed = require('../seed.js');

db.sync({ force: true })
	.then(() => {
		console.log('db synced');
		return seed();
	})
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Listening on port ${PORT}`);
		});
	})
	.catch(error => console.log('error syncing db', error));
