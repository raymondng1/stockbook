const express = require('express');
const app = express();
const path = require('path');
const { User , Session} = require('./db/models');
const cookieParser = require('cookie-parser'); //'uuid='

// //console logging middleware to see this
// app.use((req, res, next) => {
// 	console.log(`Request made to ${req.path}`);
// 	next();
// });

app.use(cookieParser());

//middleware for parsing for post/update
app.use(express.json());

//middleware for webpack to send the static html file
app.use(express.static(path.join(__dirname, '../public')));

// Send index.html for any other requests , "*" -will send our react application
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

//middleware for seeing any request that comes in that has a cookie/uuid, will look up if that uuid is in our db, if it is will attach this property to the request and say it is true, every express handler after this will look at req.loggedin
// app.use((req,res,next) => {
//   if(req.cookies.uuid){
//     User.findByPk(req.cookies.uuid)
//     .then(userOrNull => {
//       if(userOrNull){
//         next()
//       }
//     })
//   }
// })

app.use((req, res, next) => {
  //The user doesn't have a session cookie so we create a session
  if (!req.cookies['session_id']) {
    Session.create()
      .then(session =>
        User.create({
          userType: 'Guest',
          sessionId: session.id
        })
      )
      // because this is a new session we create a guest user and give them the new session id
      .then(guest => {
        res.cookie('session_id', guest.dataValues.sessionId, {
          path: '/',
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24)
        });
        req.user = guest;
        next();
      })
      .catch(e => {
        console.error(e);
        res.status(404).redirect('/error');
      });
  } else {
    // the user has an active session id (their cookie)
    // find the user by session id and add it to req
    User.findOne({
      where: {
        sessionId: req.cookies['session_id']
      }
    })
      .then(user => {
        //console.log(user);
        if (!user) {
          Session.create()
            .then(session =>
              User.create({
                userType: 'Guest',
                sessionId: session.id
              })
            )
            .then(guest => {
              res.cookie('session_id', guest.dataValues.sessionId, {
                path: '/',
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24)
              });
              req.user = guest;
              next();
            })
            .catch(e => {
              console.error(e);
              res.status(404).redirect('/error');
            });
        } else {
          req.user = user.dataValues;
          next();
        }
      })
      .catch(e => {
        console.error(e);
        res.status(404).redirect('/error');
      });
  }
});

app.use('/api', require('./api'));
//Error-handling endware
app.use('/', (err, req, res, next) => {
	res
		.status(err.status || 500)
		.send({ message: err.message } || 'Internal server error');
});

module.exports = app;
