function Weapon(id,road,leftOffset){
	this.id = id;
	this.road = road;
	this.shootingSpeed = 2000;
	this.health = 30;
	this.MAX_HEALTH = 30;

	this.plantField = $("<div></div>");
	this.plantField.addClass("plant-field");
	this.plantHtml = $("<div></div>");
	this.healthHtml = $("<div></div>");
	this.healthHtml.addClass("health");

	this.plantField.append(this.healthHtml);
	this.plantField.append(this.plantHtml);
	this.road.append(this.plantField);

	// функция стрельбы
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
		// создаём новый патрон
		var bullet = new BulletSimple(id,road,offset);
		bullets[bullets.length] = bullet;
	}

	this.remove = function(){
		clearInterval(this.shootingIntervalId);
		this.plantField.remove();
	}

	// функция проверки состояния здоровья растения
	this.checkHealth = function(){
		var currentHealth = this.health >= 0 ? this.health : 0;
		var healthPersentile = currentHealth / this.MAX_HEALTH * 100;
		this.healthHtml.text(parseInt(healthPersentile));

		if(this.health <= 0){
			return "dead";
		}
		else{
			return "healthy";
		}
	}
}