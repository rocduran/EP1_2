$(document).ready(init);
//Inicialitzar associacions Events-formulari
//Altres inits 
function init(){
associaEvents();
altres();
}
//Connector Events--Formulari
function associaEvents(){
$("#actualizarDades").click(llistatClients);
}
//Altres inits
function altres(){};

//Petic� AJAX (llistat total de clients de la BD)
function llistatClients(dades){
    $.ajax
	({	url: 'llistatComplert.php',
		dataType: 'json',
		type: 'get',
		cache: false, //IE per a defecte emmagatzema en cach� (evitar-ho-->false)
		//Trucada a funci� (per no programar-la aqu� i respectar el model)
		success: function(data) {presentaDades(data);} 
	});
}

function f2(valor) {
//alert(valor);
$.ajax
	({	url: 'elimina.php?id='+valor,
		dataType: 'json',
		type: 'get',
		cache: false, //IE per a defecte emmagatzema en cach� (evitar-ho-->false)
		//Trucada a funci� (per no programar-la aqu� i respectar el model)
		//Decidim que despr�s d'eliminar tornem a presentar les dades
		success: function(data) {presentaDades(data);} 
	});
}	
//Funci� de presentaci� quan es rebin les dades formatades
function presentaDades(data){
	$("#resultats").html("");
	$("#resultats").append(
		$.each(data, function(index){
			var nom = data[index].nombres;
			var ciutat = data[index].ciudad;
			var telf = data[index].telefono;
			var idClient=data[index].id;
			$("#resultats").append('<p>Id    : '+idClient+'</p>');
			//Proposta 1. Crear enlla�os din�mics amb href 
			$("#resultats").append('<a href=modificar.php?id='+idClient+'>Editar | ');
			$("#resultats").append('<a href=eliminar.php?id='+idClient+'>Eliminar');
			//Proposta 2. Crear bot� o imatge que invoqui una funci� amb par�metre
			$cadena="<button name='"+ idClient + "' onclick='f2("+idClient +");'>Eliminar</button>";
			$("#resultats").append($cadena);
			$("#resultats").append('<p>Nom    : '+nom+'\t Telefon  :'+telf+'\t Ciutat : '+ciutat+'</p><br>');
			
		})
	);
}

 
