function Cherry(id,left,top){
	Product.apply(this,arguments);

	this.APPEAR_TIME = 700;
	this.remaining = this.APPEAR_TIME;
	this.productHtml.addClass("cherry-img");
	this.givePoint = function(){
		cherryCounter++;
		this.remove();
	}
	this.resume();
}