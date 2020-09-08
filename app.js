// alert('Hello World');


// var hello = "Hello World";
// alert(hello);


// var str1 = 'Hello';
// var str2 = 'World!!';
// alert(str1 + str2);


// var orange = 100;
// var apple = 120;

// if(orange < apple){
// 	alert('みかんの値段がりんごより安い');
// }
// else if(orange == apple){
// 	alert('みかんとりんごが同じ値段')
// }
// else{
// 	alert('みかんの値段がりんごより高い')
// }


// var max = 100;
// var num = 1;
// var count = 0;

// while(num < max){
// 	num = num * 2;
// 	count = count + 1;
// }

// alert('2を掛け続けて' + max + 'をこえるのに必要だった回数は' + count + '回です。');



// var i;
// var num = 0;

// for(i = 1; i < 11; i++){
// 	num = num + i;
// }

// alert('1から10まで足算した結果は' + num + 'です');



// var alertString;
// alertString = addString("WebCapm");

// alert(alertString);

// function addString(strA){
// 	var addStr = "Hello " + strA;
// 	return addStr;
// }


// var promptStr = prompt('何か好きな文字を入力してください。');
// alert(promptStr)


// var user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');
// var js_hand = getJShand();
// var judge = winLose(user_hand, js_hand)
// alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' +　js_hand + 'です。\n結果は'　+ judge + 'です。');


// function getJShand(){
// 	var js_hand_num = Math.floor( Math.random() * 3 );
// 	// Math.floorが小数点を切り捨て、Math.randomが0以上1未満の値をランダムで返す

// 	if(js_hand_num == 0){
// 		js_hand = "グー";
// 	}else if(js_hand_num == 1){
// 		js_hand = "チョキ";
// 	}else if(js_hand_num == 2){
// 		js_hand = "パー";
// 	}

// 	return js_hand;
// }


// function winLose(user, js){
// 	var winLoseStr;

// 	if(user == "グー"){
// 		if(js == "グー"){
// 			winLoseStr = "あいこ";
// 		}else if(js == "チョキ"){
// 			winLoseStr = "勝ち";
// 		}else if(js == "パー"){
// 			winLoseStr = "負け";
// 		}
// 	}else if(user == "チョキ"){
// 		if(js == "グー"){
// 			winLoseStr = "負け";
// 		}else if(js == "チョキ"){
// 			winLoseStr = "あいこ";
// 		}else if(js_hand == "パー");
// 		winLoseStr = "勝ち";
// 	}else if(user == "パー"){
// 		if(js == "グー"){
// 			winLoseStr = "勝ち";
// 		}else if(js_hand == "チョキ"){
// 			winLoseStr = "負け";
// 		}else if(js_hand == "パー"){
// 			winLoseStr = "あいこ";
// 		}
// 	}
// 	return winLoseStr;
// }



// $(document).ready(function () {
// 	$('body').html('<h1>Hello jQuery!!</h1>');
// });



// $(function(){
// 	$('.box1').css({
// 		'background-color': '#0000FF',
// 		'height': '100px'
// 	});
// });

// $(function(){
// 	$('.box1').slideDown();
// });

// $(function(){
// 	$('.box1').slideUp();
// });

// $(function(){
// 	$('.box1').show();
// 	$('.box1').css({'background-color': '#0000FF'});
// });

$(function(){
	$('.box1').hide();
});