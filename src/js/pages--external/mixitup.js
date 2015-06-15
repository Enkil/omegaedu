// Instantiate MixItUp:

$('#mixitup-teachers').mixItUp({
    controls: {
        //toggleFilterButtons: true,
        activeClass: 'om-teachers__filter-btn--pressed'
    }
});

// Filter timetable category-human

$('.om-timetable__filter-btn--human').click(function(event){
    event.preventDefault();
    $('.om-timetable__filter-btn').removeClass('om-timetable__filter-btn--pressed');
    $(this).addClass('om-timetable__filter-btn--pressed');
    $('.category-tech, .category-socio-science, .category-human').removeClass('om-timetable__day--not-checked');
    $('.category-tech, .category-socio-science').addClass('om-timetable__day--not-checked')
});
$('.om-timetable__filter-btn--tech').click(function(event){
    event.preventDefault();
    $('.om-timetable__filter-btn').removeClass('om-timetable__filter-btn--pressed');
    $(this).addClass('om-timetable__filter-btn--pressed');
    $('.category-tech, .category-socio-science, .category-human').removeClass('om-timetable__day--not-checked');
    $('.category-human, .category-socio-science').addClass('om-timetable__day--not-checked')
});
$('.om-timetable__filter-btn--socio-science').click(function(event){
    event.preventDefault();
    $('.om-timetable__filter-btn').removeClass('om-timetable__filter-btn--pressed');
    $(this).addClass('om-timetable__filter-btn--pressed');
    $('.category-tech, .category-socio-science, .category-human').removeClass('om-timetable__day--not-checked');
    $('.category-tech, .category-human').addClass('om-timetable__day--not-checked')
});
$('.om-timetable__filter-btn--all').click(function(event){
    event.preventDefault();
    $('.om-timetable__filter-btn').removeClass('om-timetable__filter-btn--pressed');
    $(this).addClass('om-timetable__filter-btn--pressed');
    $('.category-tech, .category-socio-science, .category-human').removeClass('om-timetable__day--not-checked')
});