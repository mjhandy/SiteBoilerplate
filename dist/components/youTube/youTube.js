$(function () {
  var $pluginURL = '//cdnjs.cloudflare.com/ajax/libs/jquery-tubeplayer/2.1.0/jquery.tubeplayer.min.js',
    $player = $('.youtubePlayer'),
    $playButton = $('.btn-play'),
    $seekButton = $('.btn-seek');

  // check if the player is on the page
  if ($player.length) {


    // load plugin

    $.getScript($pluginURL, function () {
      // plugin in settings

      $player.tubeplayer({
        preferredQuality: "auto",
        initialVideo: "kOkQ4T5WO9E",
        showinfo: false
      });

      // seek button click
      $seekButton.on('click', function () {
        var $this = $(this),
          $seekTime = $this.attr('data-seek');

        $player
          .tubeplayer("seek", $seekTime)
          .tubeplayer("pause");
      });

      // play button
      $playButton.on('click', function () {
        $player.tubeplayer("play");
      })
    });



  }

});
