
for (var i = 0; i <= data.length -1; i++) {

	if(!isNaN(data[i]) && (data[i] != null)){
		if((data[i] < 100) && (data[i] != 0)){
				data[i] = Number(data[i]) + 100;
		}
		else if(data[i] == 0)
		{
			data[i] = Number(data[i]) + 10;
		}
		else if(data[i] > 100){
			data[i] = data[i] - 100;
		}
	}
};

OutputArray();