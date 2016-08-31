// класс-движок
function Mediator(){

	// таймер появления новых продуктов
	var appearProductTimerId = -1;
	// таймер появления бомбы
	var appearBombTimerId = -1;
	// таймер обновления результов собраных продуктов
	var scoresUpdateTimerId = -1;
	// jquery объекты количества собранных продуктов
	var cheeseScore = $(".cheese").find(".score");
	var cherryScore = $(".cherry").find(".score");
	var pumpkinScore = $(".pumpkin").find(".score");
	var orangeScore = $(".orange").find(".score");
	var self = this;
	var APPEAR_PRODUCTS_TIME = 500;
	var APPEAR_BOMB_TIMER = 5000;

	// функция генерации продукта
	this.generateProduct = function(){
		var productType = random(1,4);
		var gameField = $(".game-field");
		var left = random(0,gameField.width() - 50);
		var top = random(0,gameField.height() - 50);
		var id = products.length;
		var product;
		switch(productType){
			case 1:
				product = new Cheese(id,left,top);
				break;
			case 2:
				product = new Cherry(id,left,top);
				break;
			case 3:
				product = new Pumpkin(id,left,top);
				break;
			case 4:
				product = new Orange(id,left,top);
				break;
			default:
				break;
		}
		products[id] = product;
	}

	// функция генерации бомбы
	this.generateBomb = function(){
		var gameField = $(".game-field");
		var left = random(0,gameField.width() - 50);
		var top = random(0,gameField.height() - 50);
		var id = products.length;
		var product = new Bomb(id,left,top);
		products[id] = product;
	}

	// функция продолжения игры
	this.resume = function(){
		// при первом нажатии кнопки старт, инициализируем глобальный объект продуктов массивом.
		// при последующих нажатиях кнопки старт будут возобновлены счётчики всех продуктов после паузы.
		if(products == null){
			products = [];
		}
		else{
			for( var i = 0; i < products.length; i++){
				if(products[i] != null){
					var product = products[i];
					product.resume();
				}
			}
		}
		// меняется кнопка
		var button = $(".button.start")
		button.removeClass("start");
		button.addClass("stop");
		button.text("Stop");
		button.unbind('click');
		button.click(self.pause);
		appearProductTimerId = setInterval(self.generateProduct,APPEAR_PRODUCTS_TIME);
		appearBombTimerId = setInterval(self.generateBomb,APPEAR_BOMB_TIMER);
	}

	// функция приостановки игры
	this.pause = function(){
		clearTimeout(appearProductTimerId);
		clearTimeout(appearBombTimerId);
		// приостанавливается каждый продукт
		for( var i = 0; i < products.length; i++){
			if(products[i] != null){
				var product = products[i];
				product.pause();
			}
		}
		// меняется кнопка
		var button = $(".button.stop")
		button.removeClass("stop");
		button.addClass("start");
		button.text("Start");
		button.unbind('click');
		button.click(self.resume);
	}

	// функция обновления результатов собраных продуктов
	var scoresUpdate = function(){
		cheeseScore.text(cheeseCounter == 0 ? '-' : cheeseCounter);
		cherryScore.text(cherryCounter == 0 ? '-' : cherryCounter);
		pumpkinScore.text(pumpkinCounter == 0 ? '-' : pumpkinCounter);
		orangeScore.text(orangeCounter == 0 ? '-' : orangeCounter);
	}

	scoresUpdateTimerId = setInterval(scoresUpdate,80);
}

function random(min, max){
	return Math.floor((Math.random() * (max - min + 1)) + min);
}
