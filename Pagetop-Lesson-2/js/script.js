$(function(){
	$('#back a').on('click', function(event){
		$('body, html').animate({
			scrollTop:0
		}, 800);
		event.preventDefault();
		// aタグの遷移する要素を無効にするメソッド
	});
});