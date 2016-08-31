// глобальные переменные

// массив созданных продуктов
var products;
// счётчики собранных продуктов
var cheeseCounter = 0;
var cherryCounter = 0;
var pumpkinCounter = 0;
var orangeCounter = 0;

$(function(){
	//создаём движок
	var mediator = new Mediator();
	$(".button.start").click(mediator.resume);
});