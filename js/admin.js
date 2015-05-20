$(document).ready(init);
//Inicialitzar associacions Events-formulari
//Altres inits 
function init(){
	associaEvents();
	altres();
}

//Connector Events--Formulari
function associaEvents(){
	$("a.noticies").click(llistatNoticies);
	$("#actualizarDades").click(test);
}

//Altres inits
function altres(){};

//Petic� AJAX (llistat total de clients de la BD)
function llistatNoticies(dades){
	$.ajax
	({	url: 'php/llistat.php',
		dataType: 'json',
		type: 'get',
		cache: false, //IE per a defecte emmagatzema en cach� (evitar-ho-->false)
		//Trucada a funci� (per no programar-la aqu� i respectar el model)
		success: function(data) {presentaDades(data);} 
	});
}

function test(dades){
	$.ajax
	({	url: 'llistat.php',
		dataType: 'json',
		type: 'get',
		cache: false, //IE per a defecte emmagatzema en cach� (evitar-ho-->false)
		//Trucada a funci� (per no programar-la aqu� i respectar el model)
		success: function(data) {testing(data);} 
	});
}

function eliminaNoticia(valor) {
//alert(valor);
$.ajax
({	url: 'php/elimina.php?id='+valor,
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
	$("#containerNoticies").append(
		$.each(data, function(index){
			var id = data[index].id;
			var titol = data[index].titol;

			var txt = '';
			txt = txt +'<div class="item">';
			txt = txt +'<div class="textitem" >';
			txt = txt +'<span>'+titol+'</span>';
			txt = txt +'</div>';
			txt = txt +'<div class="botons">';
			txt = txt +'<span><img src="img/pencil.png" alt="edita"> </span>';
			txt = txt +'<span><img src="img/bin.png" onclick="eliminaNoticia('+id +')" alt="borrar"> </span>';
			txt = txt +'</div>';
			txt = txt +'</div>';

			$("#containerNoticies").append(txt);

		})
);
}

function testing(data){
$("#resultats").html("");
	$("#resultats").append(
		$.each(data, function(index){
			var id = data[index].id;
			var titol = data[index].titol;
			var image = data[index].url

			var txt = '';
			txt = txt +'<div class="item">';
			txt = txt +'<div class="textitem" >';
			txt = txt +'<span>'+titol+'</span>';
			txt = txt +'</div>';
			txt = txt +'<div class="botons">';
			txt = txt +'<span><img src="../'+image+'" alt="borrar"> </span>';
			txt = txt +'</div>';
			txt = txt +'</div>';

			$("#resultats").append(txt);

		})
);
}

