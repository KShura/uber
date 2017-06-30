/// <reference path="../../typings/index.d.ts" />
/// <reference path="reviews.ts" />

$(function() {
    var deviceAgent = navigator.userAgent.toLowerCase();
    var iOS = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (iOS) {
        $('label').click(function (event) {
            $('#' + $(event.target).attr('for')).attr('checked', "true").change();
        });

        $('span.select_city').click(function() {
            $(this).find('.jq-selectbox__dropdown').toggle();
        });


    }

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

    $('input[type="file"]').change(function() {
        let val = $(this).val();
        let regV = /[^\\/]+\.[A-Za-z]+/gi; 
        let result = val.match(regV);
        if(result != null) {
          $(this).siblings('span.file_desc').html(result);
        } else {
          $(this).siblings('span.file_desc').html('Файл не выбран');
        }
      });

      $('input#fio').bind("change keyup input click", function() {
        if($('input[name="same_fio"]').prop("checked")) {
            $('input#fio2').val($(this).val());  
        }
      });
      $('input[name="same_fio"]').change(function(){
        if($(this).prop("checked")) {
            $('input#fio2').val($('input#fio').val()); 
        } else {
            $('input#fio2').val('');
        }
      });

      $('input.number').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
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
