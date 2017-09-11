function loadLoginDialog(dstHTMLObj) {
  var req = new XMLHttpRequest();
  req.addEventListener('load', function () {
    dstHTMLObj.innerHTML = req.responseText;
  });
  req.open('GET', location.origin + '/ajax-partials/login-form.html');
  req.send();
}

function loadLoggedDialog(dstHTMLObj) {
  var req = new XMLHttpRequest();
  req.addEventListener('load', function () {
    dstHTMLObj.innerHTML = req.responseText;
  });
  req.open('GET', location.origin + '/ajax-partials/logged-form.html');
  req.send();
}

function startJSLogin () {
  // Get page content
  var dstHTMLObj = document.querySelector('.unvx-login .content');
  getLoggedData (function (loggedUser, exists) {
    if (exists) {
      loadLoggedDialog(dstHTMLObj);
    } else {
      loadLoginDialog(dstHTMLObj);
    }
  });
}
