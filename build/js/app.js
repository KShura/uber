$(function () {
    var deviceAgent = navigator.userAgent.toLowerCase();
    var iOS = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (iOS) {
        $('label').click(function (event) {
            $('#' + $(event.target).attr('for')).attr('checked', "true").change();
        });
        $('span.select_city').click(function () {
            $(this).find('.jq-selectbox__dropdown').toggle();
            var span = $(this);
            $(document).mouseup(function (e) {
                if (!span.is(e.target)
                    && span.has(e.target).length === 0) {
                    span.find('.jq-selectbox__dropdown').hide();
                }
            });
        });
    }
    $('.animation input').focus(function () {
        showInputName(this);
    });
    $('.animation input').focusout(function () {
        hideInputName(this);
    });
    $('.animation textarea').focus(function () {
        showInputName(this);
    });
    $('.animation textarea').focusout(function () {
        hideInputName(this);
    });
    WebFont.load({
        custom: {
            families: ['MullerRegular', 'MullerLight', 'MullerLightItalic', 'MullerBold', 'MullerMedium', 'MullerThin'],
            urls: ['css/fonts.css']
        },
        active: function () {
            reviewsSlider();
        }
    });
    $('.faq .question .title').click(function () {
        if (!$(this).closest('.question').hasClass("open")) {
            $(this).closest('.question').addClass('open');
            $(this).siblings('.answer').show('fast');
        }
        else {
            $(this).siblings('.answer').hide('fast');
            $(this).closest('.question').removeClass('open');
        }
    });
    $('input[type="file"]').change(function () {
        var val = $(this).val();
        var regV = /[^\\/]+\.[A-Za-z]+/gi;
        var result = val.match(regV);
        if (result != null) {
            $(this).siblings('span.file_desc').html(result);
        }
        else {
            $(this).siblings('span.file_desc').html('Файл не выбран');
        }
    });
    $('input#fio').bind("change keyup input click", function () {
        if ($('input[name="same_fio"]').prop("checked")) {
            $('input#fio2').val($(this).val());
        }
    });
    $('input[name="same_fio"]').change(function () {
        if ($(this).prop("checked")) {
            $('input#fio2').val($('input#fio').val());
        }
        else {
            $('input#fio2').val('');
        }
    });
    $('input.number').bind("change keyup input click", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });
    $('input[name="phone"]').mask('+7 999 999 99 99');
    $('select').styler();
});
function showInputName(input) {
    $(input).siblings('label').animate({
        top: 0,
        left: 0,
        fontSize: 14,
    }, 300);
}
function hideInputName(input) {
    $(input).siblings('label').animate({
        top: 25,
        left: 17,
        fontSize: 0,
    }, 300);
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QVEsRUFBRSxFQUFFO0tBQ2YsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNaLENBQUM7QUFFRCx1QkFBdUIsS0FBUztJQUM1QixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUMvQixHQUFHLEVBQUUsRUFBRTtRQUNQLElBQUksRUFBRSxFQUFFO1FBQ1IsUUFBUSxFQUFFLENBQUM7S0FDZCxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ1osQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cInJldmlld3MudHNcIiAvPlxyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgIHZhciBkZXZpY2VBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuICAgIHZhciBpT1MgPSBkZXZpY2VBZ2VudC5tYXRjaCgvKGlwaG9uZXxpcG9kfGlwYWQpLyk7XHJcbiAgICBpZiAoaU9TKSB7XHJcbiAgICAgICAgJCgnbGFiZWwnKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgJCgnIycgKyAkKGV2ZW50LnRhcmdldCkuYXR0cignZm9yJykpLmF0dHIoJ2NoZWNrZWQnLCBcInRydWVcIikuY2hhbmdlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ3NwYW4uc2VsZWN0X2NpdHknKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuanEtc2VsZWN0Ym94X19kcm9wZG93bicpLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICBsZXQgc3BhbiA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpeyBcclxuICAgICAgICAgICAgaWYgKCFzcGFuLmlzKGUudGFyZ2V0KSAvLyDQtdGB0LvQuCDQutC70LjQuiDQsdGL0Lsg0L3QtSDQv9C+INC90LDRiNC10LzRgyDQsdC70L7QutGDXHJcbiAgICAgICAgICAgICAgICAmJiBzcGFuLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7IC8vINC4INC90LUg0L/QviDQtdCz0L4g0LTQvtGH0LXRgNC90LjQvCDRjdC70LXQvNC10L3RgtCw0LxcclxuICAgICAgICAgICAgICAgIHNwYW4uZmluZCgnLmpxLXNlbGVjdGJveF9fZHJvcGRvd24nKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXHJcblx0fSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAkKCcuYW5pbWF0aW9uIGlucHV0JykuZm9jdXMoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2hvd0lucHV0TmFtZSh0aGlzKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLmFuaW1hdGlvbiBpbnB1dCcpLmZvY3Vzb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGhpZGVJbnB1dE5hbWUodGhpcyk7XHJcbiAgICB9KTtcclxuICAgICQoJy5hbmltYXRpb24gdGV4dGFyZWEnKS5mb2N1cyhmdW5jdGlvbigpIHtcclxuICAgICAgICBzaG93SW5wdXROYW1lKHRoaXMpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuYW5pbWF0aW9uIHRleHRhcmVhJykuZm9jdXNvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaGlkZUlucHV0TmFtZSh0aGlzKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBXZWJGb250LmxvYWQoe1xyXG4gICAgICAgIGN1c3RvbToge1xyXG4gICAgICAgICAgICBmYW1pbGllczogWydNdWxsZXJSZWd1bGFyJywgJ011bGxlckxpZ2h0JywgJ011bGxlckxpZ2h0SXRhbGljJywgJ011bGxlckJvbGQnLCAnTXVsbGVyTWVkaXVtJywgJ011bGxlclRoaW4nXSxcclxuICAgICAgICAgICAgdXJsczogWydjc3MvZm9udHMuY3NzJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjdGl2ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldmlld3NTbGlkZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTsgXHJcblxyXG4gICAgJCgnLmZhcSAucXVlc3Rpb24gLnRpdGxlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYoISQodGhpcykuY2xvc2VzdCgnLnF1ZXN0aW9uJykuaGFzQ2xhc3MoXCJvcGVuXCIpKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLnF1ZXN0aW9uJykuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmFuc3dlcicpLnNob3coJ2Zhc3QnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuYW5zd2VyJykuaGlkZSgnZmFzdCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5xdWVzdGlvbicpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlZ1YgPSAvW15cXFxcL10rXFwuW0EtWmEtel0rL2dpOyBcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdmFsLm1hdGNoKHJlZ1YpO1xyXG4gICAgICAgIGlmKHJlc3VsdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdzcGFuLmZpbGVfZGVzYycpLmh0bWwocmVzdWx0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnc3Bhbi5maWxlX2Rlc2MnKS5odG1sKCfQpNCw0LnQuyDQvdC1INCy0YvQsdGA0LDQvScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAkKCdpbnB1dCNmaW8nKS5iaW5kKFwiY2hhbmdlIGtleXVwIGlucHV0IGNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKCQoJ2lucHV0W25hbWU9XCJzYW1lX2Zpb1wiXScpLnByb3AoXCJjaGVja2VkXCIpKSB7XHJcbiAgICAgICAgICAgICQoJ2lucHV0I2ZpbzInKS52YWwoJCh0aGlzKS52YWwoKSk7ICBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICAkKCdpbnB1dFtuYW1lPVwic2FtZV9maW9cIl0nKS5jaGFuZ2UoZnVuY3Rpb24oKXtcclxuICAgICAgICBpZigkKHRoaXMpLnByb3AoXCJjaGVja2VkXCIpKSB7XHJcbiAgICAgICAgICAgICQoJ2lucHV0I2ZpbzInKS52YWwoJCgnaW5wdXQjZmlvJykudmFsKCkpOyBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCdpbnB1dCNmaW8yJykudmFsKCcnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJCgnaW5wdXQubnVtYmVyJykuYmluZChcImNoYW5nZSBrZXl1cCBpbnB1dCBjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZS5tYXRjaCgvW14wLTldL2cpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnaW5wdXRbbmFtZT1cInBob25lXCJdJykubWFzaygnKzcgOTk5IDk5OSA5OSA5OScpO1xyXG5cclxuICAgICQoJ3NlbGVjdCcpLnN0eWxlcigpO1xyXG59KTsgXHJcblxyXG5mdW5jdGlvbiBzaG93SW5wdXROYW1lKGlucHV0OmFueSkge1xyXG4gICAgJChpbnB1dCkuc2libGluZ3MoJ2xhYmVsJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgfSwgMzAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZUlucHV0TmFtZShpbnB1dDphbnkpIHtcclxuICAgICQoaW5wdXQpLnNpYmxpbmdzKCdsYWJlbCcpLmFuaW1hdGUoe1xyXG4gICAgICAgIHRvcDogMjUsXHJcbiAgICAgICAgbGVmdDogMTcsXHJcbiAgICAgICAgZm9udFNpemU6IDAsXHJcbiAgICB9LCAzMDApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NyYy90cyJ9
