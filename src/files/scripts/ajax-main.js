function isLogged (callback) {
  var req = new XMLHttpRequest();
  req.addEventListener('load', function () {
    var userResponse = JSON.parse(this.responseText);
    if (userResponse.name) {
      return callback(true);
    } else {
      return callback(false);
    }
  });
  req.open('GET', location.origin + '/unvx-api/users/logged');
  req.send();
}

function getLoggedData (callback) {
  var req = new XMLHttpRequest();
  req.addEventListener('load', function () {
    var loggedUser = JSON.parse(this.responseText);
    if (loggedUser.name) {
      return callback(loggedUser, true);
    } else {
      return callback(null, false);
    }
  });
}

function getLoggedName (cssSelector) {
  var req = new XMLHttpRequest();
  req.addEventListener('load', function () {
    var destHTMLObj = document.querySelector(cssSelector);
    var userResponse = JSON.parse(this.responseText);
    if (userResponse.name) {
      destHTMLObj.innerHTML = userResponse.name;
    }
  });
  req.open('GET', location.origin + '/unvx-api/users/logged');
  req.send();
}

function startJSCommon () {
  getLoggedName ('#unvx-user span');
}
