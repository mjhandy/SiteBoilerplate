// Main Nav JS
$(function () {

  var $subToggle = $('.nav-bar .toggle'),
    $searchButton = $('.btn-search'),
    $searchBox = $('#searchBox'),
    docHeight = $(document).height(),
    $navCard = $('.nav-card'),
    $cardToggler = $('.nav-card .card-header');

  // sub nav toggle
  $subToggle.on('click', function () {
    console.log('click');

    var $this = $(this),
      $ariaExpanded = $this.attr('aria-expanded');

    // hide all open sub navs
    $subToggle.attr('aria-expanded', false);
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

    console.log('search button click', docHeight);
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

    //$('body').toggleClass('no-scroll');

    $searchBox.toggleClass('show');
  });

  // cards
  // make each nav card's header link a link in the body
  $navCard.each(function (i, v) {
    var $cardHeaderLink = $('.card-header a', v),
      $cardBody = $('.card-body', v);
    $cardHeaderLink
      .clone()
      .prependTo($cardBody)
      .addClass('first');
  });
  //   // for mobile, open close cards
  $cardToggler.on('click', function () {

    var $this = $(this);
    $this.toggleClass('on');

    $this.next('.card-body').fadeToggle('fast', 'linear');
  });
});
