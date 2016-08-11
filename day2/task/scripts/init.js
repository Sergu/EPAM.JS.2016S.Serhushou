var arr = [];

for ( var i = 0; i < 5; i++) {
	var objType = random(1,3);  												// опредение типа объекта
	var obj;
	switch (objType) {															
		case 1:
			obj = {																// создание обекта определённого типа
				count: random(1,10),
				type: 1,														// свойство типа объекта, нужно для того , чтобы понять
																				// какой метод нужно вызывать на объекте
				getCount1: function(){
					return this.count;
				}
			}
			console.log("type={%d},count{%d}",obj.type,obj.getCount1())			// вывод добавляемого элемента
			break;
		case 2:
			obj = {
				count: random(1,10),
				type: 2,
				getCount2: function(){
					return this.count;
				}
			}
			console.log("type={%d},count{%d}",obj.type,obj.getCount2())
			break;
		case 3:
			obj = {
				count: random(1,10),
				type: 3,
				getCount3: function(){
					return this.count;
				}
			}
			console.log("type={%d},count{%d}",obj.type,obj.getCount3())
			break;
	}
	arr[i] = obj;
}