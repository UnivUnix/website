module.exports = function (opts, baseApiUrl) {
  var server = opts.server;
  var docpad = this.docpad;

  /**
   * API: /site
   * Get global site data.
   */
  server.get(baseApiUrl + '/site', function (req, res) {
    res.json(docpad.site);
  });
};
