function loadLoginDialog(dstHTMLObj) {
  var msgObj = dstHTMLObj.querySelector('p');
  var btnArea = dstHTMLObj.querySelector('.unvx-btn-area');
  msgObj.innerHTML = 'Elija cómo entrar en UnivUnix: ';
  btnArea.innerHTML = '<a class="pure-button btn-github" href="' +
    location.origin + '/auth/github">' +
    '<i class="fa fa-fw fa-github" aria-hidden="true"></i>' +
    '<span>Github</span></a>' +
    '<a class="pure-button btn-google" href="' +
    location.origin + '/auth/google">' +
    '<i class="fa fa-fw fa-google" aria-hidden="true"></i>' +
    '<span>Google</span></a>';
}

function loadLoggedDialog(dstHTMLObj) {
  var msgObj = dstHTMLObj.querySelector('p');
  var btnArea = dstHTMLObj.querySelector('.unvx-btn-area');
  msgObj.innerHTML = 'Sesión ya iniciada. ¿Quiere cerrarla?';
  btnArea.innerHTML = '<a class="pure-button pure-button-primary" href="' +
    location.origin + '/">' +
    '<span>Volver</span></a>' +
    '<a class="pure-button" href="' +
    location.origin + '/logout">' +
    '<span>Cerrar sesión</span></a>';
}

function startJSLogin () {
  // Get page content
  var dstHTMLObj = document.querySelector('.unvx-login .content');
  isLogged(function (result) {
    if (result) {
      loadLoggedDialog(dstHTMLObj);
    } else {
      loadLoginDialog(dstHTMLObj);
    }
  });
}
