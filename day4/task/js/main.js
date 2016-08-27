var zombies = [];
var plants = []

$(function(){

	var mediator = new Mediator();
	var zombiez = [];

	mediator.start();

	$("#generate").click(mediator.generate);
	$("#explode").click(mediator.explode);
	$("#growOld").click(mediator.growOld);
	$("#slowUp").click(mediator.slowUp);
})