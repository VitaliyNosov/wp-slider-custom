$(document).ready(function(){

    $('.custom-slider').slick({
        arrows: false, 
        dots: false,
        slidesToShow: 2,
        responsive: [
            {
              breakpoint: 1025, 
              settings: {
                slidesToShow: 1 
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1
              }
            }
          ]

    });

    
    $('.slider-button-one').click(function() {
        $('.custom-slider').slick('slickPrev');
      });
  
      $('.slider-button-two').click(function() {
        $('.custom-slider').slick('slickNext');
    });


});

