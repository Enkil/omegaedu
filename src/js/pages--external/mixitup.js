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
    $('.category-tech, .category-socio-science, .category-human').removeClass('invisible');
    $('.category-tech, .category-socio-science').addClass('invisible')
});
$('.om-timetable__filter-btn--tech').click(function(event){
    event.preventDefault();
    $('.om-timetable__filter-btn').removeClass('om-timetable__filter-btn--pressed');
    $(this).addClass('om-timetable__filter-btn--pressed');
    $('.category-tech, .category-socio-science, .category-human').removeClass('invisible');
    $('.category-human, .category-socio-science').addClass('invisible')
});
$('.om-timetable__filter-btn--socio-science').click(function(event){
    event.preventDefault();
    $('.om-timetable__filter-btn').removeClass('om-timetable__filter-btn--pressed');
    $(this).addClass('om-timetable__filter-btn--pressed');
    $('.category-tech, .category-socio-science, .category-human').removeClass('invisible');
    $('.category-tech, .category-human').addClass('invisible')
});
$('.om-timetable__filter-btn--all').click(function(event){
    event.preventDefault();
    $('.om-timetable__filter-btn').removeClass('om-timetable__filter-btn--pressed');
    $(this).addClass('om-timetable__filter-btn--pressed');
    $('.category-tech, .category-socio-science, .category-human').removeClass('invisible')
});