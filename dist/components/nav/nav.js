// Main Nav JS
$(function () {

  var $toggler = $('.navbar-toggler'),
    $subToggler = $('.navbar-sub--toggle'),
    $navBar = $('#navbar');

  $toggler.on('click', function () {
    $navBar.toggleClass('show');
  });

  $subToggler.on('click', function () {
    var $this = $(this),
      $target = $this.attr('data-navtarget'),
      $ariaExpanded = $this.attr('aria-expanded');
    console.log($target, $ariaExpanded);

    // hide all open sub navs
    $subToggler.attr('aria-expanded', false);
    // toggled sub nav
    if ($ariaExpanded === 'true') {
      $this.attr('aria-expanded', false);
    }
    else {
      $this.attr('aria-expanded', true);
    }


  })
});
