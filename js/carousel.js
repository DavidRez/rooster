$(document).ready(function() {
  $(".carousel").slick({
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true,
    accessibility: true,
    dots: true,
    arrows: false,
    variableWidth: false,
    customPaging: function(slider, i) {
      return '<span class="dot"></span>';
    }
  });
  $(".prev").on("click", function() {
    $(".slick-slider").slick("slickPrev");
  });
  $(".next").on("click", function() {
    $(".slick-slider").slick("slickNext");
  });
});
