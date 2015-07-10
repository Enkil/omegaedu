//// Show/Hide subject full card
if ($('.om-subjects__full-card-close').length) {

    // show by click on small card
    $('.om-subjects__item').click(function(){
        scrollBack = $(this);
        $('.om-subjects__full-card').removeClass('hidden');
        $('html, body').animate({
            scrollTop: $(".om-subjects__full-card").offset().top
        }, 1000);
    });

    // hide by click on cross
    $('.om-subjects__full-card-close').click(function(){
        $('.om-subjects__full-card').addClass('hidden');
        $('html, body').animate({
            scrollTop: scrollBack.offset().top
        }, 1000);
    });
}

