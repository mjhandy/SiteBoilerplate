// Main Nav JS
$(function () {

  var $toggler = $('.navbar-toggler'),
    $slide = $('.navbar-slide'),
    $subNav = $('.navbar-sub');

  $toggler.on('click', function () {
    $slide.toggleClass('show');
  });



});
