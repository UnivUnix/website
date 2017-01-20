window.onload = function () {
  var bLazy = new Blazy({
    offset: 250,
    src: 'lazy-src',
    success: function (element) {
      console.log("Success");
    },
    error: function (element, msg) {
      console.log("Error: " + msg);
    }
  });
};
