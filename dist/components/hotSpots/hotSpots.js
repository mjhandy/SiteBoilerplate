$(function () {
  var $hotSpot = $('.hotSpots'),
    $hotSpotCard = $('.hotSpots-card'),
    $hotSpotImage = $('.hotSpots-img'),
    $spot = $('.hotSpots-spot'),
    $width = $(window).width();
  // card placement if user isn't mobile
  if ($width > 767) {
    $spot.each(function (i, v) {
      var $this = $(this),
        p = $this.position(),
        $left = p.left,
        $top = p.top,
        $id = $this.attr('hsid'),
        $position = $this.attr('position'),
        $card = $('.hotSpots-card[hsID="' + $id + '"'),
        $cardHeight = $card.height();
      // set hot spot card position
      if ($position.includes('right')) { // card opens to the right of the hotspot
        $left = p.left + 50;
      }
      if ($position.includes('left')) { // card opens to the left of the hotspot
        $left = p.left - 250;
      }
      if ($position.includes('top')) { // card opens to the left of the hotspot        
        $top = p.top;
      }
      if ($position.includes('bottom')) { // card opens to the left of the hotspot
        console.log('bottom');
        $top = p.top - $cardHeight;
      }
      $('.hotSpots-card[hsID="' + $id + '"').css({
        'top': $top,
        'left': $left
      });
    });
  }
  // close all hot spots if the image is click
  $hotSpotImage.on('click', function () {
    $hotSpotCard
      .removeClass('show');
  });
  // hot spot click event
  $spot.on('click', function () {
    $spotID = $(this).attr('hsID');
    // hide all hotspots
    $hotSpotCard
      .removeClass('show');
    // show the selected hotspot
    $(this).next().addClass('show');
  });
});
