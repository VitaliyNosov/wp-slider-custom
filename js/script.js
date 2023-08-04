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


// button custom arrow slick


$('.slider-button-two').on('click', function() {
  var newImageUrl = 'http://v2.marketlend.com.au/wp-content/uploads/2023/08/Arrow-2.R.svg';
  $('.slider-button-one img').attr('src', newImageUrl);
});



});

