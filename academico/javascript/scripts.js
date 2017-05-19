////////////////////////////////////////
var botonCambiarBubu = document.getElementById("cambiar");
var nombre = document.getElementById
 
 botonCambiarBubu.onclick = function(){
 	var texto = "Jesus is the one"
 

var texto = "Alucard"
for (var i = 0; i < 10; i++) {
	texto += i;
}
var alucard = document.getElementById("bubu");
alucard.innerHTML = texto;
}
//////////////////////////////////////////
var nombre = document.getElementById("nombre");
var titulo = document.getElementById("titulo");
var saludar_boton = document.getElementById("saludar");

saludar_boton.onclick = function(){
	var txtNombre = nombre.value;
	titulo.innerHTML = "Hola " + txtNombre 
}

/////////////////////////////////////////

var inAutomatico = document.getElementById("automatico")
var txAutomatico = document.getElementById("texto-automatico")

inAutomatico.onkeyup = function(){
	txAutomatico.innerHTML = inAutomatico.value;
}
//////////////////////////////////////////
var website = document.getElementById('website');
var btnir = document.getElementById("ir");

btnir.onclick = function(){
	window.location = website.value;
}
/////////////////////////////////////////
var square = document.getElementById("square")
var btnanimar = document.getElementById("animar")
btnanimar.onclick = function(){
	square.classList.add("open");
}