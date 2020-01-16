// Main Nav JS
$(function () {

  var $toggler = $('.navbar-toggler'),
    $subToggler = $('.navbar-sub--toggle'),
    $navBar = $('#navbar'),
    $cardToggler = $('.nav-card .card-header');

  $toggler.on('click', function () {
    $navBar.toggleClass('show');
  });

  $subToggler.on('click', function () {
    var $this = $(this),
      $target = $this.attr('data-navtarget'),
      $ariaExpanded = $this.attr('aria-expanded');

    // hide all open sub navs
    $subToggler.attr('aria-expanded', false);
    // toggled sub nav
    if ($ariaExpanded === 'true') {
      $this.attr('aria-expanded', false);
    }
    else {
      $this.attr('aria-expanded', true);
    }


  });

  // for mobile, open close cards
  $cardToggler.on('click', function () {
    console.log('clicked');
    var $this = $(this);
    $this.toggleClass('on');
    $this.next('.card-body').toggleClass('show');
  });
});
