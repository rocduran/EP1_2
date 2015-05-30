$(document).ready(init);
//Inicialitzar associacions Events-formulari
function init(){
	associaEvents();
}

//Connector Events
function associaEvents(){
	// MENU VERTICAL//
	$("#BotoConectat").click(conecta);
}

function conecta(){
	var usuari = document.getElementById('suNom').value;

	var contrasenya = document.getElementById('suPass').value;

	$.ajax
	({	url: 'php/conectat.php',
		type: 'POST',
		data: 'usuari='+usuari+'&contrasenya='+contrasenya,
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		//Trucada a funció (per no programar-la aquí i respectar el model)
		success: function(data) {resposta(data, usuari);} 
	});
}

function resposta(estat, usuari){
	if(estat == 1){
		alert("BENVINGUT ! " + usuari);

		
	} else {
		alert("NOM D'USUARI O CONTRASENYA INCORRECTA !");
	}
}