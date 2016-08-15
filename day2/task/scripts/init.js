var arr = [];


for ( var i = 0; i < 5; i++) {
	var objType = random(1,3);  // опредение типа объекта
	var obj = {};
	
	obj.count = random(1,10);
	obj["getCount"+objType] = function() { return this.count}
	
	console.log("type={%d},count{%d}",objType,obj["getCount"+objType].call(obj))
	
	arr[i] = obj;
}
