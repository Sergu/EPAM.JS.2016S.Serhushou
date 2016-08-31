function Orange(id,left,top){
	Product.apply(this,arguments);

	this.APPEAR_TIME = 700;
	this.remaining = this.APPEAR_TIME;
	this.productHtml.addClass("orange-img");
	this.givePoint = function(){
		orangeCounter++;
		this.remove();
	}
	this.resume();
}