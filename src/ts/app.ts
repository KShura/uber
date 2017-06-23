/// <reference path="../../typings/index.d.ts" />
/// <reference path="reviews.ts" />

$(function() {
    $('.animation input').focus(function() {
        showInputName(this);
    });
    $('.animation input').focusout(function() {
        hideInputName(this);
    });
    $('.animation textarea').focus(function() {
        showInputName(this);
    });
    $('.animation textarea').focusout(function() {
        hideInputName(this);
    });
    
    WebFont.load({
        custom: {
            families: ['MullerRegular', 'MullerLight', 'MullerLightItalic', 'MullerBold', 'MullerMedium', 'MullerThin'],
            urls: ['css/fonts.css']
        },
        active: function() {
            reviewsSlider();
        }
    }); 
}); 

function showInputName(input:any) {
    $(input).siblings('label').animate({
        top: 0,
        left: 0,
        fontSize: 14,
    }, 300);
}

function hideInputName(input:any) {
    $(input).siblings('label').animate({
        top: 25,
        left: 17,
        fontSize: 0,
    }, 300);
}
