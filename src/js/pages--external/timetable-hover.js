// Directions
//if ($('.om-timetable__classroom').length) {
//    $('.om-timetable__classroom').hover(
//        function(){
//            $(this).closest('table').find('.om-timetable__time').css('background-color:','#f7db6d');
//        }
//    );
//}

$('.om-timetable__time').hover(
    function()  {
        $(".om-timetable__time:not(:hover)").siblings().addClass('om-timetable__day--not-checked')
    },
    function()  {
        $(".om-timetable__time:not(:hover)").siblings().removeClass('om-timetable__day--not-checked')
    }
);