/// <reference path="../../typings/index.d.ts" />

$(function() {
    var deviceAgent = navigator.userAgent.toLowerCase();
    var iOS = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (iOS) {
        $('label').click(function (event) {
            $('#' + $(event.target).attr('for')).attr('checked', "true").change();
        });
    }

    $('input[name="phone"]').mask('+7 999 999 99 99');
});