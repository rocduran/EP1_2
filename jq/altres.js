window.onload = function() {
	//indexedDB.deleteDatabase("RMBD");
	associarEvents();
};

function associarEvents() {
	xmlFolder = '/RocMoi/BD/XMLDPEspanya2015.xml';
	jsonFolder = '/RocMoi/BD/XMLDPFrança2015.txt';
	contingut = document.getElementById("contingutFitxer");
	titulCont = document.getElementById("titulH");
	crud = document.getElementById("crud");
	amagarCrud();


	document.getElementById("jsonBut").onclick = presentarJSON;
	document.getElementById("xmlBut").onclick = presentarXML;
	//document.getElementById("view").onclick = ;
	
	crearDB();
	volcarXML();
	volcarJSON();
}

function crearObjecteAjax() {
	var obj;
	if (window.XMLHttpRequest) { //si no es IE
		obj = new XMLHttpRequest();
	} else { //es IE o no te objecte
		try {
			obj = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {
			alert("Navegador utilitzat no soportat !")
		}
	}
	return obj;
}

function crearDB() {
	alert("IDB suportat!");
	var idbSupported = false;

	if ("indexedDB" in window) {
		idbSupported = true;
	}
	if (idbSupported) {
		var openRequest = indexedDB.open("RMBD", 1);

		openRequest.onupgradeneeded = function(e) {
			var rmdb = e.target.result;

			if (!rmdb.objectStoreNames.contains("itemsXML")) {
				rmdb.createObjectStore("itemsXML"); //storage per fitxer xml
			}

			if (!rmdb.objectStoreNames.contains("itemsJSON")) {
				rmdb.createObjectStore("itemsJSON"); //storage per fitxer json
			}
		}
		openRequest.onsuccess = function(e) {
			console.log("Success!");
			idb = e.target.result;
		}
		openRequest.onerror = function(e) {
			console.log("Error");
			console.dir(e);
		}
	} 

}

function volcarJSON(){
	jsonRequest = crearObjecteAjax();
	jsonRequest.open('GET', jsonFolder, true);
	jsonRequest.send("");
	jsonRequest.onreadystatechange = function() {
		if (jsonRequest.readyState == 4 && jsonRequest.status == 200) {

			var transaction = idb.transaction(["itemsJSON"],"readwrite").objectStore("itemsJSON");
			
			doc = JSON.parse(jsonRequest.responseText);

			for (var i = 0; i < doc.length; i++) {
				var objecte = new Object;

				objecte.Codi = doc[i].CODI;

				objecte.Tipus = doc[i].TIPUS;

				objecte.Pregunta = doc[i].PREGUNTA;

				objecte.DataI = doc[i].DATAI;

				objecte.DataF = doc[i].DATAF;

				var request = transaction.add(objecte,i);

			}

			request.onerror =function(e){
				alert("El fitxer ja s'havia carregat", e.target.error.name);
			}
			request.onsuccess = function(e){
				alert("Fitxer carregat amb exit");
			}
		}
	}
}

function presentarJSON(){
	var objectStore = idb.transaction("itemsJSON").objectStore("itemsJSON");
	txt=""; //html a presentar

	objectStore.openCursor().onsuccess = function(e){
		var cursor = e.target.result;
		if (cursor){
			txt=txt+"<p class=\"item\">Codi: "+cursor.value.Codi+"<BR>";
			txt=txt+"Tipus: "+cursor.value.Tipus+"<BR>";
			txt=txt+"Pregunta: "+cursor.value.Pregunta+"<BR>";
			txt=txt+"Data Inici: "+cursor.value.DataI+"<BR>";
			txt=txt+"Data Fi: "+cursor.value.DataF+"<BR>";
			txt=txt+"</p>"

			cursor.continue();
		}
		contingut.innerHTML =txt;
		titulCont.innerHTML ="Contingut democràcia participativa a França:";
		mostrarCrud();
	}
}

function volcarXML(){
	var xmlRequest = crearObjecteAjax();
	xmlRequest.open('GET', xmlFolder, true);
	xmlRequest.send("");

	xmlRequest.onreadystatechange = function() {
		if (xmlRequest.readyState == 4 && xmlRequest.status == 200) {	

			var transaction = idb.transaction(["itemsXML"],"readwrite").objectStore("itemsXML");

			var doc = xmlRequest.responseXML.documentElement.getElementsByTagName("ITEM");

			for (var i = 0; i < doc.length; i++) {
				var objecte = new Object;

				aux = doc[i].getElementsByTagName("CODI");
				objecte.Codi = aux[0].firstChild.nodeValue;

				aux = doc[i].getElementsByTagName("TIPUS");
				objecte.Tipus = aux[0].firstChild.nodeValue;

				aux = doc[i].getElementsByTagName("PREGUNTA");
				objecte.Pregunta = aux[0].firstChild.nodeValue;

				aux = doc[i].getElementsByTagName("DATAI");
				objecte.DataI = aux[0].firstChild.nodeValue;

				aux = doc[i].getElementsByTagName("DATAF");
				objecte.DataF = aux[0].firstChild.nodeValue;

				var request = transaction.add(objecte,i);

			}

			request.onerror =function(e){
				alert("El fitxer ja s'havia carregat", e.target.error.name);
			}

			request.onsuccess = function(e){
				alert("Fitxer carregat amb exit");
			}
		}
	}
}

function presentarXML(){
	var objectStore = idb.transaction("itemsXML").objectStore("itemsXML");
	txt=""; //html a presentar

	objectStore.openCursor().onsuccess = function(e){
		var cursor = e.target.result;
		if (cursor){
			txt=txt+"<p class=\"item\">Codi: "+cursor.value.Codi+"<BR>";
			txt=txt+"Tipus: "+cursor.value.Tipus+"<BR>";
			txt=txt+"Pregunta: "+cursor.value.Pregunta+"<BR>";
			txt=txt+"Data Inici: "+cursor.value.DataI+"<BR>";
			txt=txt+"Data Fi: "+cursor.value.DataF+"<BR>";
			txt=txt+"</p>"

			cursor.continue();
		}
		contingut.innerHTML =txt;
		titulCont.innerHTML ="Contingut democràcia participativa a Espanya:";
		mostrarCrud();
	}
	
}

function amagarCrud(){
	crud.style.display="none";
}

function mostrarCrud(){
	crud.style.display="block";
}





