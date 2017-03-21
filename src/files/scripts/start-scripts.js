function startJS () {
  // Common call for all pages.
  startJSCommon()
  // Optional calls for specific pages.
  if (typeof startJSLogin == 'function') {
    startJSLogin()
  }
}

window.onload = function () {
  var bLazy = new Blazy({
    offset: 250,
    src: 'lazy-src'
  })

  startJS()
}
