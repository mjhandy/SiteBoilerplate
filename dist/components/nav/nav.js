// Main Nav JS
$(function () {

  var $toggler = $('.navbar-toggler'),
    $subToggler = $('.navbar-sub--toggle'),
    $slide = $('.navbar-slide'),
    $subNav = $('.navbar-sub');

  $toggler.on('click', function () {
    $slide.toggleClass('show');
  });

  // $subToggler.hover(
  //   function () {
  //     $(this).next().addClass('show');
  //   },
  //   function () {
  //     $(this).next().removeClass('show');
  //   }

  // );
});
