function Cheese(id,left,top){
	Product.apply(this,arguments);

	this.APPEAR_TIME = 700;
	this.remaining = this.APPEAR_TIME;
	this.productHtml.addClass("cheese-img");
	// функция начисления очков
	this.givePoint = function(){
		cheeseCounter++;
		this.remove();
	}
	this.resume();
}