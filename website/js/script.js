$(document).ready(function(){
	$('.menu .menu-button').click(function(){
		$('.menu ul').slideToggle();
	});

	if ($(window).width()<=860 && $('.menu ul:visible')){
		$('.content, .content-bottom, .content-top > *:not(#header)').click(function(){
			$('.menu ul').slideUp();
		});
	}

	$('.content-top .quote').click(function(){
		$('html, body').animate({scrollTop: 0}, 500);
		$('#fade').fadeIn('fast');
		$('#popup').fadeIn('slow');
	});

	$('#fade').click(function(){
		$('#fade, #popup').fadeOut('fast');
	});
});

function messPopup(el){
	$(el).slideDown();
	setTimeout(function() {
		$(el).slideUp()
	}, 4000);
}

function send(elem){
	var form = $(elem),
	error = false,
	name = form.find('#name'),
	company = form.find('#company'),
	email = form.find('#email'),
	re_email = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
	if(name.val().length < 2){
		name.addClass("error");
		error = true;
		$('#popup .success').addClass('error');
		$('#popup .success').text('Not valid name');
		messPopup($('#popup .success'));
	} else {
		name.removeClass("error");
	}
	if(company.val().length <= 2){
		company.addClass("error");
		error = true;
		$('#popup .success').addClass('error');
		$('#popup .success').text('Not valid company');
		messPopup($('#popup .success'));
	} else {
		company.removeClass("error");
	}
	if(!re_email.test(email.val())){
		email.addClass("error");
		error = true;
		$('#popup .success').addClass('error');
		$('#popup .success').text('Not valid E-mail');
		messPopup($('#popup .success'));
	} else {
		email.removeClass("error");
	}
	if (name.val().length < 2 && company.val().length <= 2 && !re_email.test(email.val())) {
		name.addClass("error");
		company.addClass("error");
		error = true;
		$('#popup .success').addClass('error');
		$('#popup .success').text('Please fill the form correctly!');
		messPopup($('#popup .success'));
	}
	if(error) return false;
	var data = form.serialize();
	$.ajax({
		data:data,
		url:'/send.php',
		type:'post',
		dataType:'text',
		success:function(msg){
			$('#popup .success').removeClass('error');
			$('#popup .success').text('Message sent!');
			messPopup($('#popup .success'));
			setTimeout(function() {
				$('#fade, #popup').fadeOut('fast');
			}, 4000);
		}
    })
}

function subscribe(elem){
	var form = $(elem),
	error = false,
	subemail = form.find('#sub-email'),
	succ = $('.content-bottom .subscribe .success'),
	re_email = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
	if(!re_email.test(subemail.val())){
		subemail.addClass("error");
		error = true;
		succ.addClass('error');
		succ.text('Not valid E-mail');
		messPopup(succ);
	} else {
		subemail.removeClass("error");
	}
	if(error) return false;
	var data = form.serialize();
	$.ajax({
		data:data,
		url:'/subscribe.php',
		type:'post',
		dataType:'text',
		success:function(msg){
			succ.removeClass('error');
			succ.text('Request has been send!');
			messPopup(succ);
		}
    })
}