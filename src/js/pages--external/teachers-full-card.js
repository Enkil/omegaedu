// Show/Hide teacher full card
if ($('.om-teachers__full-card-close').length) {
    // show by click on small card
    $('.om-teachers__teacher').click(function(){
        scrollBack = $(this);
        $('.om-teachers__full-card').removeClass('hidden');
        $('html, body').animate({
            scrollTop: $(".om-teachers__full-card").offset().top
        }, 1000);
    });

    // hide by click on cross
    $('.om-teachers__full-card-close').click(function(){
        $('.om-teachers__full-card').addClass('hidden');
        $('html, body').animate({
            scrollTop: scrollBack.offset().top
        }, 1000);
    });
}