function ZombieMickael(id,road){
	Zombie.apply(this,arguments);
	
	this.HEALTH = 1000;
	this.SPEED = 13000;

	this.zombieHtml.addClass("zombie michael");
}

function ZombieStrong(id,road){
	Zombie.apply(this,arguments);
	
	this.HEALTH = 1000;
	this.SPEED = 17000;

	this.zombieHtml.addClass("zombie strong");
}

function Zombie(id,road){
	this.id = id;
	this.road = road;

	this.zombieHtml = $("<div></div>");

	this.road.append(this.zombieHtml);

	this.move = function(){

		var position = this.zombieHtml.position().left;
		if(position != 0) {
			this.zombieHtml.animate({left: 0},this.SPEED,'linear');
			return "walking";
		}
		else{
			this.stop();
			return "finished";
		}
	};
	this.stop = function(){
		this.zombieHtml.stop();
	}
	this.remove = function(){
		this.zombieHtml.remove();
	}
}