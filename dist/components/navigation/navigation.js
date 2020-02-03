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

    // hide all open sub navs and reset aria tags
    ariaReset();

    // hide search and reset button state
    $searchButton.attr('aria-expanded', false);
    $searchBox.removeClass('show');
    // toggled sub nav
    if ($ariaExpanded === 'true') {
      $this.attr('aria-expanded', false);
      $this.next().attr('aria-hidden', false);
    }
    else {
      $this.attr('aria-expanded', true);
      $this.next().attr('aria-hidden', true);
    }
  });

  // show/hide search
  $searchButton.on('click', function () {
    var $this = $(this),
      $ariaExpanded = $this.attr('aria-expanded');
    // hide all open sub navs and reset aria tags
    ariaReset();
    // toggle aria tag
    if ($ariaExpanded === 'true') {
      $this.attr('aria-expanded', false);
    }
    else {
      $this.attr('aria-expanded', true);
    }
    // toggle search box
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
  // sub nav sticky
  $(window).bind('scroll', function () {
    ($(window).scrollTop() > $mainNavHeight) ? $sectionNav.addClass('sticky'): $sectionNav.removeClass('sticky');
  });
  // close all open items 
  // close on ESC key
  $(document).on('keydown', function (e) {
    console.log(e);
    if (e.keyCode === 27) {
      ariaReset();
    }
  });
  // if the click is not in the nav, close all open nav items
  $(document).on('click', function (e) {
    var $target = e.target;
    if (!$target.closest('.bbNavigation')) {
      ariaReset();
    }
  });
  // hide all open sub navs and reset aria tags
  function ariaReset() {
    $subToggle.attr('aria-expanded', false);
    $('.nav-sub').attr('aria-hidden', false);
  }
});
