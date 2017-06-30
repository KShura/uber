$(function() {
    $('.burger').click(function(e) {
		e.preventDefault();
		if($('header .top_menu').is(":visible")) {
			$(this).css('backgroundImage', '');
		} else {
			$(this).css('backgroundImage', 'url(../img/burger_close.png)');
		}
		$('header .top_menu').toggle('fast');
	});

	 $('select.uberType').change(function() {
        $(this).closest('.table').find('.td').css('display', 'none');
        $(this).closest('.table').find('.td:nth-child(' + $(this).val() + ')').css('display', 'table-cell');

        $(this).closest('.table').find($('select.uberType option[value="' + $(this).val() + '"]')).prop("selected", true);
        
        setTimeout(function() {
            $('input, select').trigger('refresh');
        }, 1)
    });
});