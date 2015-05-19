$(document).ready(init);
//Inicialitzar associacions Events-formulari
//Altres inits 
function init(){
associaEvents();
altres();
}
//Connector Events--Formulari
function associaEvents(){
$("#actualizarDades").click(llistatNoticies);
}
//Altres inits
function altres(){};

//Peticó AJAX (llistat total de clients de la BD)
function llistatNoticies(dades){
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
			var id = data[index].id;
			var tipus = data[index].tipus;
			var titol = data[index].titol;
			var contingut = data[index].contingut;
			var url=data[index].url;
			$("#resultats").append('<p>Id    : '+id+'</p>');
			//Proposta 1. Crear enllaços dinàmics amb href 
			// $("#resultats").append('<a href=modificar.php?id='+id+'>Editar | ');
			// $("#resultats").append('<a href=eliminar.php?id='+id+'>Eliminar');
			//Proposta 2. Crear botó o imatge que invoqui una funció amb paràmetre
			$cadena="<button name='"+ id + "' onclick='f2("+id +");'>Eliminar</button>";
			$("#resultats").append($cadena);
			$("#resultats").append('<p>Titol    : '+titol+'\t <br> Contingut  :'+contingut+'\t <br> Url : '+url+'</p><br>');
			$("#resultats").append('<img class="grafic" src="../' +url+'" height="100%" width="100%" border=0 alt="">');
 			
		})
	);
}

 
