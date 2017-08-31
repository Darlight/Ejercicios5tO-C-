function Semaforo(state){
	var title = document.createElement('h1');
	var text = document.createTextNode('Semaforo');
	title.appendChild(text);

	var semaforo = document.createElement('div');
	var rojo = document.createElement('div');
	var amarillo = document.createElement('div');
	var verde = document.createElement('div');

	semaforo.className = "semaforo";
	rojo.className = "red";
	amarillo.className = "yellow";
	verde.className = "green";

	semaforo.appendChild(rojo);
	semaforo.appendChild(amarillo);
	semaforo.appendChild(verde);

	var product = document.createElement('div');
	product.appendChild(semaforo);
	product.appendChild(title);
	if (state == 0) {
		rojo.className = "red turned-on";
	}
	if (state == 1) {
		verde.className = "green turned-on";
	}
	if (state == 2) {
		amarillo.className = "yellow turned-on";
	}

	


return product;
}
var rot = document.getElementById('root');
var button = document.getElementById('button');
function render(place,product,state){
	place.innerHTML = "";
	place.appendChild(product(state));
}

statement = 0;
render(rot,Semaforo,statement);

button.onclick= function(){
	statement++;
	if (statement > 2){
		statement = 0;
	}
	render(rot,Semaforo,statement);
}
