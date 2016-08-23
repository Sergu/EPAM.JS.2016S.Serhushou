$(function(){

	var mediator = new Mediator();

	mediator.start();

	$("#generate").click(mediator.generate.bind(mediator));
})