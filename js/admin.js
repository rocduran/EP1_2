$(document).ready(init);
//Inicialitzar associacions Events-formulari
function init(){
	associaEvents();
	determinaVariableSessio();
}

//Connector Events
function associaEvents(){
	// MENU VERTICAL//
	$("a.noticies").click(llistatNoticies);
	$("a.multimedia").click(llistatMultimedies);
	$("a.usuaris").click(llistatUsuaris);

	//Inserir elements, eliminar o modificar elements//
	$('#enviarNot').click(inserirModificarNoticia);
	$('#borrarNot').click(netejaNoticia);

	//AQUI FALTARIEN ELS DE enviarMultimedia i enviarUsuari (nse si es diuen aixi, al html surt XD)


	//Inici Sessio//
	$("#BotoConectat").click(conecta);
	$("#sortir").click(desconecta);

}

//FUNCIONS PER RECUPERAR DADES DE LA BASE DE DADES//
////////////////////////////////////////////////////

//Peticó AJAX (llistat total de noticies de la BD)
function llistatNoticies(dades){
	$.ajax
	({	url: 'php/llistats.php',
		dataType: 'json',
		type: 'GET',
		data: 'quin=noticies',
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		//Trucada a funció (per no programar-la aquí i respectar el model)
		success: function(data) {presentaNoticies(data);} 
	});
}

//Peticó AJAX (llistat total de multimedies de la BD)
function llistatMultimedies(dades){
	$.ajax
	({	url: 'php/llistats.php',
		dataType: 'json',
		type: 'GET',
		data: 'quin=multimedies',
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		//Trucada a funció (per no programar-la aquí i respectar el model)
		success: function(data) {presentaMultimedies(data);} 
	});
}

//Peticó AJAX (llistat total de usuaris de la BD)
function llistatUsuaris(dades){
	$.ajax
	({	url: 'php/llistats.php',
		dataType: 'json',
		type: 'GET',
		data : 'quin=usuaris', 
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		//Trucada a funció (per no programar-la aquí i respectar el model)
		success: function(data) {presentaUsuaris(data);} 
	});
}

//FUNCIONS PER INSERIR DADES A LA BASE DE DADES//
/////////////////////////////////////////////////
function inserirModificarNoticia(){ //segons sigui el header del div, inserim o modifiquem
	var titol = document.getElementById('titolNot').value;

	var cont = document.getElementById('contingutNot').value;

	var tipus;

	if(document.getElementById('op1').checked){
		tipus = 'Vot';
	}

	if(document.getElementById('op2').checked){
		tipus = 'Enq';
	}

	if(document.getElementById('op3').checked){
		tipus = 'Ref';
	}

	var url = "test";
	var resum = "test";

	var quin = $('.inserirNoticia').find('.header').text();
		
	if(quin == "Inserir not\u00edcia"){
		$.ajax
		({	url: 'php/inserir.php',
			type: 'POST',
			data: 'quin=noticies&tipus='+tipus+'&titol='+titol+'&contingut='+cont+'&url='+url+'&resum='+resum ,
			cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
			success: function(data){alert("Dades inserides correctament")}

		});
	}

	if(quin == "Editar not\u00edcia"){
		var id = document.getElementById("idNot").innerHTML;
		$.ajax
		({	url: 'php/inserir.php',
			type: 'POST',
			data: 'quin=noticiesUpdate&id='+id+'&tipus='+tipus+'&titol='+titol+'&contingut='+cont+'&url='+url+'&resum='+resum ,
			cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
			success: function(data){alert("Dades actualitzades correctament")}

		});
	}

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

function inserirModificarMultimedies(){ //segons sigui el header del div, inserim o modifiquem
	// com el de noticies
}

function netejaMultimedia(){

}

function inserirModificarUsuaris(){ //segons sigui el header del div, inserim o modifiquem
	//mas de lo mismo xd
}

function netejaUsuari(){

}

//FUNCIONS PER ELIMINAR DADES DE LA BASE DE DADES//
///////////////////////////////////////////////////

function eliminaNoticia(valor) {
	$.ajax
	({	url: 'php/elimina.php',
		dataType: 'json',
		type: 'GET',
		data: 'id='+valor+'&quin=noticia',
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
	});
}	

function eliminaMultimedia(valor) {
	$.ajax
	({	url: 'php/elimina.php',
		dataType: 'json',
		type: 'GET',
		data : 'id='+valor+'&quin=multimedia', 
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
	});
}

function eliminaUsuari(valor) {
	$.ajax
	({	url: 'php/elimina.php',
		dataType: 'json',
		type: 'GET',
		data: 'id='+valor+'&quin=usuari',
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false
	});
}	

// FUNCIONS PER MODIFICAR DADES DE LA BASE DE DADES//
/////////////////////////////////////////////////////
function recuperarNoticia(valor){ // primer recuperem la noticia que volem modificar
 	$.ajax
	({	url: 'php/llistats.php',
		dataType: 'json',
		type: 'GET',
		data: 'quin=noticia&id='+valor,
		cache: false, //IE per a defecte emmagatzema en caché (evitar-ho-->false)
		success: function(data){presentaNoticia(data);}
	});
}

function presentaNoticia(data){ 
	// Primer mostrem la pagina d'inserir modificada amb els camps de la noticia
	$('.menuadmin a').removeClass('aqui');
    $('div.inserirNoticia').addClass('aqui');
    $('div.inserirNoticia').show();
    $('div.noticies, div.multimedia, div.resum,div.usuaris, div.inserirMulti, div.inserirUsuari').hide();

    $('.inserirNoticia .header').html("Editar not\u00edcia"); // s'ha de tornar al estat original al sortir !
    
    var id = data[1].id;
    var titol = data[1].titol;
    var tipus = data[1].tipus;
    var url = data[1].url;
    var cont = data[1].contingut;
    var resum = data[1].resum;

    $('#titolNot').val(titol);

    if(tipus == "Vot"){
		document.getElementById('op1').checked = true;
	}

	if(tipus == "Enq"){
		document.getElementById('op2').checked = true;
	}

	if(tipus == "Ref"){
		document.getElementById('op3').checked = true;
	}

	$('#contingutNot').val(cont);
	$('#resum').val(resum);

	// aquest p sera per guardar el id de la noticia, per actualitzar quan l'usuari clicki al boto enviar 
	var element = document.createElement("p");
	var texte = document.createTextNode(id);
	element.appendChild(texte);
	element.style.display = "none";
	element.id = "idNot";

	document.getElementById("containerInsNot").appendChild(element);
}

function recuperarMultimedia(dades){
	//aqui aniria la peticio ajax + crida a la seguuent
}

function presentaMultimedia(data){
	//aqui lo de recuperar dades del element i presentarles, canviar el header i el div oculto pel id
}

function recuperarUsuari(dades){
	//mas de lo mismo XD
}

function presentaUsuari(data){
	//mas de lo mismo xD
}

//FUNCIONS PER PRESENTAR DADES DE LA BASE DE DADES//
////////////////////////////////////////////////////
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
			txt = txt +'<span><img src="img/pencil.png" onclick="recuperarNoticia('+id +')" alt="edita"> </span>';
			txt = txt +'<span><img src="img/bin.png" onclick="eliminaNoticia('+id +')" alt="borrar"> </span>';
			txt = txt +'</div>';
			txt = txt +'</div>';

			$("#containerNoticies").append(txt);

		})
		);
}

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
			txt = txt +'<span><img src="img/pencil.png" onclick="recuperarMultimedia('+id +')" alt="edita"> </span>';
			txt = txt +'<span><img src="img/bin.png" onclick="eliminaMultimedia('+id +')" alt="borrar"> </span>';
			txt = txt +'</div>';
			txt = txt +'</div>';

			$("#containerMultimedia").append(txt);

		})
		);
}

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
			txt = txt +'<span><img src="img/pencil.png" onclick="recuperarUsuari('+id +')" alt="edita"> </span>';
			txt = txt +'<span><img src="img/bin.png" onclick="eliminaUsuari('+id +')" alt="borrar"> </span>';
			txt = txt +'</div>';
			txt = txt +'</div>';

			$("#containerUsuaris").append(txt);

		})
		);
}

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



