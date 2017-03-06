function printLoggedUser () {
  var userButton = document.querySelector('#unvx-user')
  var userResponse = JSON.parse(this.responseText)
  var userButtonText = userButton.querySelector('span')
  if (userResponse.name) {
    userButtonText.innerHTML = userResponse.name
  }
}

function getLoggedUser () {
  var req = new XMLHttpRequest()
  req.addEventListener('load', printLoggedUser)
  req.open('GET', location.origin + '/unvx-api/users/logged')
  req.send()
}
