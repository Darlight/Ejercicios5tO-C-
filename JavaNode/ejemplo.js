function isPrime(n) {
	for(var i = 2; i < n; i++){
		if (n % i == 0){
			return false;
		}
	}
	return true;
}

















var isEven = function(n){
	return n % 2 == 0;
}

if (isEven(104)) {
	console.log("Es par!");

} else{
	console.log("No es par");
}


var saludoFormal = function(nombre){
	return "Buenas tardes " + nombre + " gusto en saludarlo";
} 

var saludoInformal = function(nombre){
	return "Hola " + nombre + " negro tonto! que tal?";
} 

var persona = "Erick";

var saludarlo = function(saludo,nombre){
	return(saludo(nombre));
}

if (persona == "Erick") {
	console.log(saludarlo(saludoInformal, persona));
}
else{
	console.log(saludarlo(saludoFormal, persona));
}
