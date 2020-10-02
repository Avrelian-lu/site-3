$(function () {
  $(".main-slider__items").slick({
    prevArrow:
      '<button type="button" class="main-slider__slick-prev main-slider__slick-btn"><svg height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.1713 25.7279L0.443359 13L13.1713 0.272078L15.9997 3.10051L6.10021 13L15.9997 22.8995L13.1713 25.7279Z" /></svg></button>',
    nextArrow:
      '<button type="button" class="main-slider__slick-next main-slider__slick-btn"><svg height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.82872 0.272078L15.5566 13L2.82872 25.7279L0.000291705 22.8995L9.89979 13L0.000291705 3.10051L2.82872 0.272078Z" /></svg></button>',
    dots: true,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $(".reviews__slider").slick({

    dots: true,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $('.header__menu-btn').on('click', function(){
    $('.header__menu').slideToggle();
  });
  $('.modal-btn').click(function(){
    $.fancybox.close();
});
$('a.current-page').click(function() { return false; });
});
