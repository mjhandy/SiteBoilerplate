// Main Nav JS
$(function () {

  var $subToggle = $('.nav-bar .toggle');


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
  })
});
