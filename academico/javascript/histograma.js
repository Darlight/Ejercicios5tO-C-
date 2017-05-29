//////////////////////////////////
var quantity = document.getElementById("quantity");
var ins_button = document.getElementById("insert");
var hist_button = document.getElementById('hist');
var container = document.getElementById("container");
var list_html = document.getElementById("list")
var list = [];


function isItValid(value){
	return value > 0 || value < 100
}

function addNumberOnList(value){
	if (isItValid(value)){
		 list.push(parseInt(value))
	}
	else{
		 windows.alert("Error 504. \n Ingrese un numero mayor que 0 o menor que 100 ")
	}
	
}


quantity.onkeyup = function(e){
	if(e.which == 13) {
		addNumberOnList(quantity.value);
		list_html.innerHTML = list.join("/");
	}

}

ins_button.onclick = function(){
	addNumberOnList(quantity.value);
	list_html.innerHTML = list.join("/");
}

// hist_button.onclick = function(){
// 	for (var i = 0; i >= 0; i++) {
// 		if (list[i] <= 0 and list[i] >=	10) {


// 		} 
// 	}
// }







////////////////////////////////