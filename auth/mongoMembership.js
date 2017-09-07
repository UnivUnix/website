var mongoose = require('mongoose');
var User = require('../models/User');

function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

function findOrCreate (opts, callback) {
  User.findOne(
    {'service_id': opts.profile[opts.property], 'service': opts.type},
    function (err, user) {
      if (err) {
        throw err;
      }
      if (!user) {
        user = {
          service_id: opts.profile[opts.property],
          service: opts.type,
          username: opts.profile.name || opts.profile.username || opts.profile.screen_name,
          email: opts.profile.email,
          linked_ids: [],
          roles: ['user', 'newbies']
        };
      }
      callback(user);
    }
  );
}

function getUsers () {
  console.log('Not implemented.');
}

function serverExtend (opts) {
  var server = opts.server;

  server.get('/', function (req,res,next) {
    if (req.user && req.user.roles.indexOf('newbies') > -1) {
      res.redirect('/sign-up');
    }
    else {
      next();
    }
  });
}

function docpadReady (docpad, environment) {
  mongoose.connect(environment.mongodb.connection, {
    useMongoClient: true
  });
  var db = mongoose.connection;
  db.once('open', function () {
    docpad.log('info', 'Connected to MongoDB database.');
  });
}

function docpadDestroy (docpad) {
  mongoose.disconnect(function () {
    docpad.log('info', 'All MongoDB connections are closed.');
  });
}

module.exports.ensureAuthenticated = ensureAuthenticated;
module.exports.findOrCreate = findOrCreate;
module.exports.getUsers = getUsers;
module.exports.serverExtend = serverExtend;
module.exports.docpadReady = docpadReady;
module.exports.docpadDestroy = docpadDestroy;
