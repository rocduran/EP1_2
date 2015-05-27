$(document).ready(init);
//Inicialitzar associacions Events-formulari
function init(){
	associaEvents();
}

//Connector Events
function associaEvents(){
	// MENU VERTICAL//
	$("a.noticies").click(llistatNoticies);
	$("a.multimedia").click(llistatMultimedies);
	$("a.usuaris").click(llistatUsuaris);

	//Inserir elements//
	$('#enviarNot').click(inserirNoticia);
	$('#borrarNot').click(netejaNoticia);


}

//FUNCIONS PER RECUPERAR DADES DE LA BASE DE DADES//
////////////////////////////////////////////////////

//Petic� AJAX (llistat total de noticies de la BD)
function llistatNoticies(dades){
	$.ajax
	({	url: 'php/llistats.php',
		dataType: 'json',
		type: 'GET',
		data: 'quin=noticies',
		cache: false, //IE per a defecte emmagatzema en cach� (evitar-ho-->false)
		//Trucada a funci� (per no programar-la aqu� i respectar el model)
		success: function(data) {presentaNoticies(data);} 
	});
}

//Petic� AJAX (llistat total de multimedies de la BD)
function llistatMultimedies(dades){
	$.ajax
	({	url: 'php/llistats.php',
		dataType: 'json',
		type: 'GET',
		data: 'quin=multimedies',
		cache: false, //IE per a defecte emmagatzema en cach� (evitar-ho-->false)
		//Trucada a funci� (per no programar-la aqu� i respectar el model)
		success: function(data) {presentaMultimedies(data);} 
	});
}

//Petic� AJAX (llistat total de usuaris de la BD)
function llistatUsuaris(dades){
	$.ajax
	({	url: 'php/llistats.php',
		dataType: 'json',
		type: 'GET',
		data : 'quin=usuaris', 
		cache: false, //IE per a defecte emmagatzema en cach� (evitar-ho-->false)
		//Trucada a funci� (per no programar-la aqu� i respectar el model)
		success: function(data) {presentaUsuaris(data);} 
	});
}

//FUNCIONS PER INSERIR DADES A LA BASE DE DADES//
/////////////////////////////////////////////////
function inserirNoticia(){
	var titol = document.getElementById('titolNot').value;

	var cont = document.getElementById('contingutNot').value;

	var tipus;

	if(document.getElementById('op1').checked){
		tipus = 'Votaci�';
	}

	if(document.getElementById('op2').checked){
		tipus = 'Enquesta';
	}

	if(document.getElementById('op3').checked){
		tipus = 'Referendum';
	}

	var url = "test";
	var resum = "test";

	alert(tipus);
	
	$.ajax
	({	url: 'php/inserir.php',
		type: 'POST',
		data: 'quin=noticies&tipus='+tipus+'&titol='+titol+'&contingut='+cont+'&url='+url+'&resum='+resum ,
		cache: false, //IE per a defecte emmagatzema en cach� (evitar-ho-->false)

	});

	netejaNoticia();
}

function netejaNoticia(){
	//netejem els camps 
	document.getElementById('titolNot').value = "";

	document.getElementById('op1').checked = false;
	document.getElementById('op2').checked = false;
	document.getElementById('op3').checked = false;

	document.getElementById('contingutNot').value = "";
}

//FUNCIONS PER ELIMINAR DADES DE LA BASE DE DADES//
///////////////////////////////////////////////////

function eliminaNoticia(valor) {
	$.ajax
	({	url: 'php/elimina.php',
		dataType: 'json',
		type: 'GET',
		data: 'id='+valor+'&quin=noticia',
		cache: false, //IE per a defecte emmagatzema en cach� (evitar-ho-->false)

		success: function() {llistatNoticies(dades);} 
	});
}	

function eliminaMultimedia(valor) {
	$.ajax
	({	url: 'php/elimina.php',
		dataType: 'json',
		type: 'GET',
		data : 'id='+valor+'&quin=multimedia', 
		cache: false, //IE per a defecte emmagatzema en cach� (evitar-ho-->false)

		success: function(data) {presentaMultimedies(data);} 
	});
}

function eliminaUsuari(valor) {
	$.ajax
	({	url: 'php/elimina.php',
		dataType: 'json',
		type: 'GET',
		data: 'id='+valor+'&quin=usuari',
		cache: false, //IE per a defecte emmagatzema en cach� (evitar-ho-->false)

		success: function(data) {presentaUsuari(data);} 
	});
}	


//FUNCIONS PER PRESENTAR DADES DE LA BASE DE DADES//
////////////////////////////////////////////////////

//Funci� de presentaci� quan es rebin les dades formatades
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

//Funci� de presentaci� quan es rebin les dades formatades
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
			txt = txt +'<span><img src="img/bin.png" onclick="eliminaMultimedia('+id +')" alt="borrar"> </span>';
			txt = txt +'</div>';
			txt = txt +'</div>';

			$("#containerMultimedia").append(txt);

		})
		);
}

//Funci� de presentaci� quan es rebin les dades formatades
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



