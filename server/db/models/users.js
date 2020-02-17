const db = require('./../database');

const Sequelize = require('sequelize');
const { UUID, UUIDV4, STRING } = Sequelize;

const User = db.define('users', {
	id: {
		primaryKey: true,
		type: UUID,
		defaultValue: UUIDV4
  },
  email:{
    type:STRING,
  },
  password:{
    type: STRING
  },
  userType:{
    type: STRING, 
  }
});

module.exports = User; 
