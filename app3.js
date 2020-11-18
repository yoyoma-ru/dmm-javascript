// $(document).ready(function(){
// 	$("body").html("<h1>Hello jQuery!!<h1>");
// });

// $(function(){
// 	$("body").html("<h2>がんばろう<h2>");
// });


// CSSの変更
// $(function(){
// 	$(".box1").css({
// 		'background-color': '#0000FF',
// 		'height': '100px',
// 	});
// });


// スライドダウン
// $(function(){
// 	$(".box1").slideDown();
// });


// スライドアップ
// $(function(){
// 	$(".box1").slideUp();
// });


// 要素の表示
// $(function(){
// 	$(".box1").show();
// 	$(".box1").css('background-color', '#0000FF');
// });


// 要素を非表示
// $(function(){
// 	$(".box1").hide();
// });


// マウスオーバー。マウスアウト
// $(function(){
// 	$('.box1').mouseover(function(){
// 		$('.box1').css('background-color', '#0000FF');
// 	});
// 	$('.box1').mouseout(function(){
// 		$('.box1').css('background-color', '#FF0000');
// 	});
// });


// classの切り替え
// $(function(){
// 	$('.box1').mouseover(function(){
// 		$('.box1').addClass('box1-ext');
// 	});
// 	$('.box1').mouseout(function(){
// 		$('.box1').removeClass('box1-ext');
// 	});
// });


// マウスクリックイベント
// $(function(){
// 	$('.box1').on('click', function(){
// 		$('.box1').addClass('box1-ext');
// 	});
// 	$('.box1').mouseout(function(){
// 		$('.box1').removeClass('box1-ext');
// 	});
// });


// this
// $(function(){
// 	$('.box1').on('click', function(){
// 		$(this).slideUp();
// 	});
// });


// children
$(function(){
	$('button').on('click', function(){
		$('ul').children().css('color', 'red');
	});
});