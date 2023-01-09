$(function () {

    $('.main_slide').slick({
        autoplay: false,
        arrows: false,
    });

    $('.mainVisual .main_slide_arrows button:first-child').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.mainVisual .main_slide_arrows button:last-child').on('click', function () {
        $('.main_slide').slick('slickNext')
    });



})