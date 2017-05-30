//////////////////////////////////
var quantity = document.getElementById("quantity");
var ins_button = document.getElementById("insert");
var hist_button = document.getElementById('hist');
var container = document.getElementById("container");
var list_html = document.getElementById("list")
var list = [];


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
		if (list[i] >= 0 && <= 10 ) {
			// logica para crear los rectangulos
		}
		else if (list[i] >= 11 && <= 20 ) {
			// logica para crear los rectangulos
		}
		else if (list[i] >= 21 && <= 30 ) {
			// logica para crear los rectangulos
		}
		else if (list[i] >= 31 && <= 40 ) {
			// logica para crear los rectangulos
		}
		else if (list[i] >= 41 && <= 50 ) {
			// logica para crear los rectangulos
		}
		else if (list[i] >= 51 && <= 60 ) {
			// logica para crear los rectangulos
		}
		else if (list[i] >= 61 && <= 70 ) {
			// logica para crear los rectangulos
		}
		else if (list[i] >= 71 && <= 80 ) {
			// logica para crear los rectangulos
		}
		else if (list[i] >= 81 && <= 90 ) {
			// logica para crear los rectangulos
		}
		else if (list[i] >= 91 && <= 100 ) {
			// logica para crear los rectangulos
		}
	}

}






////////////////////////////////