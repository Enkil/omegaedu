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

$('.owl-carousel').owlCarousel({
    loop:true,
    dots:false,
    autoWidth:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
});