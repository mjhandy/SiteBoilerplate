$(function () {
  if ($('#videoPlayList').length) {
    var $videoJSON = '/json/video.json',
      $videoSliderThumbnail = '',
      $videoPlayer = $('video'),
      $videoContent = '',
      $videoCount,
      $feedID,
      $lastVideo = localStorage.getItem('lastVideoPlayed'),
      $slickURL = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
      video = $videoPlayer[0];
    /* 
      Load the video JSON data
    */
    $.getJSON($videoJSON, function (data) {
      /* 
        loop through the JSON, adding the  data to Local Storage, build the playlist thumbnails and set the correct video 
      */
      $.each(data, function (i, e) {
        var $vid = e.id,
          $title = e.title,
          $copy = e.copy,
          $url = e.url,
          $detail = e.detail,
          $thumbnail = e.thumbnail,
          $poster = e.poster,
          c = i + 1, // a counter for the video storage as I want it 1 based, not 0 based
          $active = $vid === $lastVideo ? 'active' : '';


        // add json object data into local storage
        // video ID will need to reflect feed ID
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
        $videoSliderThumbnail += "<div class='thumbnail-slide--item' data-index='" + i + "'>";
        $videoSliderThumbnail += "<button class='thumbnail-slide--button " + $active + "' data-videoid='" + $vid + "'>";
        $videoSliderThumbnail += '<img src="' + $thumbnail + '" alt="' + $title + '">';
        $videoSliderThumbnail += '<div class="nowPlaying">Now Playing</div>';
        $videoSliderThumbnail += $title;
        $videoSliderThumbnail += '</button>';
        $videoSliderThumbnail += '</div>';

        /*
          This function sets the video and content from the JSON data. It's called twice, first if there is no last video value, and then if there is. 
          We only need this to run once per page load.
        */
        function buildVideoAndContent() {
          // video and video poster
          $videoPlayer
            .html('<source src="' + $url + '" type="video/mp4"></source>')
            .attr('poster', $poster)
            .attr('videoID', $vid);
          // video content and links
          $videoContent += '<h2>' + $title + '</h2>';
          $videoContent += $copy;
          $videoContent += '<p><a href="' + $detail + '" target="_blank" class="videoContentLink">Video Details</a></p>';
          $videoContent += '<p><a href="/videoLibrary.html" target="_blank" class="videoContentLink">Video Library</a></p>';
        }
      });
      // add video content
      $('.content').append($videoContent);
      // add slider html
      $('#videoThumbnailSlider').append($videoSliderThumbnail);
      // set thumbnail as active

      // init the slider
      initSlider();
    });
    /*
      When clicking a thumnbail, load the appropriate video and supporting copy. Video will not auto play
    */
    $('#videoThumbnailSlider').on('click', '.thumbnail-slide--button', function () {
      var $this = $(this),
        $videoID = $this.attr('data-videoid'),
        $vTitle = "<h2>" + localStorage.getItem($videoID + 'title') + "</h2>",
        $vCopy = localStorage.getItem($videoID + 'copy'),
        $vDetail = localStorage.getItem($videoID + 'detail'),
        $vURL = localStorage.getItem($videoID + 'url'),
        $vPoster = localStorage.getItem($videoID + 'poster');

      // clear all active state, and make clicked thumbnail active
      $('.thumbnail-slide--button').removeClass('active');
      $this.addClass('active');
      // set video
      $videoPlayer
        .html('<source src="' + $vURL + '" type="video/mp4"></source>')
        .attr('poster', $vPoster)
        .attr('videoID', $videoID);
      // load video
      $videoPlayer[0].load();

      // set video copy and links
      $('.content')
        .html($vTitle)
        .append($vCopy)
        .append('<p><a href="' + $vDetail + '" target="_blank">Video Details</a></p>')
        .append('<p><a href="/videoLibrary.html" target="_blank" class="videoContentLink">Video Library</a></p>');

      // set local storage lastplayed with videoID
      localStorage.setItem('lastVideoPlayed', $videoID);

    });

    // pause video if video detail or video lib links are clicks
    $('.content').on('click', 'a', function () {
      video.pause();
    });
    /* 
      Video Playback and Control features
    */
    $('.playerControls-play').on('click', function () {
      if (video.paused)
        video.play();
      else
        video.pause();
      $(this).toggleClass('play');
    });
    $('progress').on('click', function (e) {
      var pos = (e.pageX - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
      video.currentTime = pos * video.duration;
    });
    video.on('timeupdate', function () {
      var currentPos = video[0].currentTime; //Get currenttime
      var maxduration = video[0].duration; //Get video duration
      var percentage = 100 * currentPos / maxduration; //in %
      $('.timeBar').css('width', percentage + '%');
    });
  }

  /*
    Here we init slick for the thumbnail slider
  */
  function initSlider() {
    //thumbnail slider
    $.getScript($slickURL, function () {
      $('.thumbnail-slide').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: true,
        // custom arrows
        nextArrow: '<button class="slick-arrow slick-arrow-next" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.387 62.774"><g transform="translate(21.387 61.387) rotate(-180)"><path d="M0,0-20,30,0,60" transform="translate(20)" fill="none" stroke-linejoin="round" stroke-miterlimit="10" /></g></svg></button>',
        prevArrow: '<button class="slick-arrow slick-arrow-prev" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.387 62.773"><g transform="translate(1 1.387)"><path d="M0,0-20,30,0,60" transform="translate(20)" fill="none" stroke-linejoin="round" stroke-miterlimit="10" /></g></svg></button>',
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
    });


  }
});
