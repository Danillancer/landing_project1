if ($('.container').length > 0) {
   $('container').slick({
      dots: true,
      arrows: false,
      slodesToShow: 1,
      autoplaySpeed: 3000,
      nextArrow: '<button type="button" class="slick-next"></button>',
      prevArrow: '<button type="button" class="slick-prev"></button>',
      responsive: [{
         breakpoint: 768,
         settings: {}
      }]
   });
}