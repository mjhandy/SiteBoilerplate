// Main Nav JS
$(function () {

  var $subToggle = $('.nav-bar .toggle'),
    $searchButton = $('.btn-search'),
    $searchBox = $('#searchBox'),
    $navCard = $('.nav-card'),
    $cardToggler = $('.nav-card .card-header'),
    $mainNav = $('.mainNav'),
    $mainNavHeight = $mainNav.height(),
    $sectionNav = $('.sectionNav'),
    $makeSmall = $('a.logo, #mainNav .tier-1, #mainNav .btn-search');

  // sub nav toggle
  $subToggle.on('click', function () {
    var $this = $(this),
      $ariaExpanded = $this.attr('aria-expanded');

    // hide all open sub navs
    $subToggle.attr('aria-expanded', false);
    // hide search and reset button state
    $searchButton.attr('aria-expanded', false);
    $searchBox.removeClass('show');
    // toggled sub nav
    if ($ariaExpanded === 'true') {
      $this.attr('aria-expanded', false);
    }
    else {
      $this.attr('aria-expanded', true);
    }
  });

  // show/hide search
  $searchButton.on('click', function () {
    // hide all open sub navs
    $subToggle.attr('aria-expanded', false);
    var $this = $(this),
      $ariaExpanded = $this.attr('aria-expanded');

    // 
    if ($ariaExpanded === 'true') {
      $this.attr('aria-expanded', false);
    }
    else {
      $this.attr('aria-expanded', true);
    }
    $searchBox.toggleClass('show');
  });

  // cards
  // make each nav card's header text a link in the body
  $navCard.each(function (i, v) {
    var $cardHeaderLink = $('.card-header a', v),
      $cardBody = $('.card-body', v);
    $cardHeaderLink
      .clone()
      .prependTo($cardBody)
      .addClass('first');
  });
  // for mobile, open close cards
  $cardToggler.on('click', function () {
    var $this = $(this);
    $this.toggleClass('on');

    $this.next('.card-body').fadeToggle('fast', 'linear');
  });
  // main nav needs to be sticky if there isn't a section nav  
  if ($sectionNav.length === 0) {
    $mainNav.addClass('sticky');

    // reduce nav height on scroll
    $(window).bind('scroll', function () {
      ($(window).scrollTop() > $mainNavHeight) ? $makeSmall.addClass('smaller'): $makeSmall.removeClass('smaller');
    });
  }

  $(window).bind('scroll', function () {
    ($(window).scrollTop() > $mainNavHeight) ? $sectionNav.addClass('sticky'): $sectionNav.removeClass('sticky');
  });
});
