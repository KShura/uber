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
});