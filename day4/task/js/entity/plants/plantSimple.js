function PlantSimple(id,road,leftOffset){
	Weapon.apply(this,arguments);


	this.health = 50;
	this.MAX_HEALTH = 50;
	this.plantHtml.addClass("plant-simple");
	var width = this.plantHtml.width();
	this.plantField.css("left",leftOffset - width/2);

	this.shootingIntervalId = setInterval(this.shoot.bind(this),this.shootingSpeed);
}