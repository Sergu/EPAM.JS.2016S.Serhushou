function Product(id,left,top){

	this.id = id;
	this.productHtml = $("<div></div>");
	this.productHtml.addClass("product");
	this.productHtml.addClass("cursor");
	this.productHtml.css({"left": left,"top": top});
	var gameField = $(".game-field");
	this.timerId = -1;
	var startTime;
	this.APPEAR_TIME = 700;
	// время, оставшееся для отображения элемента
	this.remaining = this.APPEAR_TIME;
	// флаг используется при первом вызове метода resume, для создания анимации
	this.animateFlag = false;

	gameField.append(this.productHtml);

	// функция остановки таймера отображения
	this.pause = function(){
		clearTimeout(this.timerId);
		// вычисляем оставшееся время отображения элемента
		this.remaining -= new Date() - startTime;
		this.productHtml.unbind("click");
	}
	// функция восстановления таймера отображения
	this.resume = function(){
		if(!this.animateFlag){
			this.productHtml.animate({opacity: "1"},this.APPEAR_TIME/1.5);
		}
		startTime = new Date();
		clearTimeout(this.timerId);
		this.timerId = setTimeout(this.remove.bind(this),this.APPEAR_TIME);
		this.productHtml.click(this.givePoint);
	}
	// функция удаления элемента
	this.remove = function(){
		clearTimeout(this.timerId);
		this.productHtml.unbind("click");
		this.productHtml.remove();
		products[this.id] = null;
	}
}