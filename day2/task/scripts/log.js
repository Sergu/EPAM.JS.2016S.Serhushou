var typeCount = [];		// массив хранения результатов суммы классов
typeCount[1] = 0;		// инициализация суммы каждого класса нулями
typeCount[2] = 0;
typeCount[3] = 0;


for (var i = 0; i < arr.length; i++) { // цикл по элементам масисва объектов
	for(var j = 1 ; j <= 3; j++){	// цикл по типам (3)
		var currentObject = arr[i];	
		
		if (typeof(currentObject["getCount"+j]) != "undefined"){ // определяем, содержит ли объект данный метод
			var count = currentObject["getCount" + j].call(currentObject); // получаем count объекта, с помощью существующего метода
			typeCount[j] = typeCount[j] + count;	// добавляем count в массив результатов
		}
	}
}

for (var i = 1; i < typeCount.length; i++) {	// вывод суммы всех классов
	console.log("count{%d}={%d}",i,typeCount[i])
};
