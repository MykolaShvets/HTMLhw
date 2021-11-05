$(document).ready(function () {
    $('.top__slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    arrows: false
                }
            }
            ]
    });

    $('.bottom__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth:true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });
    $('.mobile-slider__inner').slick({
        slidesToShow: 1,
        arrows: false,
        variableWidth:true
    });
    $('.shop__slider').slick({
        slidesToShow: 2,
        arrows: false,
        variableWidth:true,
        slidesToScroll: 1
    });
});