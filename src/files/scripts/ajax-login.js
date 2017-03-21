function isLogged (callback) {
  var req = new XMLHttpRequest()
  req.addEventListener('load', function () {
    var userResponse = JSON.parse(this.responseText)
    if (userResponse.name) {
      callback(true);
    } else {
      callback(false);
    }
  })
  req.open('GET', location.origin + '/unvx-api/users/logged')
  req.send()
}

function startJSLogin () {
  isLogged(function (result) {
    var destHTMLObj = document.querySelector('#unvx-msg-pop')
    destHTMLObj.innerHTML = 'Ya has iniciado sesión. Si deseas entrar con otro usuario, desconéctate antes.'
  })
}
