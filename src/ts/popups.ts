/// <reference path="../../typings/index.d.ts" />
$(function() {
    $('.popup_show').click(function() {
        $('.popup_background').show();
        $('.popup' + $(this).attr('href')).show();
    });

    $('.popup .close').click(function() {
        popupClose();
    });
    
    $('.popup_background').click(function() {
        popupClose();
    });
});

function popupClose() {
    $('.popup_background').hide();
    $('.popup').hide();
}

function showSuccess(form_type:string) {
    if (form_type == "modal") {
        $('.popup_background').show();
        $('.popup#thanks').show();
    } else {
        window.location.href = "/thanks.php";
    }
}