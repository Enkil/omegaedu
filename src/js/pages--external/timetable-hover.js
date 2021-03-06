$('.om-timetable__time').hover(
    function()  {
        $(this).css({'background-color':'#f2c40d'});
        $(".om-timetable__time:not(:hover)").siblings().addClass('om-timetable__day--not-checked');
    },
    function()  {
        $(this).css({'background-color':'transparent'});
        $(".om-timetable__time").siblings().removeClass('om-timetable__day--not-checked');
    }
);

$('.om-timetable__classroom').hover(
    function()  {
        $(this).closest('table').find('.om-timetable__time').css({'background-color':'#f7db6d'});
        $(".om-timetable__classroom:not(:hover)").closest('table').find('.om-timetable__day').addClass('om-timetable__day--not-checked')
    },
    function()  {
        $(this).closest('table').find('.om-timetable__time').css({'background-color':'transparent'});
        $(".om-timetable__classroom:not(:hover)").closest('table').find('.om-timetable__day').removeClass('om-timetable__day--not-checked')
    }
);