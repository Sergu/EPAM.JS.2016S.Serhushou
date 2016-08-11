var typeCount = [];		// массив хранения результатов суммы классов
typeCount[1] = 0;		// инициализация суммы каждого класса нулями
typeCount[2] = 0;
typeCount[3] = 0;

for (var i = 0; i < arr.length; i++) {		// проход по всем элементам массива элементов
	var currentObj = arr[i];
	var type = currentObj.type;
	typeCount[type] += currentObj["getCount" + type]();	// вызов метода объекта по имени используя конкатенацию "getCount" и типа объекта
};

for (var i = 1; i < typeCount.length; i++) {	// вывод суммы всех классов
	console.log("count{%d}={%d}",i,typeCount[i])
};
