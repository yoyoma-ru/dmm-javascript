$(".theTarget").skippr({
	transition : 'slide',
	speed : 1000,
	easing : 'easeOutQuart',
	// 初速が速い
	navType : 'block',
	// 下に表示される枚数と場所を表す表示
	childrenElemntType : 'div',
	arrows : true,
	autoPlay : true,
	autoPlayDuration : 3000,
	keyboardOnAlways : true,
	// キーボードの矢印キーで操作可能
	hedePrevious : true,
});