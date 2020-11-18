function addString(strA){
	var addStr = "Hello " + strA;
	return addStr;
}

var alertString;
alertString = addString("WebCamp");

// alert(alertString);



// var promptStr = prompt("何か好きな文字を入力してください");
// alert(promptStr);



var user_hand = prompt("ジャンケンの手をグー、チョキ、パーから選んでください。");
// alert("あなたの選んだ手は" + user_hand + "です。");
var js_hand = getJShand();
var judge = winLose(user_hand, js_hand);

alert("あなたの選んだ手は"
	+ user_hand
	+ "です。\n JavaScriptの選んだ手は"
	+ js_hand
	+ "です。\n結果は"
	+ judge
	+ "です。");

function getJShand(){
	var js_hand_num = Math.floor(Math.random() * 3);

	if(js_hand_num == 0){
		js_hand = "グー";
	}
	else if (js_hand_num == 1){
		js_hand = "チョキ";
	}
	else if(js_hand_num == 2){
		js_hand = "パー";
	}
	return js_hand;
}
function winLose(user, js){
	var winLoseStr;

	if(user_hand == "グー"){
		if(js_hand == "グー"){
			winLoseStr = "あいこ";
		}
		else if(js_hand == "チョキ"){
			winLoseStr = "勝ち";
		}
		else if(js_hand == "パー"){
			winLoseStr = "負け";
		}
	}
	else if(user_hand == "チョキ"){
		if(js_hand == "グー"){
			winLoseStr = "負け";
		}
		else if (js_hand == "チョキ"){
			winLoseStr = "あいこ";
		}
		else if(js_hand == "パー"){
			winLoseStr = "勝ち";
		}
	}
	else if(user_hand == "パー"){
		if(js_hand == "グー"){
			winLoseStr = "勝ち";
		}
		else if(js_hand == "チョキ"){
			winLoseStr = "負け";
		}
		else if(js_hand == "パー"){
			winLoseStr = "あいこ";
		}
	}
	else{
		winLoseStr = "【処理が正常に実行されませんでした。】";
	}
	return winLoseStr;
}