function loadSignupDialog(dstHTMLObj, loggedUser) {
  var req = new XMLHttpRequest();
  var loadingDiv = document.querySelector('.loading');

  /* webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend */
  function onResizeOut() {
    dstHTMLObj.innerHTML = req.responseText;
    dstHTMLObj.classList.add('animated', 'resizeIn');
    var serviceId = document.querySelector('#service-id');
    var username = document.querySelector('#username');
    serviceId.innerHTML = '<strong>' + loggedUser.service + ' (' + loggedUser.email + ')</strong>';
    username.value = loggedUser.username;
  }

  req.addEventListener('load', function () {
    loadingDiv.addEventListener('webkitAnimationEnd', onResizeOut, true);
    loadingDiv.addEventListener('mozAnimationEnd', onResizeOut, true);
    loadingDiv.addEventListener('MSAnimationEnd', onResizeOut, true);
    loadingDiv.addEventListener('oAnimationEnd', onResizeOut, true);
    loadingDiv.addEventListener('animationend', onResizeOut, true);
    loadingDiv.classList.add('animated', 'resizeOut');
  });

  req.open('GET', location.origin + '/ajax-partials/sign-up-form.html');
  req.send();
}

function loadMustLoginDialog(dstHTMLObj) {
  var req = new XMLHttpRequest();
  var loadingDiv = document.querySelector('.loading');

  /* webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend */
  function onResizeOut() {
    dstHTMLObj.innerHTML = req.responseText;
    dstHTMLObj.classList.add('animated', 'resizeIn');
  }

  req.addEventListener('load', function () {
    loadingDiv.addEventListener('webkitAnimationEnd', onResizeOut, true);
    loadingDiv.addEventListener('mozAnimationEnd', onResizeOut, true);
    loadingDiv.addEventListener('MSAnimationEnd', onResizeOut, true);
    loadingDiv.addEventListener('oAnimationEnd', onResizeOut, true);
    loadingDiv.addEventListener('animationend', onResizeOut, true);
    loadingDiv.classList.add('animated', 'resizeOut');
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