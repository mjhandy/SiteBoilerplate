$(function () {
  'use strict';

  var $titleCard = $('.video-titleCard'),
    $endCard = $('.video-endCard'),
    $video = document.getElementById('video'),
    $videoTitle = $('.video-title');
  /*
    Let's set some initial items
  */
  // set the video title
  // $videoTitle.html($video.getAttribute('title'));

  /* 
    Title Card
    * On click, fade out the card and start the video playing
  */
  // $titleCard.on('click', function () {
  //   $(this).addClass('hide');
  //   $video.play();
  // });
  /*
    End card
    * When the video ends, show the end card
  */
  // $video.addEventListener('ended', videoEnd, false);



  /*
    Custom Functions
  */

  // when video ends
  function videoEnd() {
    $endCard.addClass('show');
  };



});
