$(window).on("scroll", function() {
    if ($(window).scrollTop() > 250) $('.js-om-timetable__filter').addClass('om-timetable__filter--fixed');
    else $('.js-om-timetable__filter').removeClass('om-timetable__filter--fixed');
});

$(window).on("scroll", function() {
    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom < 350) $('.js-om-timetable__filter').removeClass('om-timetable__filter--fixed');
    //else $('.om-teachers__filter').addClass('om-teachers__filter--fixed');
});