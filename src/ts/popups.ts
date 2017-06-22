$( ".popup_show" ).click(function(e) {
  e.preventDefault(); 
	$('.popup_background').css('display', 'block');
	var type = $(this).attr('href');
	switch (type) {
      case '#callback':
        $('#callback').css('display', 'block');        
        $('#callback input[name="name"]').focus();
      break      
      case '#order':
        $('#order').css('display', 'block');        
        $('#order input[name="name"]').focus();
      break
  }
});

function closePopup() {
  $('.popup_window').css('display', 'none');
  $('.popup_background').css('display', 'none'); 
  $('section.form .wrapper').css('display', 'block');
}

$( ".popup_close" ).click(function(e){
  e.preventDefault();  
  closePopup();
});

$( ".popup_background" ).click(function(e){  
  closePopup();
});

function showSuccessCallback() {
  $('.popup_window').css('display', 'none');
  $('.popup_background').css('display', 'block'); 
  $('#success_callback').css('display', 'block');
}

function showSuccessOrder(name:string, gift:string, item:string, image:string, price:string) {
  $('.popup_window').css('display', 'none');
  $('.popup_background').css('display', 'block'); 
  $('#success_order #name').html(name); 
  $('#success_order #gift').html(gift); 
  $('#success_order #price').html(price); 
  $('#success_order #item').html(item);   
  $('#success_order #image').attr('src', image);

  $('#success_order').css('display', 'block');
}

function showSuccessCatalog() {
  let top = $('.catalog form').offset().top - $(window).scrollTop();
  $('#success_catalog').css('top', top);
  $('.popup_window').css('display', 'none');
  $('.popup_background').css('display', 'block'); 
  $('#success_catalog').css('display', 'block');
}

function showSuccessReview() {
  $('.popup_window').css('display', 'none');
  $('.popup_background').css('display', 'block'); 
  $('#success_review').css('display', 'block');
}

function showSuccess() {
  let top = $('.form form').offset().top - $(window).scrollTop();
  $('#success').css('top', top);
  $('.popup_window').css('display', 'none');
  $('.popup_background').css('display', 'block'); 
  $('#success').css('display', 'block');
  $('section.form .wrapper').css('display', 'none');
}
