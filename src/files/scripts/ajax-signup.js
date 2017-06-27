function loadSignupDialog(dstHTMLObj) {

}

function loadMustLoginDialog(dstHTMLObj) {

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
