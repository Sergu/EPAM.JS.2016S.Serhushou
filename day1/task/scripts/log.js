
function OutputArray(array){
	for (var i = 0; i <= array.length -1; i++) 
	{
		if(typeof array[i] == "undefined"){
			console.log("array[{"+ i +"}]={"+ "не определено" +"}")
		}
		else{
			if(array[i] == null){
				console.log("array[{"+ i +"}]={"+ "не указано" +"}")
			}
			else{
				console.log("array[{"+ i +"}]={"+ array[i] +"}")
			}
		}
	};
}