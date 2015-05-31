$(document).ready(init);
//Inicialitzar associacions Events-formulari
function init(){
	associaEvents();
	determinaVariableSessio();
}

//Connector Events
function associaEvents(){
	// MENU VERTICAL//
	$("#BotoConectat").click(conecta);
	$("#sortir").click(desconecta);
}

function conecta(){
	var usuari = document.getElementById('suNom').value;

	var contrasenya = document.getElementById('suPass').value;

	$.ajax
	({	url: 'php/conectat.php',
		type: 'POST',
		data: 'quin=login&usuari='+usuari+'&contrasenya='+contrasenya,
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		//Trucada a funció (per no programar-la aquí i respectar el model)
		success: function(data) {resposta(data, usuari);} 
	});
}

function resposta(estat, usuari){
	if(estat =="true"){
		alert("BENVINGUT ! " + usuari);
		determinaVariableSessio();
		location.reload();
	} else {
		alert("NOM D'USUARI O CONTRASENYA INCORRECTA !");
	}
}

function desconecta(){
	$.ajax
	({	url: 'php/conectat.php',
		type: 'POST',
		data: 'quin=logout',
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		//Trucada a funció (per no programar-la aquí i respectar el model)
		success: function() {determinaVariableSessio();} 
	});
	location.reload();
}

function determinaVariableSessio(){
	$.ajax
	({	url: 'php/conectat.php',
		type: 'POST',
		data: 'quin=load',
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		//Trucada a funció (per no programar-la aquí i respectar el model)
		success: function(data) {presentacio(data);} 
	});
}

function presentacio(data){
	if(data[0]){
		document.getElementById("noConectat").style.display = "none";
		document.getElementById("conectat").style.display = "hidden";
		document.getElementById("nomUsuari").text = data[1];

	} else {
		document.getElementById("nomUsuari").text = "Inicia Sessió";
		document.getElementById("noConectat").style.display = "hidden";
		document.getElementById("conectat").style.display = "none";
	}
}