$(function () {

  // is there a video on the page

  if ($('#video').length) {
    // variables
    const video = $("#video")[0], // video DOM object
      seek = $('.progressBar-seek'),
      progressBars = $('.progressBars'),
      progressPlaying = $('.progressBar-playing');

    // buttons
    const playButton = $('.playPause'),
      playPauseIcon = $('.playPauseUse'),
      volumeButton = $('.volumeMute'),
      volumeButtonIcon = $('.volumeMuteUse'),
      volumeSlider = $('.volumeMute-slider');

    /* progress bars START */

    // progress play bar

    // make play bar cliable for seek
    progressBars.on('click', function (e) {
      let o = $(this).offset(),
        l = (e.pageX - o.left),
        w = $('.progressBars').width(), // bar width
        d = video.duration, // video duration
        p = l / w,
        vt = d * p; // video time

      video.currentTime = vt;
    });

    /* progress bars END */


    /* buttons START */

    // video Play/Pause button
    playButton.on('click', function () {
      if (video.paused == true) {
        video.play();
        playPauseIcon
          .attr('href', '/images/bootstrap-Icons/bootstrap-icons.svg#pause-fill');
        playButton
          .attr('aria-label', 'Pause Video');
      }
      else {
        video.pause();
        playPauseIcon
          .attr('href', '/images/bootstrap-Icons/bootstrap-icons.svg#play-fill');
        playButton
          .attr('aria-label', 'Play Video');
      }
    });

    // Mute button
    volumeButton.on('click', function () {
      var $this = $(this),
        vc = video.volume, // video volume
        ci = volumeButtonIcon.attr('href'); // current icon
      console.log('mute/unmute ', vc, ci);
      // toggle icon

    });
    // volume slider
    volumeSlider.on('input change', function (e) {
      var $this = $(this),
        v = parseInt($this.val());
      console.log(v);
      // set video volume
      video.volume = v / 100;
      // set volume button icon based on slider
      if (v === 0) {
        volumeButtonIcon
          .attr('href', '/images/bootstrap-Icons/bootstrap-icons.svg#volume-mute-fill');
      }
      else if (v > 0 || v <= 50) {
        volumeButtonIcon
          .attr('href', '/images/bootstrap-Icons/bootstrap-icons.svg#volume-down-fill');
      }
      else {
        volumeButtonIcon
          .attr('href', '/images/bootstrap-Icons/bootstrap-icons.svg#volume-up-fill');
      }

    });
    /* buttons END */

    /* event listener */

    video.addEventListener('timeupdate', updateProgress, false);
  }

  function updateProgress() {
    // Calculate current progress
    let value = (100 / video.duration) * video.currentTime;


    // Update the slider value
    progressPlaying.width(value + '%');
  }

});
