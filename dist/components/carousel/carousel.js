$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('.carousel').carousel({
    touch: true, // default
    internal: 1000,
    keyboard: true,
    ride: true
  });

});
