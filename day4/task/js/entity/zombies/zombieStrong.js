function ZombieStrong(id,road){
	Zombie.apply(this,arguments);
	
	this.health = 70;
	this.MAX_HEALTH = 70;
	this.SPEED = 2.5;
	this.MINSPEED = 1;
	this.currentSpeed = this.SPEED;

	this.zombieHtml.addClass("zombie-strong");
}