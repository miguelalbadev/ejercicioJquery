function aceptar(){
	$("body").append("<p>Hola Miguel</p>");
	
}

function cancelar(){
	$("p").remove();
	$("body").append("</br><label>Nombre: </label>");
	$("body").append("<input></input>");
	$("body").append("</br><label>Apellidos: </label>");
	$("body").append("<input></input>");
	$("body").append("</br><button id='Enviar' onclick='enviar()'>Enviar</button>");
}
$(document).ready(function(){
	$("body").append("<button id='Aceptar' onclick='aceptar()'>Aceptar</button>");
	$("body").append("<button id='Cancelar' onclick='cancelar()'>Cancelar</button>");
});