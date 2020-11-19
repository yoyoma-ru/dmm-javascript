$('#tab-contents .tab[id != "tab1"]').hide();
// $()関数では、特定の属性を持つ要素や属性値を絞り込むことができる
// $('要素[属性]')特定の要素の属性を取得したい時
// $('要素[属性 = "値"]')で特定の要素の属性の値を取得したい時

$('#tab-menu a').on('click', function(event){
	$('#tab-contents .tab').hide();
	$('#tab-menu .active').removeClass("active");
	$(this).addClass("active");
	$($(this).attr("href")).show();
	// attr()はTHML要素の属性を取得したり設定できるメソッド
	event.preventDefault();
});