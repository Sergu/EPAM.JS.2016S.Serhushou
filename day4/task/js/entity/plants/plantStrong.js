function PlantStrong(id,road,leftOffset){
	Weapon.apply(this,arguments);

	this.health = 100;
	this.MAX_HEALTH = 100;
	this.plantHtml.addClass("plant-strong");
	var width = this.plantHtml.width();
	this.plantField.css("left",leftOffset - width/2);


	// переопределяется функция стрельбы, сильное растения стреляет сильными патронами
	this.shoot = function(){
		var offset = this.plantField.position().left + this.plantField.width();
		var road = this.road;
		var id;
		if((bullets.length == 0) || (bullets[bullets.length - 1] == null)){
			var id = 0;
		}
		else{
			var id = bullets[bullets.length - 1].id + 1;
		}
		var bullet = new BulletStrong(id,road,offset);
		bullets[bullets.length] = bullet;
	}

	// устанавливаем интервал стрельбы
	this.shootingIntervalId = setInterval(this.shoot.bind(this),this.shootingSpeed);
}