//////////////////////////////////
var quantity = document.getElementById("quantity");
var ins_button = document.getElementById("insert");
var hist_button = document.getElementById('hist');
var container = document.getElementById("container");
var list = [];
///////////////quantity.value = function(number){
	///if (quantity.value < 0 or quantity.value > 100){
		///window.alert(" Su valor es menor a 0 o mayor a 100. Pruebe otra vez")

//	}
//}
/////////////////////////////////////////////////



quantity.onkeyup = function(e){
	if(e.which == 13) {
		list.push(parseInt(quantity.value))
	}

}

ins_button.onclick = function(){
	list.push(parseInt(quantity.value))
}

hist_button.onclick = function(){
	for (var i = 0; i >= 0; i++) {
		if (list[i] <= 0 and list[i] >=	10) {


		} 
	}
}







////////////////////////////////