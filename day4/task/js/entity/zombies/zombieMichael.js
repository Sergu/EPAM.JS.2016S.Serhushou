function ZombieMickael(id,road){
	Zombie.apply(this,arguments);
	
	this.health = 50;
	this.MAX_HEALTH = 50;
	this.SPEED = 3.3;
	this.MINSPEED = 1.2;
	this.currentSpeed = this.SPEED;

	this.zombieHtml.addClass("zombie-michael");
}