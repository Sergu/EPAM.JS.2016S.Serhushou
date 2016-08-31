function Pumpkin(id,left,top){
	Product.apply(this,arguments);

	this.APPEAR_TIME = 700;
	this.remaining = this.APPEAR_TIME;
	this.productHtml.addClass("pumpkin-img");
	this.givePoint = function(){
		pumpkinCounter++;
		this.remove();
	}
	this.resume();
}