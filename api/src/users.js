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

  /* (Function created by auth plugin)
  server.post(baseApiUrl + '/users', function (req, res, next) {

  });
  */
};
