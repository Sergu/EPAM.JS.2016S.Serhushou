function ZombieMickael(id,road){
	Zombie.apply(this,arguments);
	
	this.SPEED = 13000;

	this.zombieHtml.addClass("zombie-michael");
}

function ZombieStrong(id,road){
	Zombie.apply(this,arguments);
	
	this.HEALTH = 100;
	this.MAX_HEALTH = 100;
	this.SPEED = 15000;

	this.zombieHtml.addClass("zombie-strong");
}

function Zombie(id,road){
	
	this.id = id;
	this.road = road;
	
	this.HEALTH = 70;
	this.MAX_HEALTH = 70;

	this.zombieField = $("<div></div>");
	this.zombieField.addClass("zombie-field");
	
	this.zombieHtml = $("<div></div>");
	
	this.healthHtml = $("<div></div>");
	this.healthHtml.addClass("health");
	
	this.zombieField.append(this.healthHtml);
	this.zombieField.append(this.zombieHtml);
	this.road.append(this.zombieField);

	this.move = function(){

		var position = this.zombieField.position().left;
		var width = this.zombieField.width();
		if(position != 0) {
			this.zombieField.animate({left:0,width: this.zombieHtml.width() + 'px'},this.SPEED,'linear');
			var isHealthy = this.checkHealth();
			if(isHealthy == "dead"){
				this.stop();
				this.remove();
			}
			return "walking";
		}
		else{
			this.stop();
			this.remove();
			return "finished";
		}
	};
	
	this.checkHealth = function(){
		var healthPersentile = this.HEALTH/this.MAX_HEALTH * 100;
		this.healthHtml.text(this.HEALTH);
		
		if(this.health == 0)
			return "dead";
		else
			return "healthy";
	}
	
	this.stop = function(){
		this.zombieField.stop();
	}
	this.remove = function(){
		this.zombieField.remove();
	}
}
