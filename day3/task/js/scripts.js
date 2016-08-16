$(function(){
	var generateButton = $("#generate");
	generateButton.click(generate);
	releaseElement(generateButton);

	var resetButton = $("#reset");
	resetButton.click(reset);
	blockElement(resetButton);

	var colorButton = $("#color");
	colorButton.click(setColor);
	blockElement(colorButton);

});


function generate(){
	var container = $(".field-container")
	for (var i = 0; i < 50; i++) {
		var field = $("<div></div>").text(random(1,100));
		field.addClass("field");
		field.addClass("pointer-cursor");
		container.append(field);
	};
	blockElement($("#generate"));
	releaseElement($("#color"));
	releaseElement($("#reset"));
}

function setColor(){
	var fields = $(".field").each(function(){
		var numb = $(this).text();	
		if (numb > 75) {
			$(this).addClass("red-field");
		}
		else if (numb > 50) {
			$(this).addClass("orange-field");
		}
		else if(numb > 25) {
			$(this).addClass("green-field");
		}
	});
	blockElement($("#color"));
}

function reset(){
	var container = $(".field-container");
	container.empty();
	blockElement($("#reset"));
	releaseElement($("#generate"));
	blockElement($("#color"));
}

function blockElement(element){
	element.removeClass("released-div");
	element.addClass("blocked-div");
}

function releaseElement(element){
	element.removeClass("blocked-div");
	element.addClass("released-div");
}

function random(min, max) {
	return Math.floor((Math.random() * (max - min + 1)) + min);
}