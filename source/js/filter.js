'use strict';

(function () {
  var filterElements = document.getElementById('filter');
  var itemsElements = document.getElementById('projects');

  var filteredProjects = function () {
    var items = itemsElements.querySelectorAll('.project-block');
    items.forEach(function (it) {
      if (filterElements.value === 'all' || filterElements.value === it.dataset.color) {
        it.style.display = 'block';
      } else {
        it.style.display = 'none';
      }
    });
  };

  filterElements.addEventListener('change', filteredProjects);
})();
