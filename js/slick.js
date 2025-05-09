$(function () {
  $(".w-m-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    cssEase: "linear",
    prevArrow: ".w-m-gallery-list-left",
    nextArrow: ".w-m-gallery-list-right",
  });
});
$(function () {
  $(".w-m-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    cssEase: "linear",
    prevArrow: ".w-m-reviews-list-left",
    nextArrow: ".w-m-reviews-list-right",
  });
});
$(function () {
  $(".w-m-why-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    cssEase: "linear",
    prevArrow: ".w-m-why-list-left",
    nextArrow: ".w-m-why-list-right",
  });
});
