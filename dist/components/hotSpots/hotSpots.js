$(function () {
  var $hotSpot = $('.hotSpots'),
    $hotSpotCard = $('.hotSpots-card'),
    $hotSpotImage = $('.hotSpots-img'),
    $spot = $('.hotSpots-spot');

  if ($hotSpot.length) {
    console.log('true');
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
    console.log('hot spot click: ', $spotID);
  });



});
