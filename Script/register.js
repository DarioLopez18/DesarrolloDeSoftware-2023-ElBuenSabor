$('input[type=number]').on('mousewheel', function(e) {
  $(e.target).blur();
});