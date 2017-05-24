//////////////////////////////////
var quantity = document.getElementById("quantity");
var ing_button = document.getElementById("insert");
var hist_button = document.getElementById('hist');
var container = document.getElementById("container");
var list = [];

quantity.onkeyup = function(e){
	if(e.which == 13) {
		list.push(parseInt(quantity.value))
	}

}

ing_button.onclick = function(){
}








////////////////////////////////