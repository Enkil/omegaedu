$(window).on("scroll", function() {
    if ($(window).scrollTop() > 250) $('.om-subjects__filter').addClass('om-subjects__filter--fixed');
    else $('.om-subjects__filter').removeClass('om-subjects__filter--fixed');
});

$(window).on("scroll", function() {
    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom < 50) $('.om-subjects__filter').removeClass('om-subjects__filter--fixed');
    //else $('.om-subjects__filter').addClass('om-subjects__filter--fixed');
});