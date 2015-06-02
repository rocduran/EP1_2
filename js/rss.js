$(document).ready(init);
//Inicialitzar associacions Events-formulari
function init(){
	associaEvents();
}

//Connector Events
function associaEvents(){
	llistatNoticies();
	determinaVariableSessio();
}


//Peticó AJAX (llistat total de noticies de la BD)
function llistatNoticies(dades){
	$.ajax
	({	url: 'php/rss.php',
		dataType: 'json',
		type: 'GET',
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		//Trucada a funció (per no programar-la aquí i respectar el model)
		success: function(data) {presentaNoticies(data);} 

	});
}

//FUNCIONS PER PRESENTAR DADES DEl RSS//
////////////////////////////////////////////////////
function presentaNoticies(data){
	var txt = '';
	$("#rss").html("");

	$.each(data, function(index){
		var titol = data[index][0];
		var descripcio = data[index][1];
		var url = data[index][2];

		txt = txt +'<a href="'+url+'" title="'+titol+'">';
		txt = txt +'<div class="seccio">';
		txt = txt +'<h1 class="pageTitle">'+titol+'</h1>';
		txt = txt + descripcio;
		txt = txt +'</div></a><hr>';

		});

	$("#rss").append(txt);
}

// function presentaNoticies (data) {
// 	alert(data[1][0]);
// }

//INICI SESSIO//
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

function resposta(ok, usuari){
	if(ok){
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
		document.getElementById("signIn").style.display = "none";

	} else {
		document.getElementById("nomUsuari").text = "Inicia Sessi\u00f3";
		document.getElementById("noConectat").style.display = "hidden";
		document.getElementById("conectat").style.display = "none";
		document.getElementById("signIn").style.display = "block";
	}
}



