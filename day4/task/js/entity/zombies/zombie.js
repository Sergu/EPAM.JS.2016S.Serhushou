function Zombie(id,road){
	
	this.id = id;
	this.road = road;
	this.health = 70;
	this.MAX_HEALTH = 70;
	this.SPEED = 1;
	this.MINSPEED = 0.5;
	this.currentSpeed = this.SPEED;

	this.zombieField = $("<div></div>");
	this.zombieField.addClass("zombie-field");
	
	this.zombieHtml = $("<div></div>");
	
	this.healthHtml = $("<div></div>");
	this.healthHtml.addClass("health");
	
	this.zombieField.append(this.healthHtml);
	this.zombieField.append(this.zombieHtml);
	this.road.append(this.zombieField);

	// функция перемещения зомби и проверки его состояния
	this.move = function(){
		var pos = this.zombieField.position();
		var currentPosLeft = this.zombieField.position().left;
		var nextPosLeft = currentPosLeft - this.currentSpeed;
		var width = this.zombieField.width();
		// проверка позициии зомби, если вышел за границу - удаляем
		if(currentPosLeft > 0) {
			this.zombieField.css({left: nextPosLeft,width: width});
			// проверка состояния зомби
			var isHealthy = this.checkHealth();
			if(isHealthy == "dead"){
				return "dead";
			}
			return "walking";
		}
		else{
			return "finished";
		}
	};
	
	// функция проверки состояния зомби
	this.checkHealth = function(){
		var currentHealth = this.health >= 0 ? this.health : 0;

		var healthPersentile = currentHealth/this.MAX_HEALTH * 100;
		this.healthHtml.text(parseInt(healthPersentile));
		
		if(this.health <= 0)
			return "dead";
		else
			return "healthy";
	}

	// функция получения урона
	this.receiveDamage = function(damage){
		this.health -= damage;
	}
	
	// функция остановки зомби
	this.stop = function(){
		this.zombieField.stop();
	}

	// функция удаления зомби
	this.remove = function(){
		this.zombieField.remove()
	}
}