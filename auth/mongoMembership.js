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

function getUsers() {
  console.log('Not implemented.');
}

module.exports.ensureAuthenticated = ensureAuthenticated;
module.exports.findOrCreate = findOrCreate;
module.exports.getUsers = getUsers;
