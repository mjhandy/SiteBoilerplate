$(function () {
  var $pluginURL = '//cdnjs.cloudflare.com/ajax/libs/jquery-tubeplayer/2.1.0/jquery.tubeplayer.min.js',
    $player = $('.youtubePlayer'),
    $playButton = $('.btn-play'),
    $seekButton = $('.btn-seek'),
    $videoID = $player.attr('data-videoid'),
    cT = $player.attr("data-chaptertiming"),
    cTo = $.parseJSON(cT);


  // check if the player is on the page
  if ($player.length) {

    // build the chapter buttons

    $.each(cTo, function (i, v) {
      // build out the buttons
      $.each(v, function (i2, v2) {
        $('.videoControl').append("<button class='btn btn-seek' data-seek='" + v2 + "'>" + i2 + "</button>");
      });
    });

    // load plugin
    $.getScript($pluginURL, function () {
      // plugin in settings
      $player.tubeplayer({
        preferredQuality: "auto",
        initialVideo: $videoID,
        showinfo: false
      });



      // seek button click
      $('body').on('click', $seekButton, function (e) {

        $player
          .tubeplayer("seek", e.target.getAttribute('data-seek'));
      });

      // play button
      $playButton.on('click', function () {
        $player.tubeplayer("play");
      })
    });



  }

});
