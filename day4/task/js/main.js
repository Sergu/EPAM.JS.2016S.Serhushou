
// глобальные объекты: зомби растения и пули.
var zombies = [];
var plants = [];
var bullets = [];

$(function(){

	//содаётся объект медиатора
	var mediator = new Mediator();

	//инициализируем таймеры
	mediator.start();

	$("#generate").click(mediator.generate);
	$("#explode").click(mediator.explode);
	$("#growOld").click(mediator.growOld);
	$("#slowUp").click(mediator.slowUp);
	$("#plantSimple").click( function(){
			$('#field').click(function(event){
				var offsetLeft = event.offsetX;
				var road = $(event.target);
				// при клике на поле игры, создаётся растение(простое)
				// в конструктор передаётся объект дорожки, и позиция клика(для того чтобы расположить там растение) 
				mediator.plantSimpleCreate(road,offsetLeft);
				// после создания растения отписываем поле от события
				$('#field').unbind('click');
			})
		}
	);
	$("#plantStrong").click( function(){
			$('#field').click(function(event){
				var offsetLeft = event.offsetX;
				var road = $(event.target);
				// при клике на поле игры, создаётся растение(простое)
				// в конструктор передаётся объект дорожки, и позиция клика(для того чтобы расположить там растение) 
				mediator.plantStrongCreate(road,offsetLeft);
				// после создания растения отписываем поле от события
				$('#field').unbind('click');
			})
		}
	);
})