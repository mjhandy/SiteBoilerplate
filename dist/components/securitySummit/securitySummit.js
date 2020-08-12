$(function () {
  console.log('slider');

  var $video = $('.video'),
    $content = $('.content'),
    $contentHeight = $content.height(),
    $videoHeight = $video.height();


  console.log('Video height: ' + $videoHeight + 'Content height: ' + $contentHeight);

  // check content height
  if ($contentHeight > $videoHeight) {
    $content.addClass('scroll');
  }



  $('.thumbnail-slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true
  });

});
