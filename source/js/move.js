'use strict';

(function () {
  var popup = document.querySelector('.modal');
  var popupHandle = popup.querySelector('.modal__pic');

  var popupDragHandler = function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var mouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      popup.style.left = (popup.offsetLeft - shift.x) + 'px';
      popup.style.top = (popup.offsetTop - shift.y) + 'px';

    };

    var mouseUpHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);

  };

  popupHandle.addEventListener('mousedown', popupDragHandler);

})();
