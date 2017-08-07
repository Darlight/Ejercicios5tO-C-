var rectangulo = function sacarAreaRectangular(lado, altura) {
	return (lado * altura);
}
var triangulo = function sacarAreaTriangular(lado, altura) {
	return ((lado*altura)/ 2);
}
var circulo = function sacarAreaCircular(radio) {
	return (Math.PI * (radio*radio));
}

var opcion = 0;
var metodo = function sacarArea(proceso, dato1 , dato2){
	return proceso(dato1, dato2)

}
var base = 3
var altura = 4
var radio = 5

while (opcion <= 3){
	console.log("\
	Bienvenido a AveriguaAreas!\
	Escriba que figura desea sacar \
	1- Sacar Area Rectangular\
	2- Sacar Area Triangular\
	3- Sacar Area Circular\
	4- Salirse del Programa");
	var opcion = 1;
	if (opcion == 1) {
		console.log("El area del rectangulo es = " + metodo(rectangulo,base,altura));
	}
	 else if (opcion == 2) {
	 	console.log("El area del triangulo es = " + metodo(triangulo,altura,base));
	 }
	 else if (opcion == 3) {
	 	console.log("El area del circulo es = " + metodo(circulo,radio));
	 }
	var opcion = 2;
	if (opcion == 1) {
		console.log("El area del rectangulo es = " + metodo(rectangulo,base,altura));
	}
	 else if (opcion == 2) {
	 	console.log("El area del triangulo es = " + metodo(triangulo,altura,base));
	 }
	 else if (opcion == 3) {
	 	console.log("El area del circulo es = " + metodo(circulo,radio));
	 }

	var opcion = 3;
	if (opcion == 1) {
		console.log("El area del rectangulo es = " + metodo(rectangulo,base,altura));
	}
	 else if (opcion == 2) {
	 	console.log("El area del triangulo es = " + metodo(triangulo,altura,base));
	 }
	 else if (opcion == 3) {
	 	console.log("El area del circulo es = " + metodo(circulo,radio));
	 }
	 var opcion = 4;

}




