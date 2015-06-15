/*
** Make elements opacity on hover
 */

function opacityOnHover(selector) {

    var element = $(selector);

    element.mouseenter(function(){
        element.not(this).stop().animate({'opacity':0.5}, 300);
    });

    element.mouseleave(function(){
        element.stop().animate({'opacity':1}, 300);
    });
}

// Reasons
if ($(".om-reasons").length) {
    var reasons = new opacityOnHover('.js__reason--hover');
}

//Directions
if ($(".om-directions--main").length) {
    var directions = new opacityOnHover('.js__directions--hover');
}

// Prices EGE
if ($(".om-price").length) {
    var pricesEge = new opacityOnHover('.js__tariff-ege');
}

// Prices OGE
if ($(".om-price").length) {
    var pricesOge = new opacityOnHover('.js__tariff-oge');
}