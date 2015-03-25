$(document).ready(function validarNom() {
	var valor = document.getElementById("nom");
	var regExNom = /[A-Z][a-z]+$/;
	if( regExNom.value.match(valor) ){
		valor.addClass("validat");
	}else{
		valor.addClass("noValidat");
		focus(valor);
	};
});
