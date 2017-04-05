function activateMenuToggle (window, document) {
  var menu = document.querySelector('#main-menu');
  var WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'onorientationchange' : 'resize';

  function toggleHorizontal () {
    [].forEach.call(
      document.querySelector('#main-menu').querySelectorAll('.can-transform'),
      function (elem) {
        elem.classList.toggle('pure-menu-horizontal');
      }
    );
  }

  function toggleMenu () {
    // set timeout so that the panel has a chance to roll up
    // before the menu switches states
    if (menu.classList.contains('open')) {
      setTimeout(toggleHorizontal, 500);
    } else {
      toggleHorizontal();
    }
    menu.classList.toggle('open');
    document.getElementById('toggle').classList.toggle('toggled');
  }

  function closeMenu () {
    if (menu.classList.contains('open')) {
      toggleMenu();
    }
  }

  document.querySelector('#toggle').addEventListener('click', function () {
    toggleMenu();
  });

  window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
}

activateMenuToggle(this, this.document);
