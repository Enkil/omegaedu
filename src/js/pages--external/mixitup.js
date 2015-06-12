// Instantiate MixItUp:

$('#mixitup-teachers').mixItUp({
    controls: {
        //toggleFilterButtons: true,
        activeClass: 'om-teachers__filter-btn--pressed'
    }
});

$('#mixitup-timetable').mixItUp({
    controls: {
        //toggleFilterButtons: true,
        activeClass: 'om-timetable__filter-btn--pressed'
    },
    layout: {
        display: 'table-cell'
    }
});