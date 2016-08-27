function Mediator(){

	var zombieMoveIntervalId = -1;
	var zombieGrowOldIntervalId = -1;
	var zombieSlowUpIntervalId = -1;

	this.start = function(){

		zombieMoveIntervalId = setInterval(zombiesMove.bind(this),30);

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


	this.slowUp = function(){
		clearInterval(zombieSlowUpIntervalId);

		var slowZombies = function(){
			for(var i = 0; i < zombies.length; i++){
				if(zombies[i] != null){
					var zombie = zombies[i];
					zombie.currentSpeed = zombie.MINSPEED;
				}
			}
		}
		var reestablishZombies = function(){
			for(var i = 0; i < zombies.length; i++){
				if(zombies[i] != null){
					var zombie = zombies[i];
					zombie.currentSpeed = zombie.SPEED;
				}
			}
		}

		slowZombies();
		zombieSlowUpIntervalId = setInterval(reestablishZombies,10000);
	}

	this.growOld = function(){
		clearInterval(zombieGrowOldIntervalId);
		var count = 10;
		var old = function(){
			if(count > 0)
			{
				for(var i = 0; i < zombies.length; i++){
					if(zombies[i] != null){
						var zombie = zombies[i];
						zombie.receiveDamage(1);
					}
				}
				count--;
			}
			else{
				clearInterval(zombieGrowOldIntervalId);
			}
		}

		zombieGrowOldIntervalId = setInterval(old,1000);
	}
	this.explode = function(damage){
		for (var i = 0; i < zombies.length; i++) {
			if(zombies[i] != null){
				var zombie = zombies[i];
				zombie.receiveDamage(30);
			}
		};
	}

	var zombiesMove = function(){
		for (var i = 0; i < zombies.length; i++) {
			if(zombies[i] != null){
				var zombie = zombies[i];
				var movingResult = zombie.move();
				switch(movingResult){
					case "walking":
						break;
					case "finished":
					case "dead":
						zombie.stop();
						zombie.remove();
						zombies[i] = null;
						break;
					default:
						break;
				}
			}
		};
	}
}

function random(min, max){
	return Math.floor((Math.random() * (max - min + 1)) + min);
}
