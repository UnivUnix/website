function loadSignupDialog(dstHTMLObj) {
  dstHTMLObj.innerHTML = '<p>Está a punto de crear una cuenta en UnivUnix.</p>';
  getLoggedData(function (loggedUser, exists) {
  });
}

function loadMustLoginDialog(dstHTMLObj) {
  dstHTMLObj.innerHTML = '<p>Debe iniciar sesión antes del registro.</p>' +
    '<div class="unvx-btn-area">' +
    '<a class="pure-button pure-button-primary" href="' +
    location.origin + '/">' +
    '<span>Volver</span></a>' +
    '<a class="pure-button pure-button-primary" href="' +
    location.origin + '/login">' +
    '<span>Iniciar sesión</span></a>' +
    '</div>';
}

function startJSSignup () {
  // Get page content
  var dstHTMLObj = document.querySelector('.unvx-signup .content');
  isLogged(function (result) {
    if (result) {
      loadSignupDialog(dstHTMLObj);
    } else {
      loadMustLoginDialog(dstHTMLObj);
    }
  });
}
