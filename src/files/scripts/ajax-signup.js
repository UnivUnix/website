function loadSignupDialog(dstHTMLObj, loggedUser) {
  var req = new XMLHttpRequest();
  req.addEventListener('load', function () {
    dstHTMLObj.innerHTML = req.responseText;
    var openid = document.querySelector('.openid-block .openid-name');
    openid.innerHTML = loggedUser.service + ' (' + loggedUser.email + ')';
  });
  req.open('GET', location.origin + '/ajax-partials/sign-up-form.html');
  req.send();
}

function loadMustLoginDialog(dstHTMLObj) {
  var req = new XMLHttpRequest();
  req.addEventListener('load', function () {
    dstHTMLObj.innerHTML = req.responseText;
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