$(window).on("scroll", function() {
    if ($(window).scrollTop() > 250) $('.om-teachers__filter').addClass('om-teachers__filter--fixed');
    else $('.om-teachers__filter').removeClass('om-teachers__filter--fixed');
});

$(window).on("scroll", function() {
    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom < 50) $('.om-teachers__filter').removeClass('om-teachers__filter--fixed');
    //else $('.om-teachers__filter').addClass('om-teachers__filter--fixed');
});