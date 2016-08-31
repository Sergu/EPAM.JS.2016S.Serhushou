function Bomb(id,left,top){
	Product.apply(this,arguments);

	this.APPEAR_TIME = 2000;
	this.remaining = this.APPEAR_TIME;
	this.productHtml.addClass("bomb-img");
	this.productHtml.removeClass("cursor");
	
	// функция взрыва бомбы
	function explode(){
		var productType = random(1,4);
		switch(productType){
			case 1: 
				cheeseCounter =  cheeseCounter > 10 ? cheeseCounter - 10 : 0;
				break;
			case 2: 
				cherryCounter =  cherryCounter > 10 ? cherryCounter - 10 : 0;
				break;
			case 3: 
				pumpkinCounter =  pumpkinCounter > 10 ? pumpkinCounter - 10 : 0;
				break;
			case 4: 
				orangeCounter =  orangeCounter > 10 ? orangeCounter - 10 : 0;
				break;
			default:
				break;
		}
		this.remove()
	}
	// переопределённая функция зачисления очков при нажатии на бомбу(в данном случае не начисляются очки)
	this.givePoint = function(){
		this.remove();
	}
	// переопределённая функция восстановления таймера отображения
	this.resume = function(){
		if(!this.animateFlag){
			this.productHtml.animate({opacity: "1"},this.APPEAR_TIME/1.5);
		}
		startTime = new Date();
		clearTimeout(this.timerId);
		this.timerId = setTimeout(explode.bind(this),this.APPEAR_TIME);
		this.productHtml.click(this.givePoint.bind(this));
	}
	this.resume();
}