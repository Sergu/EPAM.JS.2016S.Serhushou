function Mediator(){
	var zombies = [];
	var intervalId;
	var self = this;

	this.start = function(){

		intervalId = setInterval(zombiesMove,100);

	}

	this.generate = function(){
		var roadNumber = random(0,3);

		var road = $(".field-line:eq("+roadNumber+")");

		var zombieType = random(1,2);
		var id = zombies.length;
		var zombie;
		switch (zombieType) {
			case 1:
				zombie = new ZombieMickael(id,road); 
				// id - идентификатор зомби, roadNumber - номер дорожки, 
				// this - ссылка на медиатор, используется в зомби для вызова функции завершения.
				break;
			case 2:
				zombie = new ZombieStrong(id,road);
			default:
				break;
		}
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

	var zombiesMove = function(){
		for (var i = 0; i < zombies.length; i++) {
			var zombie = zombies[i];
			var movingResult = zombie.move();
			switch(movingResult){
				case "walking":
					break;
				case "finished":
					clearInterval(intervalId);
					self.finish();
					break;
				default:
					break;
			}
		};
	}
}

function random(min, max){
	return Math.floor((Math.random() * (max - min + 1)) + min);
}