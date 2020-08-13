$(function () {
  var $videoJSON = '/json/video.json',
    $videoSliderThumbnail = '',
    $videoPlayer = $('#videoPlayer'),
    $videoContent = '',
    $lastVideo = localStorage.getItem('lastVideoPlayed'),
    $tmbNailButton = $('.thumbnail-slide--button');

  //load video JSON
  $.getJSON($videoJSON, function (data) {


    $.each(data, function (i, e) {
      var $vid = e.id,
        $title = e.title,
        $copy = e.copy,
        $url = e.url,
        $detail = e.detail,
        $thumbnail = e.thumbnail,
        $poster = e.poster,
        c = i + 1; // a counter for the video storage


      // add json object data into local storage
      localStorage.setItem('video' + c + 'id', $vid);
      localStorage.setItem('video' + c + 'title', $title);
      localStorage.setItem('video' + c + 'copy', $copy);
      localStorage.setItem('video' + c + 'url', $url);
      localStorage.setItem('video' + c + 'detail', $detail);
      localStorage.setItem('video' + c + 'thumbnail', $thumbnail);
      localStorage.setItem('video' + c + 'poster', $poster);


      // build out the main video and content
      if ($lastVideo === null && i === 0) {
        buildVideoAndContent();
      }
      else if ($lastVideo === $vid) {
        buildVideoAndContent();
      }

      // build out the thumbnails
      $videoSliderThumbnail += "<div class='thumbnail-slide--item ' data-index='" + i + "'>";
      $videoSliderThumbnail += "<button class='thumbnail-slide--button' data-videoid='" + $vid + "'>";
      $videoSliderThumbnail += '<img src="' + $thumbnail + '" alt="' + $title + '">';
      $videoSliderThumbnail += '<h3>' + $title + '</h3>';
      $videoSliderThumbnail += '</button>';
      $videoSliderThumbnail += '</div>';

      function buildVideoAndContent() {
        // video and video poster
        $videoPlayer
          .attr('src', $url)
          .attr('poster', $poster);
        // video content and links
        $videoContent += '<h2>' + $title + '</h2>';
        $videoContent += $copy;
        $videoContent += '<p><a href="' + $detail + '" target="_blank" class="videoContentLink">Video Details</a></p>';
      }


    });
    // add video content
    $('.content').append($videoContent);
    // add slider html
    $('#videoThumbnailSlider').append($videoSliderThumbnail);
    // init the slider
    buildSlider();

    // thumbnail click
    $('#videoThumbnailSlider').on('click', '.thumbnail-slide--button', function () {
      var $this = $(this),
        $videoID = $this.attr('data-videoid'),
        $vTitle = "<h2>" + localStorage.getItem($videoID + 'title') + "</h2>",
        $vCopy = localStorage.getItem($videoID + 'copy'),
        $vDetail = localStorage.getItem($videoID + 'detail'),
        $vURL = localStorage.getItem($videoID + 'url'),
        $vPoster = localStorage.getItem($videoID + 'poster');

      // set video
      $videoPlayer
        .attr('src', $vURL)
        .attr('poster', $vPoster);

      // set video copy
      $('.content')
        .html($vTitle)
        .append($vCopy)
        .append("<p><a href='" + $vDetail + "'>Video Details</a></p>");

      // set local storage lastplayed with videoID
      localStorage.setItem('lastVideoPlayed', $videoID);

    });
    // pause video if video detail or video lib links are clicks
    $('.content').on('click', '.videoContentLink', function () {
      console.log('content link clicked');
      $videoPlayer.pause();
    });
  });



  function buildSlider() {
    //thumbnail slider
    $('.thumbnail-slide').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: false,
      arrows: true,
      responsive: [{
          breakpoint: 1920, // 1920 down
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true

          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });
  }



});
