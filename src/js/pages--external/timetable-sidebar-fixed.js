$(window).on("scroll", function() {
    if ($(window).scrollTop() > 250) $('.om-timetable__filter').addClass('om-timetable__filter--fixed');
    else $('.om-timetable__filter').removeClass('om-timetable__filter--fixed');
});

$(window).on("scroll", function() {
    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom < 50) $('.om-timetable__filter').removeClass('om-timetable__filter--fixed');
    //else $('.om-teachers__filter').addClass('om-teachers__filter--fixed');
});