$(function() {
	$('#back a').on('click', function(event){
		$('body, html').animate({
			scrollTop:0
		}, 1000);
		event.preventDefault();
	});
});