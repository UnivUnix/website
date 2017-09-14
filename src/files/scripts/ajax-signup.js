function loadSignupDialog(dstHTMLObj, loggedUser) {
  var req = new XMLHttpRequest();
  req.addEventListener('load', function () {
    dstHTMLObj.addEventListener('transitionend', function () {
      dstHTMLObj.innerHTML = req.responseText;
      var openid = document.querySelector('.openid-block .openid-name');
      openid.innerHTML = loggedUser.service + ' (' + loggedUser.email + ')';
    } ,true);
    dstHTMLObj.childNodes[1].classList.add('fadeout');
  });
  req.open('GET', location.origin + '/ajax-partials/sign-up-form.html');
  req.send();
}

function loadMustLoginDialog(dstHTMLObj) {
  var req = new XMLHttpRequest();
  req.addEventListener('load', function () {
    dstHTMLObj.addEventListener('transitionend', function () {
      dstHTMLObj.innerHTML = req.responseText;
    } ,true);
    dstHTMLObj.childNodes[1].classList.add('fadeout');
  });
  req.open('GET', location.origin + '/ajax-partials/must-login.html');
  req.send();
}

function startJSSignup () {
  // Get page content
  var dstHTMLObj = document.querySelector('.unvx-signup .content');
  getLoggedData(function (loggedUser, exists) {
    if (exists) {
      loadSignupDialog(dstHTMLObj, loggedUser);
    } else {
      loadMustLoginDialog(dstHTMLObj);
    }
  });
}