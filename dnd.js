(function () {
  console.log('loaded!');

  var dragItems = document.querySelectorAll('.drag');

  for (var i = 0; i < dragItems.length; i++) {
    dragItems[i].addEventListener('click', function (evt) {
      evt.target.classList.toggle('clicked');
    });
  }
})();
