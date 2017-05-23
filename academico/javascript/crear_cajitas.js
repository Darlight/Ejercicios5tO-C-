//////////////////////////////////////////////////////
var buttoncreate = document.getElementById("create");
var color = document.getElementById("color");
var contenedor = document.getElementById("contenedor");
buttoncreate.onclick = function	(){
	var quantity = parseInt(document.getElementById("quantity").value)
	var res = contenedor.innerHTML;
	for (var i = quantity; i > 0; i--) {
		res += "<div class ='square' style='background:" + color.value + "'> </div>";
	}
	contenedor.innerHTML = res

}


//////////////////////////////////////////////////////





