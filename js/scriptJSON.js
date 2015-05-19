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

//Peticó AJAX (llistat total de clients de la BD)
function llistatClients(dades){
    $.ajax
	({	url: 'llistatComplert.php',
		dataType: 'json',
		type: 'get',
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		//Trucada a funció (per no programar-la aquí i respectar el model)
		success: function(data) {presentaDades(data);} 
	});
}

function f2(valor) {
//alert(valor);
$.ajax
	({	url: 'elimina.php?id='+valor,
		dataType: 'json',
		type: 'get',
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		//Trucada a funció (per no programar-la aquí i respectar el model)
		//Decidim que després d'eliminar tornem a presentar les dades
		success: function(data) {presentaDades(data);} 
	});
}	
//Funció de presentació quan es rebin les dades formatades
function presentaDades(data){
	$("#resultats").html("");
	$("#resultats").append(
		$.each(data, function(index){
			var nom = data[index].nombres;
			var ciutat = data[index].ciudad;
			var telf = data[index].telefono;
			var idClient=data[index].id;
			$("#resultats").append('<p>Id    : '+idClient+'</p>');
			//Proposta 1. Crear enllaços dinàmics amb href 
			$("#resultats").append('<a href=modificar.php?id='+idClient+'>Editar | ');
			$("#resultats").append('<a href=eliminar.php?id='+idClient+'>Eliminar');
			//Proposta 2. Crear botó o imatge que invoqui una funció amb paràmetre
			$cadena="<button name='"+ idClient + "' onclick='f2("+idClient +");'>Eliminar</button>";
			$("#resultats").append($cadena);
			$("#resultats").append('<p>Nom    : '+nom+'\t Telefon  :'+telf+'\t Ciutat : '+ciutat+'</p><br>');
			
		})
	);
}

 
