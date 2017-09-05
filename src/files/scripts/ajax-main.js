function getLoggedData (callback) {
  var req = new XMLHttpRequest();
  req.addEventListener('load', function () {
    var loggedUser = JSON.parse(this.responseText);
    if (loggedUser.service_id) {
      return callback(loggedUser, true);
    } else {
      return callback(null, false);
    }
  });
  req.open('GET', location.origin + '/unvx-api/users/logged');
  req.send();
}

function startJSCommon () {
  var selector = document.querySelector('#unvx-user span');
  getLoggedData (function (loggedUser, exists) {
    if (exists) {
      selector.innerHTML = loggedUser.username;
    }
  });
}
