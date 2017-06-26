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

    $('.faq .question .title').click(function() {
        if(!$(this).closest('.question').hasClass("open")) {            
            $(this).closest('.question').addClass('open');
            $(this).siblings('.answer').show('fast');
        } else {
            $(this).siblings('.answer').hide('fast');
            $(this).closest('.question').removeClass('open');
        }
    });

    $('input[name="phone"]').mask('+7 999 999 99 99');

    $('select').styler();
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
