//////////////////////////////////https://www.youtube.com/watch?v=QRN91T8rqW4
google.load('visualization','1.0',{'packages':['corechart']});
var quantity = document.getElementById("quantity");
var ins_button = document.getElementById("insert");
var hist_button = document.getElementById('hist');
var container = document.getElementById("container");
var list_html = document.getElementById("list")
var list = [];
var contador = [0,0,0,0,0,0,0,0,0,0];


function isItValid(value){
	return value >= 0 && value <= 100
}

function addNumberOnList(value){
	if (isItValid(value)){
		 list.push(parseInt(value))
	}
	else{
		 alert("Error 504. \n Ingrese un numero mayor que 0 o menor que 100 ")
	}
	
}


quantity.onkeyup = function(e){
	if(e.which == 13) {
		addNumberOnList(quantity.value);
		list_html.innerHTML = list.join("/");
		quantity.value = "";
	}

}

ins_button.onclick = function(){
	addNumberOnList(quantity.value);
	list_html.innerHTML = list.join("/");
	quantity.value = "";
}

hist_button.onclick = function(){
	for (var i = 0 ; i < list.length; i++) {
		if (list[i] >= 0 && list[i] <= 10 ) {
			contador[0] += 1;
		}
		else if (list[i] >= 11 && list[i]<= 20 ) {
			contador[1] += 1;
		}
		else if (list[i] >= 21 && list[i] <= 30 ) {
			contador[2] += 1;
		}
		else if (list[i] >= 31 && list[i] <= 40 ) {
			contador[3] += 1;
		}
		else if (list[i] >= 41 && list[i] <= 50 ) {
			contador[4] += 1;
		}
		else if (list[i] >= 51 && list[i]<= 60 ) {
			contador[5] += 1;
		}
		else if (list[i] >= 61 && list[i] <= 70 ) {
			contador[6] += 1;
		}
		else if (list[i] >= 71 &&  list[i]<= 80 ) {
			contador[7] += 1;
		}
		else if (list[i] >= 81 && list[i] <= 90 ) {
			contador[8] += 1;
		}
		else if (list[i] >= 91 && list[i] <= 100 ) {
			contador[9] += 1;
		}
	}
	google.setOnLoadCallback(dibujar);
	function dibujar(){
		var data = new google.visualization.DataTable();
		data.addColumn('string','rango');
		data.addColumn('number','cantidad');
		data.addRows(
				[

				['1-10',contador[0]],
				['11-20',contador[1]],
				['21-30',contador[2]],
				['31-40',contador[3]],
				['41-50',contador[4]],
				['51-60',contador[5]],
				['61-70',contador[6]],
				['71-80',contador[7]],
				['81-90',contador[8]],
				['91-100',contador[9]]

				]
				);
		var titulo = {'title': 'Histograma', 'width':500, 'height':300};
		var grafica = new google.visualization.BarChart(container);
		grafica.draw(data,titulo);

	}

	dibujar();
	
}







////////////////////////////////