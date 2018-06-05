'use strict';

(function () {
  var ESC_BUTTON = 27;
  var overlay = document.querySelector('.overlay');
  var popup = document.querySelector('.modal');
  var popupClose = document.querySelector('.modal__close');
  var btn = document.querySelector('.btn__download');

  var openPopupHandler = function (evt) {
    evt.preventDefault();
    overlay.classList.add('modal-show');
    popup.classList.add('modal-show');
  };

  btn.addEventListener('click', openPopupHandler);

  var closePopupHandler = function (evt) {
    evt.preventDefault();
    overlay.classList.remove('modal-show');
    popup.classList.remove('modal-show');
  };

  popupClose.addEventListener('click', closePopupHandler);

  var escClosePopupHandler = function (evt) {
    if (evt.keyCode === ESC_BUTTON) {
      evt.preventDefault();
      if (popup.classList.contains('modal-show')) {
        popup.classList.remove('modal-show');
      }
    }
  };

  window.addEventListener('keydown', escClosePopupHandler);
})();
