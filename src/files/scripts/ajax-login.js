function loadLoginDialog(dstHTMLObj) {
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
  req.open('GET', location.origin + '/ajax-partials/login-form.html');
  req.send();
}

function loadLoggedDialog(dstHTMLObj) {
  var req = new XMLHttpRequest();
  var loadingDiv = document.querySelector('.loading');

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
