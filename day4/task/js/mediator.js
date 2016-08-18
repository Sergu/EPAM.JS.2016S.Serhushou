function Mediator(){
	var zombies = [];

	this.generate = function(){
		var roadNumber = random(1,4);
		var zombieType = random(1,2);
		var id = zombies.length;
		var zombie;
		switch (zombieType) {
			case 1:
				zombie = new ZombieMickael(id,roadNumber,this); 
				// id - идентификатор зомби, roadNumber - номер дорожки, 
				// this - ссылка на медиатор, используется в зомби для вызова функции завершения.
				break;
			case 2:
				zombie = new ZombieStrong(id,roadNumber,this);
			default:
				break;
		}
		zombie.move();
		zombies[id] = zombie;
	};


	// функия завершения, останавливает всех зомби и удаляет их
	this.finish = function(){
		for(var i = 0; i < zombies.length; i++){
			var zombie = zombies[i];
			zombie.stop();	
			zombie.remove();
		}
		$(".game-over").css("display","block");
	};
}

function random(min, max){
	return Math.floor((Math.random() * (max - min + 1)) + min);
}