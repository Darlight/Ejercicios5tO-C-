function App(posicion){x	
	var h1titulo = document.createElement("h1");
	var titulo = document.createTextNode("Ejemplo Dibujo: ");
	h1titulo.appendChild(titulo);


	var cuadrado = document.createElement("div");
	cuadrado.className = "cuadrado";
	
	var circulo = document.createElement("div");
	circulo.className = "circulo";
	circulo.style.left = posicion.x+"px";
	circulo.style.top = posicion.y +"px";

	var app = document.createElement("div");
	app.className ="app"

	cuadrado.appendChild(circulo);

	app.appendChild(h1titulo);
	app.appendChild(cuadrado);
	return app;
}

function render(lugar,interfaz,prueba){
	lugar.appendChild(interfaz(prueba));

}
var rot = document.getElementById("root");
render(rot,App,{x: 100, y: 150});