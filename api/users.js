module.exports = function (opts, baseApiUrl) {
  var server = opts.server

  server.get(baseApiUrl + '/users/logged', function (req, res, next) {
    if (req.user) {
      res.json(req.user)
    } else {
      res.json({
        message: 'Not logged'
      })
    }
  })
}
