/*
** Make elements opacity on hover
 */

// Reasons
if ($(".om-reasons").length) {
    $('.js__reason--hover').mouseenter(function(event){
        $('.js__reason--hover').not(this).animate({opacity:0.5},250);
    });
    $('.js__reason--hover').mouseleave(function(event){
        $('.js__reason--hover').animate({opacity:1},500);
    });
}

// Directions
if ($(".om-directions--main").length) {
    $('.js__directions--hover').mouseenter(function(event){
        $('.js__directions--hover').not(this).animate({opacity:0.5},250);
    });
    $('.js__directions--hover').mouseleave(function(event){
        $('.js__directions--hover').animate({opacity:1},500);
    });
}

// Prices EGE
if ($(".om-price").length) {
    $('.js__tariff-ege').mouseenter(function(event){
        $('.js__tariff-ege').not(this).animate({opacity:0.5},100);
    });
    $('.js__tariff-ege').mouseleave(function(event){
        $('.js__tariff-ege').animate({opacity:1},500);
    });
}

// Prices OGE
if ($(".om-price").length) {
    $('.js__tariff-oge').mouseenter(function(event){
        $('.js__tariff-oge').not(this).animate({opacity:0.5},100);
    });
    $('.js__tariff-oge').mouseleave(function(event){
        $('.js__tariff-oge').animate({opacity:1},500);
    });
}