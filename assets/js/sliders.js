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
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2
            }
        },
        {
          breakpoint: 992,
          settings: {
            dots: true,
            customPaging: function (slider, i) {
              return '<button class="custom-dot" data-slide="' + i + '">' + '</button>';
            }
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
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2
            }
        },
        {
          breakpoint: 992,
          settings: {
            dots: true,
            customPaging: function (slider, i) {
              return '<button class="custom-dot" data-slide="' + i + '">' + '</button>';
            }
          }
        },
    ]
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
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2
            }
        },
        {
          breakpoint: 992,
          settings: {
            dots: true,
            customPaging: function (slider, i) {
              return '<button class="custom-dot" data-slide="' + i + '">' + '</button>';
            }
          }
        },
    ]
    
});



$('.item-slider').slick({
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 1, 
  slidesToScroll: 1,
  customPaging: function (slider, i) {
    return '<button class="custom-dot" data-slide="' + i + '">' + '</button>';
  }
});

