function ZombieMickael(id,road){
	Zombie.apply(this,arguments);
	
	this.health = 50;
	this.MAX_HEALTH = 50;
	this.SPEED = 3;
	this.MINSPEED = 1.2;
	this.currentSpeed = this.SPEED;

	this.zombieHtml.addClass("zombie-michael");
}

function ZombieStrong(id,road){
	Zombie.apply(this,arguments);
	
	this.health = 70;
	this.MAX_HEALTH = 70;
	this.SPEED = 2;
	this.MINSPEED = 1;
	this.currentSpeed = this.SPEED;

	this.zombieHtml.addClass("zombie-strong");
}

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

	this.move = function(){
		var pos = this.zombieField.position();
		var currentPosLeft = this.zombieField.position().left;
		var nextPosLeft = currentPosLeft - this.currentSpeed;
		var width = this.zombieField.width();
		if(currentPosLeft > 0) {
			//this.zombieField.animate({left: nextPosLeft + 'px',width: width},this.SPEED,'linear');
			this.zombieField.css({left: nextPosLeft,width: width});
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
	
	this.checkHealth = function(){
		var currentHealth = this.health >= 0 ? this.health : 0;

		var healthPersentile = currentHealth/this.MAX_HEALTH * 100;
		this.healthHtml.text(parseInt(healthPersentile));
		
		if(this.health <= 0)
			return "dead";
		else
			return "healthy";
	}

	this.receiveDamage = function(damage){
		this.health -= damage;
	}
	
	this.stop = function(){
		this.zombieField.stop();
	}
	this.remove = function(){
		this.zombieField.animate({opacity: '0'},'slow',this.zombieField.remove);
	}
}
