function isLogged (callback) {
  var req = new XMLHttpRequest()
  req.addEventListener('load', function () {
    var userResponse = JSON.parse(this.responseText)
    if (userResponse.name) {
      callback(true)
    } else {
      callback(false)
    }
  })
  req.open('GET', location.origin + '/unvx-api/users/logged')
  req.send()
}

function startJSLogin () {
  isLogged(function (result) {
    if (result) {
      var destHTMLObj = document.querySelector('.unvx-login .content')
      while (destHTMLObj.firstChild) {
        destHTMLObj.removeChild(destHTMLObj.firstChild)
      }
      destHTMLObj.innerHTML = '<p>Ya has iniciado sesión. Si deseas entrar con otro usuario, desconéctate antes.</p>'
    }
  })
}
