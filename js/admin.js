$(document).ready(init);
//Inicialitzar associacions Events-formulari
//Altres inits 
function init(){
	associaEvents();
}

//Connector Events--Formulari
function associaEvents(){
	// MENU VERTICAL//
	$("a.noticies").click(llistatNoticies);
	$("a.multimedia").click(llistatMultimedies);
	$("a.usuaris").click(recuperarDades);

	//Inserir elements//
	$('#enviarNot').click(inserirNoticia);

}

//FUNCIONS PER RECUPERAR DADES DE LA BASE DE DADES//
////////////////////////////////////////////////////

//Peticó AJAX (llistat total de noticies de la BD)
function llistatNoticies(dades){
	$.ajax
	({	url: 'php/llistats.php?quin=noticies',
		dataType: 'json',
		type: 'get',
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		//Trucada a funció (per no programar-la aquí i respectar el model)
		success: function(data) {presentaNoticies(data);} 
	});
}

//Peticó AJAX (llistat total de multimedies de la BD)
function llistatMultimedies(dades){
	$.ajax
	({	url: 'php/llistats.php?quin=multimedies',
		dataType: 'json',
		type: 'get',
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		//Trucada a funció (per no programar-la aquí i respectar el model)
		success: function(data) {presentaMultimedies(data);} 
	});
}

//Peticó AJAX (llistat total de usuaris de la BD)
function llistatUsuaris(dades){
	$.ajax
	({	url: 'php/llistats.php?quin=usuaris',
		dataType: 'json',
		type: 'get',
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		//Trucada a funció (per no programar-la aquí i respectar el model)
		success: function(data) {presentaUsuaris(data);} 
	});
}

//FUNCIONS PER INSERIR DADES A LA BASE DE DADES//
/////////////////////////////////////////////////
function recuperarDades(){
	var titul = document.getElementById('titulNot').value;

	var contingut = document.getElementById('contingutNot').value;

	var tipus;

	if(document.getElementById('op1').checked){
		tipus = 'Votació';
	}

	if(document.getElementById('op2').checked){
		tipus = 'Enquesta';
	}

	if(document.getElementById('op3').checked){
		tipus = 'Referendum';
	}

	var url = null;
	var resum = null;

	inserirNoticia(titul, tipus, contingut, url, resum);
}

function inserirNoticia(ti, tp, co, url, rsm){
	$.ajax
	({	url: 'php/inserir.php?quin=noticies&titol='+ti+'&tipus='+tp+'$contingut='+co+'&url='+url+'&resum='+rsm,
		type: 'get',
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
	});
}

//FUNCIONS PER ELIMINAR DADES DE LA BASE DE DADES//
///////////////////////////////////////////////////

function eliminaNoticia(valor) {
//alert(valor);
$.ajax
({	url: 'php/elimina.php?id='+valor+'&quin=noticia',
	dataType: 'json',
	type: 'get',
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		//Trucada a funció (per no programar-la aquí i respectar el model)
		//Decidim que després d'eliminar tornem a presentar les dades
		success: function(data) {presentaNoticies(data);} 
	});
}	

function eliminaMultimedia(valor) {
//alert(valor);
$.ajax
({	url: 'php/elimina.php?id='+valor+'&quin=multimedia',
	dataType: 'json',
	type: 'get',
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		//Trucada a funció (per no programar-la aquí i respectar el model)
		//Decidim que després d'eliminar tornem a presentar les dades
		success: function(data) {presentaMultimedies(data);} 
	});
}

function eliminaUsuari(valor) {
//alert(valor);
$.ajax
({	url: 'php/elimina.php?id='+valor+'&quin=usuari',
	dataType: 'json',
	type: 'get',
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		//Trucada a funció (per no programar-la aquí i respectar el model)
		//Decidim que després d'eliminar tornem a presentar les dades
		success: function(data) {presentaUsuari(data);} 
	});
}	


//FUNCIONS PER PRESENTAR DADES DE LA BASE DE DADES//
////////////////////////////////////////////////////

//Funció de presentació quan es rebin les dades formatades
function presentaNoticies(data){
	$("#containerNoticies").html("");
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

//Funció de presentació quan es rebin les dades formatades
function presentaMultimedies(data){
	$("#containerMultimedia").html("");
	$("#containerMultimedia").append(
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

			$("#containerMultimedia").append(txt);

		})
);
}

//Funció de presentació quan es rebin les dades formatades
function presentaUsuaris(data){
	$("#containerUsuaris").html("");
	$("#containerUsuaris").append(
		$.each(data, function(index){
			var id = data[index].id;
			var nom = data[index].nom;

			var txt = '';
			txt = txt +'<div class="item">';
			txt = txt +'<div class="textitem" >';
			txt = txt +'<span>'+nom+'</span>';
			txt = txt +'</div>';
			txt = txt +'<div class="botons">';
			txt = txt +'<span><img src="img/pencil.png" alt="edita"> </span>';
			txt = txt +'<span><img src="img/bin.png" onclick="eliminaUsuari('+id +')" alt="borrar"> </span>';
			txt = txt +'</div>';
			txt = txt +'</div>';

			$("#containerUsuaris").append(txt);

		})
);
}



