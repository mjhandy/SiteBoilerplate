$(function () {
  console.log('slider');

  var $video = $('.video'),
  $videoHeight = $video.height;

  console.log($videoHeight);



  $('.thumbnail-slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true
  });

});
