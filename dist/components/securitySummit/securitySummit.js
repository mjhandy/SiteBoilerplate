$(function () {
  var $videoJSON = '/json/video.json',
    $videoSliderThumbnail = '',
    $tmbNailButton = $('.thumbnail-slide--button');

  //load video JSON
  $.getJSON($videoJSON, function (data) {

    console.log("Start: " + $videoSliderThumbnail);

    $.each(data, function (i, e) {
      var $vid = e.id,
        $title = e.title,
        $copy = e.copy,
        $url = e.url,
        $detail = e.detail,
        $thumbnail = e.thumbnail,
        $poster = e.poster;

      console.log(i);

      // build out the thumbnails
      $videoSliderThumbnail += "<div class='thumbnail-slide--item ' data-index='" + i + "'>";
      $videoSliderThumbnail += "<button class='thumbnail-slide--button' data-videoid='" + $vid + "'>";
      $videoSliderThumbnail += "<img src='" + $thumbnail + "' alt='" + $title + "'>";
      $videoSliderThumbnail += "<h3>" + $title + "</h3>";
      $videoSliderThumbnail += "</button>";
      $videoSliderThumbnail += "</div>";


    });

    $('#videoThumbnailSlider').append($videoSliderThumbnail);
    buildSlider();
    console.log("End: " + $videoSliderThumbnail);
    // thumbnail click
    $('#videoThumbnailSlider').on('click', '.thumbnail-slide--button', function () {
      var $this = $(this),
        $videoID = $this.attr('data-videoid');

      //set localstorage for video playing
      localStorage.videoPlayID = $videoID;

      console.log($videoID);
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
