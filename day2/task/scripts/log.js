var typeCount = [];		// массив хранения результатов суммы классов
typeCount[1] = 0;		// инициализация суммы каждого класса нулями
typeCount[2] = 0;
typeCount[3] = 0;

for (var i = 0; i < arr.length; i++) {		// проход по всем элементам массива элементов
	switch(arr[i].type){							
		case 1:
			var a = arr[i].getCount1();
			typeCount[1] = typeCount[1] + arr[i].getCount1();// в зависимости от значения свойства type, определяется
															// нужный метод, который надо вызвать для получения значения
			break;
		case 2:
			var a = arr[i].getCount2();
			typeCount[2] = typeCount[2] + arr[i].getCount2();
			break;
		case 3:
			var a = arr[i].getCount3();
			typeCount[3] = typeCount[3] + arr[i].getCount3();
			break;
	}
};

for (var i = 1; i < typeCount.length; i++) {	// вывод суммы всех классов
	console.log("count{%d}={%d}",i,typeCount[i])
};
