function Mediator(){

	var zombieMoveIntervalId = -1;
	var zombieGrowOldIntervalId = -1;
	var zombieSlowUpIntervalId = -1;
	var plantsCheckHealthIntervalId = -1;
	var bulletsIntervalId = -1;

	this.start = function(){

		// таймер проверки состояния зомби
		zombieMoveIntervalId = setInterval(zombiesMove.bind(this),50);
		// таймер проверки состояния здоровья растения
		plantsCheckHealthIntervalId = setInterval(plantsCheck,40);
		// таймер проверки полёта пуль
		bulletsIntervalId = setInterval(bulletsCheck,40);
	}

	// генерирует нового зомби
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
		// новый зомби записывается в глобальный массив зомби.
		zombies[id] = zombie;
	};

	// функция создания простого растения
	this.plantSimpleCreate = function(road,leftOffset){
		var plantId = plants.length;
		var plant = new PlantSimple(plantId,road,leftOffset);

		plants[plantId] = plant;
	}	

	// функция создания сильного растения
	this.plantStrongCreate = function(road,leftOffset){
		var plantId = plants.length;
		var plant = new PlantStrong(plantId,road,leftOffset);

		plants[plantId] = plant;
	}

	// функия завершения удаляет все растения, пули, зомби. 
	this.finish = function(){
		for(var i = 0; i < zombies.length; i++){
			if(zombies[i] != null){
				var zombie = zombies[i];
				zombie.stop();	
				zombie.remove();
				zombies[i] = null;
			}
		}
		for(var i = 0; i < bullets.length; i++){
			if(bullets[i] != null){
				var bullet = bullets[i];
				bullet.remove();
			}
		}
		for(var i = 0; i < plants.length; i++){
			var plant = plants[i];
			plant.remove();
			plants[i] = null;
		}

		// освобождаются все таймеры
		clearInterval(zombieMoveIntervalId);
		clearInterval(zombieGrowOldIntervalId);
		clearInterval(zombieSlowUpIntervalId);
		clearInterval(plantsCheckHealthIntervalId);
		clearInterval(bulletsIntervalId);

		// отображается блок с надписью конца игры
		$(".game-over").css("display","block");
	};

	// функция замедления всех зомби
	this.slowUp = function(){
		clearInterval(zombieSlowUpIntervalId);

		// замедляет всех зомби
		var slowZombies = function(){
			for(var i = 0; i < zombies.length; i++){
				if(zombies[i] != null){
					var zombie = zombies[i];
					zombie.currentSpeed = zombie.MINSPEED;
				}
			}
		}

		// востанавливает обычную скорость зомби
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

	// снимает по 1 ед здоровья у всех зомби
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

	// снимает 30ед здоровья у всех зомби 
	this.explode = function(damage){
		for (var i = 0; i < zombies.length; i++) {
			if(zombies[i] != null){
				var zombie = zombies[i];
				zombie.receiveDamage(30);
			}
		};
	}

	// функция проверки состояния зомби
	var zombiesMove = function(){
		for (var i = 0; i < zombies.length; i++) {
			if(zombies[i] != null){
				var zombie = zombies[i];
				var movingResult = zombie.move();
				switch(movingResult){
					case "walking":
						break;
					case "finished":
						this.finish();
						break;
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

	// функция проверки состояния растения
	var plantsCheck = function(){
		for (var i = 0; i < plants.length; i++){
			if(plants[i] != null){
				var plant = plants[i];
				var checkHealthResult = plant.checkHealth();
				switch(checkHealthResult){
					case "healthy":
						break;
					case "dead":
						plant.remove();
						plants[i] = null;
						break;
					default:
						break;
				}
			}
		}
	}

	// функция дефрагментации массива(удаляем null - элементы)
	var rebuildBulletsArray = function(){
		var counter = 0;
		var newArray = []
		for(var i = 0; i < bullets.length; i++){
			if(bullets[i] != null){
				newArray[counter++] = bullets[i];
			}
		}
		for (var j = 0; j < newArray.length; j++){
			var r = bullets[newArray[j]];
			bullets[newArray[j].id].id = j;
		}
		bullets = newArray;
	}

	// функция передвижения патронов
	var bulletsCheck = function(){
		for (var i = 0; i < bullets.length; i++){
			if(bullets[i] != null){
				var bullet = bullets[i];
				bullet.move();
			}
		}
		// если массив патронов содержит более 30 элементов - дефрагментируем его(удаляем null - элементы)
		if(bullets.length > 30){

			rebuildBulletsArray();
		}
	}
}

function random(min, max){
	return Math.floor((Math.random() * (max - min + 1)) + min);
}
