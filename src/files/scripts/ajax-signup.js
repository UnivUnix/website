function loadSignupDialog(dstHTMLObj, loggedUser) {
  dstHTMLObj.innerHTML = '<form id="unvx-new-user" method="post" action="' + 
    location.origin + '/createAccount">' +
    '<p>Está a punto de crear una cuenta en UnivUnix con esta sesión:</p>' +
    '<div class="openid-block">' +
    '<span class="openid-name">' + loggedUser.service + ' (' + loggedUser.email + ')</span>' +
    '</div>';
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
  getLoggedData(function (loggedUser, exists) {
    if (exists) {
      loadSignupDialog(dstHTMLObj, loggedUser);
    } else {
      loadMustLoginDialog(dstHTMLObj);
    }
  });
}

/*
<%else:%>
    <%user = @req.user%>
    <div id="register">
        <form id="new-user" method="post" action=<%=@getFullURL("/createAccount")%>>
        <p>You are about to create a new account on <span><%-@site.title%></span> using a login from</p>
        <div class="openid-block">
            <span class="icon-google"></span>
            <span class="openid-name"><%-user.service%> (<%-user.email%>)</span>
        </div>
        <p>
            Here's how you'll look on the site based on the information provided to us by <%-user.service%>.
        </p>
        <p>Click "Confirm And Create This Account" when finished.</p>
            <div class="display-name">
                <label for="display-name">Display Name</label>
                <input type="text" value="<%-@req.user.name%>" maxlength="30" id="display-name" name="NickName">
            </div>
            <input id='confirm' type="submit" value="Create and confirm this account" class="button">
            <a id='cancel' href="/logout">Cancel</a>
        </form>
        </div>
<%end%> */