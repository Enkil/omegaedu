var mySwiper = new Swiper ('.swiper-container', {
// Optional parameters
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    keyboardControl: true,
    paginationClickable: true,
    spaceBetween: 0,
    loop: true
});

var mySwiper2 = new Swiper ('.swiper-container-2', {
// Optional parameters
    pagination: '.swiper-pagination',
    paginationClickable: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    keyboardControl: true
});

$('.owl-carousel').owlCarousel({
    dots:false,
    margin:0,
    loop:true,
    autoWidth:true,
    items:4
});

$('.owl-franch').owlCarousel({
    dots:false,
    margin:20,
    loop:true,
    autoWidth:true,
    items:3,
    center: true,
    startPosition: 3,
    nav: true,
    navText: [
        "<img class='btn-arrow-img btn-arrow-img--prev' src='img/images/franch-slider-control--prev.png'>",
        "<img class='btn-arrow-img btn-arrow-img--next' src='img/images/franch-slider-control--next.png'>"
    ]
});
