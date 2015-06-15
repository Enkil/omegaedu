var mySwiper = new Swiper ('.swiper-container', {
// Optional parameters
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    keyboardControl: true,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true,
       // Disable preloading of all images
    preloadImages: false,
       // Enable lazy loading
    lazyLoading: true
});

var mySwiper2 = new Swiper ('.swiper-container-2', {
// Optional parameters
    pagination: '.swiper-pagination',
    paginationClickable: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
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
