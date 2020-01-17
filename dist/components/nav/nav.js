// Main Nav JS
$(function () {

  var $toggler = $('.navbar-toggler'),
    $subToggler = $('.navbar-sub--toggle'),
    $navBar = $('#navbar'),
    $navCard = $('.nav-card'),
    $cardToggler = $('.nav-card .card-header'),
    $cardHeaderLink = $('.nav-card .card-header a');

  $toggler.on('click', function () {
    $navBar.toggleClass('show');
  });

  $navCard.each(function (i, v) {
    var $cardHeaderLink = $('.card-header a', v),
      $cardBody = $('.card-body', v);
    console.log(i);
    $cardHeaderLink
      .clone()
      .prependTo($cardBody)
      .addClass('first');

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
    //$this.next('.card-body').toggleClass('show');
    $this.next('.card-body').fadeToggle('fast', 'linear');
  });
});
