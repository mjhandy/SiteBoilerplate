$(function () {
  console.log('slider');

  $('.thumbnail-slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true
  });

});
