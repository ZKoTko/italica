$('.products-slider').slick({
    prevArrow: $('.products-prev'),  
    nextArrow: $('.products-next'),
    dots: false,
    infinite: true,
    slidesToShow: 4, 
    variableWidth: true,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3
          }
        },
    ]
});

$('.season-slider').slick({
    prevArrow: $('.season-prev'),  
    nextArrow: $('.season-next'),
    dots: false,
    infinite: true,
    slidesToShow: 3, 
    variableWidth: true,
    slidesToScroll: 1
});

$('.sales-slider').slick({
    prevArrow: $('.sales-prev'),  
    nextArrow: $('.sales-next'),
    dots: false,
    infinite: true,
    slidesToShow: 4, 
    variableWidth: true,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3
          }
        },
    ]
});

