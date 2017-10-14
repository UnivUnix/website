var User = require('../../models/User');

module.exports = function (opts, baseApiUrl) {
  var server = opts.server;

  /**
   * API: /users/logged
   * Get logged user data. (Only user logged in web.)
   */
  server.get(baseApiUrl + '/users/logged', function (req, res) {
    if (req.user) {
      res.json(req.user);
    } else {
      res.json({
        message: 'Not logged'
      });
    }
  });

  /**
   *
   */
  server.post(baseApiUrl + '/users', function (req, res, next) {
    // Logged?
    if (req.user) {
      // Exists?
      User.findOne({'username': req.user.username});
      // Write data to db. Show ok status.
    } else {
      res.status(403).json({
        message: 'Forbidden'
      });
    }
  });
};
