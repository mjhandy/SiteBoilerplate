// Main Nav JS
$(function () {

  var $navToggle = $('.navbar-toggler.btn-burger'),
    $searchToggle = $('.navbar-toggler.btn-search'),
    $search = $('.searchBox'),
    $subToggler = $('.navbar-sub--toggle'),
    $navBar = $('#navbar'),
    $navCard = $('.nav-card'),
    $cardToggler = $('.nav-card .card-header');

  $navToggle.on('click', function () {
    $navBar.toggleClass('show');
    $search.removeClass('show');
  });

  $searchToggle.on('click', function () {
    $search.toggleClass('show');
    $navBar.removeClass('show');
  });

  // make each nav card's header link a link in the body
  $navCard.each(function (i, v) {
    var $cardHeaderLink = $('.card-header a', v),
      $cardBody = $('.card-body', v);
    $cardHeaderLink
      .clone()
      .prependTo($cardBody)
      .addClass('first');

  });



  $subToggler.on('click', function () {
    var $this = $(this),
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

    var $this = $(this);
    $this.toggleClass('on');

    $this.next('.card-body').fadeToggle('fast', 'linear');
  });
});
