function loadLoginDialog(dstHTMLObj) {
  var req = new XMLHttpRequest();
  req.addEventListener('load', function () {
    dstHTMLObj.addEventListener('transitionend', function () {
      dstHTMLObj.innerHTML = req.responseText;
    } ,true);
    dstHTMLObj.childNodes[1].classList.add('fadeout');
  });
  req.open('GET', location.origin + '/ajax-partials/login-form.html');
  req.send();
}

function loadLoggedDialog(dstHTMLObj) {
  var req = new XMLHttpRequest();
  req.addEventListener('load', function () {
    dstHTMLObj.addEventListener('transitionend', function () {
      dstHTMLObj.innerHTML = req.responseText;
    } ,true);
    dstHTMLObj.childNodes[1].classList.add('fadeout');
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
