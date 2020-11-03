$(function () {

  // variables
  const video = $("#video")[0], // video DOM object
    progressPlaying = $('.progressBars-playing');

  // buttons
  const playButton = $('.playPause'),
    playPauseIcon = $('.playPauseUse');

  /* progress bars START */

  // progress play bar
  function updateProgress() {
    // Calculate current progress
    let value = (100 / video.duration) * video.currentTime;


    // Update the slider value
    progressPlaying.width(value + '%');
  }
  // make play bar cliable for seek
  progressPlaying.on('click', function () {
    let w = $(this).width();

    console.log(w)
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
  /* buttons START */

  /* event listener */

  video.addEventListener('timeupdate', updateProgress, false);

});
