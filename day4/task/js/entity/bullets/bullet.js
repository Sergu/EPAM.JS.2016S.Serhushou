function Bullet(id,road,leftOffset){
	this.id = id;
	this.damage = 15;
	this.speed = 4.5;
	this.road = road;
	this.bulletHtml = $("<div></div>");
	this.road.append(this.bulletHtml);


	this.move = function(){

		// функция поиска поражаемого зомби
		var zombieHit = function(road,bulletRight){
			for (var i = 0; i < zombies.length; i++){
				if(zombies[i] != null){
					var zombie = zombies[i];
					var zombieRoadNumber = $(".field-line").index(zombie.road);
					var bulletRoadNumber = $(".field-line").index(road);
					if(zombieRoadNumber == bulletRoadNumber)
					{
						var zombiePosLeft = zombie.zombieField.position().left;
						var zombieWidth = zombie.zombieField.width();
						if((zombiePosLeft < bulletRight)&&(bulletRight < zombiePosLeft + zombieWidth)){
							return zombie;
						}
					}
				}
			}
			return 0;
		}

		var limit = $(".field-line").width() - this.bulletHtml.width();
		var width = this.bulletHtml.width();
		var curPos = this.bulletHtml.position().left;
		var nextPosition = curPos + this.speed;
		this.bulletHtml.css({left: nextPosition});
		var s = this.bulletHtml.position().left;
		// если патрон не вышел за границы дорожки, ищем поражаемого зомби
		if(nextPosition < limit){
			var bulletRight = this.bulletHtml.position().left + this.bulletHtml.width();
			var hitResult = zombieHit(this.road,bulletRight);
			// если зомби найден , наносим ему урон . Иначе продолжается полёт
			if(hitResult != 0){
				hitResult.receiveDamage(this.damage);
				this.remove();
			}
		}
		// если же вышел за границы, удаляем его.
		else{
			this.remove();
		}
	}

	this.remove = function(){
		bullets[this.id] = null;
		this.bulletHtml.remove();
	}
}