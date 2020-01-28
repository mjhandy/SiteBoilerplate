// Main Nav JS
$(function () {

  var $subToggle = $('.nav-bar .toggle'),
    $searchButton = $('.btn-search'),
    $searchBox = $('#searchBox'),
    docHeight = $(document).height();

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
});
