function ZombieMickael(id,road,mediator){
	Zombie.apply(this,arguments);
	
	this.HEALTH = 1000;
	this.SPEED = 13000;

	this.zombieHtml.addClass("zombie michael");
}

function ZombieStrong(id,road,mediator){
	Zombie.apply(this,arguments);
	
	this.HEALTH = 1000;
	this.SPEED = 17000;

	this.zombieHtml.addClass("zombie strong");
}

function Zombie(id,road,mediator){
	this.id = id;
	this.mediator = mediator;


	this.zombieHtml = $("<div></div>");
	this.zombieHtml.attr('id',this.id);
	$("#road"+road).append(this.zombieHtml);

	this.move = function(){
		var block = $("#" + this.id);
		block.animate({left: 0},this.SPEED,'linear', this.mediator.finish);
	};
	this.stop = function(){
		var block = $("#" + this.id);
		block.stop();
	}
	this.remove = function(){
		$("#" + this.id).remove();
	}
}