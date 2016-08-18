$(function(){

	var mediator = new Mediator();

	$("#generate").click(mediator.generate.bind(mediator));
})