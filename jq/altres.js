window.onload = function() {
	//indexedDB.deleteDatabase("RMBD");
	associarEvents();
};

function associarEvents() {
	xmlFolder = "/RocMoi/BD/XMLDPEspanya2015.xml";
	jsonFolder = "/RocMoi/BD/XMLDPFrança2015.txt";

	contingut = document.getElementById("contingutFitxer");

	titulCont = document.getElementById("titulH");

	jsonBut = document.getElementById("jsonBut");
	xmlBut = document.getElementById("xmlBut");

	crud = document.getElementById("crud");
	sav = document.getElementById("sav");
	mod = document.getElementById("mod");
	del = document.getElementById("del");
	res = document.getElementById("res");
	amagarCrud();

	jsonBut.onclick = presentarJSON;
	xmlBut.onclick = presentarXML;
	mod.onclick = modificar;
	sav.onclick = actualitzarDB;
	del.onclick = borrar;
	res.onclick = reiniciar;

	idb =null;
	vJSON = false;
	vXML = false;
	crearDB();

	xml = false;
	modificant = false;
	borrant = false;
}

function crearObjecteAjax() {
	var obj;
	if (window.XMLHttpRequest) { //si no es IE
		obj = new XMLHttpRequest();
	} else { //es IE o no te objecte
		try {
			obj = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {
			console.log("Navegador utilitzat no soportat !")
		}
	}
	return obj;
}

function crearDB() {

	var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
	var idbSupported = false;

	if (indexedDB) {
		idbSupported = true;
		console.log("IDB soportat!");
	} else {
		console.log("IDB no soportat")
	}
	if (idbSupported) {
		var openRequest = indexedDB.open("RMBD", 1);

		openRequest.onupgradeneeded = function(e) {
			var db = e.target.result;

			if (!db.objectStoreNames.contains("itemsJSON")) {
				db.createObjectStore("itemsJSON", {keyPath: "ind"}); //storage per fitxer json
				vJSON=true;
			}

			if (!db.objectStoreNames.contains("itemsXML")) {
				db.createObjectStore("itemsXML", {keyPath: "ind"}); //storage per fitxer xml
				vXML=true;
			}

		};
		openRequest.onsuccess = function(e) {
			console.log("Success!");
			idb = e.target.result;
			if(idb!=null){
				if(vJSON){volcarJSON();}
				if(vXML){volcarXML();}	
			}
		};
		openRequest.onerror = function(e) {
			console.log("Error");
			console.dir(e);
		};
	} 
}

function volcarJSON(){
	var jsonRequest = crearObjecteAjax();
	jsonRequest.open("GET", jsonFolder, true);
	jsonRequest.send("");
	jsonRequest.onreadystatechange = function() {
		if (jsonRequest.readyState == 4 && jsonRequest.status == 200) {

			var transaction = idb.transaction(["itemsJSON"],"readwrite").objectStore("itemsJSON");
			
			doc = JSON.parse(jsonRequest.responseText);

			for (var i = 0; i < doc.length; i++) {
				var objecte = new Object;

				objecte.ind = i;

				objecte.Codi = doc[i].CODI;

				objecte.Tipus = doc[i].TIPUS;

				objecte.Pregunta = doc[i].PREGUNTA;

				objecte.DataI = doc[i].DATAI;

				objecte.DataF = doc[i].DATAF;

				var request = transaction.add(objecte); // inserim l'objecte

				request.onerror =function(e){
					console.log("El fitxer ja s'havia carregat", e.target.error.name);
				}
				request.onsuccess = function(e){
					console.log("Fitxer carregat amb exit");
				}
			}	
		}
	};
}

function presentarJSON(){
	if(!borrant && !modificant){
		var objectStore = idb.transaction("itemsJSON").objectStore("itemsJSON");
		var txt ="<table id=\"table\">";
		txt += "<thead> <tr> <th>Codi</th> <th>Tipus</th> <th>Pregunta</th> <th>Data Inici</th> <th>Data Fi</th> <th class=\"tdBorrar\">Borrar</th> </tr>  </thead>";
		txt += "<tbody>";
		objectStore.openCursor().onsuccess = function(e){
			var cursor = e.target.result;
			if (cursor){
				id=cursor.value.ind;

				txt += "<tr class=\"item\" id=\""+id+"\">";

				txt +="<td class=\"tdCodi\">"+cursor.value.Codi+"</td>";

				txt +="<td class=\"tdTipus\">"+cursor.value.Tipus+"</td>";

				txt +="<td class=\"tdPreg\">"+cursor.value.Pregunta+"</td>";

				txt +="<td class=\"tdDataI\">"+cursor.value.DataI+"</td>";

				txt +="<td class=\"tdDataF\">"+cursor.value.DataF+"</td>";

				txt +="<td class=\"tdBorrar\"><input type=\"checkbox\" class=\"ChBorrar\"></td>";

				txt +="</tr>";

				cursor.continue();
			}
			contingut.innerHTML =txt + "</tbody></table>";
			titulCont.innerHTML ="Contingut democràcia participativa a França:";
			mostrarCrud();
			xml =false;
		};
	}
}

function volcarXML(){
	var xmlRequest = crearObjecteAjax();
	xmlRequest.open("GET", xmlFolder, true);
	xmlRequest.send("");

	xmlRequest.onreadystatechange = function() {
		if (xmlRequest.readyState == 4 && xmlRequest.status == 200) {	

			var transaction = idb.transaction(["itemsXML"],"readwrite").objectStore("itemsXML");

			var doc = xmlRequest.responseXML.documentElement.getElementsByTagName("ITEM");

			for (var i = 0; i < doc.length; i++) {
				var objecte = new Object;

				objecte.ind = i;

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

				var request = transaction.add(objecte); // inserim l'objecte

				request.onerror =function(e){
					console.log("El fitxer ja s'havia carregat", e.target.error.name);
				};

				request.onsuccess = function(e){
					console.log("Fitxer carregat amb exit");
				};
			}
		}
	};
}

function presentarXML(){
	if(!borrant && !modificant){
		sav.style.display="none";
		var objectStore = idb.transaction("itemsXML").objectStore("itemsXML");
		var txt ="<table id=\"table\">";
		txt += "<thead> <tr> <th>Codi</th> <th>Tipus</th> <th>Pregunta</th> <th>Data Inici</th> <th>Data Fi</th> <th class=\"tdBorrar\">Borrar</th> </tr> </thead>";
		txt += "<tbody>";

		objectStore.openCursor().onsuccess = function(e){
			var cursor = e.target.result;
			
			if (cursor){
				id=cursor.value.ind;

				txt += "<tr class=\"item\" id=\""+id+"\">";

				txt +="<td class=\"tdCodi\">"+cursor.value.Codi+"</td>";

				txt +="<td class=\"tdTipus\">"+cursor.value.Tipus+"</td>";

				txt +="<td class=\"tdPreg\">"+cursor.value.Pregunta+"</td>";

				txt +="<td class=\"tdDataI\">"+cursor.value.DataI+"</td>";

				txt +="<td class=\"tdDataF\">"+cursor.value.DataF+"</td>";

				txt +="<td class=\"tdBorrar\"><input type=\"checkbox\" class=\"ChBorrar\"></td>";

				txt +="</tr>"

				cursor.continue();
			}
			contingut.innerHTML =txt + "</tbody></table>";
			titulCont.innerHTML ="Contingut democràcia participativa a Espanya:";
			mostrarCrud();
			xml=true;
		};	
	}
}

function amagarCrud(){
	crud.style.display="none";
}

function mostrarCrud(){
	crud.style.display="block";
}

function modificar(){
	if(!borrant){
		del.classList.add("unable");
		jsonBut.classList.add("unable");
		xmlBut.classList.add("unable");
		res.classList.add("unable");
		modificant = true;
		mod.style.display="none";
		sav.style.display="inline-block";
		contingutEditable();
	}
}


function contingutEditable(){
	var llista = document.getElementsByTagName("td");
	for (var i = 0; i < llista.length; i++) {
		llista[i].setAttribute("contenteditable","true");
	};
	
	var llista = document.getElementsByTagName("tr");
	for (var i = 0; i < llista.length; i++) {
		llista[i].classList.add("trEdit");
	};
}

function actualitzarDB(){
	if(modificant){
		var llista = document.getElementsByClassName("item");
		var codis = document.getElementsByClassName("tdCodi");
		var tipus = document.getElementsByClassName("tdTipus");
		var preguntes = document.getElementsByClassName("tdPreg");
		var datesI = document.getElementsByClassName("tdDataI");
		var datesF = document.getElementsByClassName("tdDataF");

		if (xml){
			var transaction = idb.transaction(["itemsXML"],"readwrite").objectStore("itemsXML");
		} else{
			var transaction = idb.transaction(["itemsJSON"],"readwrite").objectStore("itemsJSON");	
		}

		var i = 0;
		while (i < llista.length) {  //actualitzem la base de dades primer
			
			var objecte = new Object;

			objecte.ind = parseInt(llista[i].id);
			alert(objecte.ind);
			objecte.Codi = codis[i].innerHTML;
			objecte.Tipus = tipus[i].innerHTML;
			objecte.Pregunta = preguntes[i].innerHTML;
			objecte.DataI = datesI[i].innerHTML;
			objecte.DataF = datesF[i].innerHTML;
			
			var request = transaction.put(objecte); // put serveix per actualitzar l'item d'index i 

			request.onsuccess = function(e){
            	console.log("Item actualitzat");
        	};

        	request.onerror = function(e){
            	console.log("error al actualitzar");
        	};

			llista[i].classList.remove("trEdit"); // treiem la classe trEdit a les files de la taula
			i++;
		}

		var ret = document.getElementsByTagName("td"); // un cop guardat, sortim del mode modifcacio
		for (var i = 0; i < ret.length; i++) {
			ret[i].setAttribute("contenteditable","false");
		}

		modificant =false;
		sav.style.display="none";
		mod.style.display="inline-block";
		del.classList.remove("unable");
		jsonBut.classList.remove("unable");
		xmlBut.classList.remove("unable");
		res.classList.remove("unable");
	} else{
		console.log("Has de clickar a modificar primer !");
	}
}

function borrar(){
	if(!borrant && !modificant){
		mostrarChecks();
		mod.classList.add("unable");
		jsonBut.classList.add("unable");
		xmlBut.classList.add("unable");
		res.classList.add("unable");
		return;
	}else{
		if(!modificant){
			borrarCheckeds();
			mod.classList.remove("unable");
			jsonBut.classList.remove("unable");
			xmlBut.classList.remove("unable");
			res.classList.remove("unable");
		}
	}
	amagarChecks();
	
}

function mostrarChecks(){
	var ch = contingut.getElementsByClassName("tdBorrar");
	for (var i = 0; i < ch.length; i++) {
		ch[i].style.display="table-cell";
	}
	borrant=true;
}

function amagarChecks(){
	var ch = contingut.getElementsByClassName("tdBorrar");
	for (var i = 0; i < ch.length; i++) {
		ch[i].style.display="none";
	}
	borrant=false;
}

function borrarCheckeds(){
	
	var items = document.getElementsByClassName("item");
	var check = document.getElementsByClassName("ChBorrar");

	var aBorrar = [];
	var indxBorrar = [];
	var j = 0; 

	for (var i = 0; i < items.length; i++) {
		if(check[i].checked){
			aBorrar[j] = items[i]; //per treurels del HTML
			indxBorrar[j] = items[i].id; //indexs elements a borrar, per la DB
			j++;
		}
	}

	var llista = document.getElementsByTagName("tbody")[0];
	for (var i = 0; i < aBorrar.length; i++) {
		llista.removeChild(aBorrar[i]);
	}
	borrarRecordsDB(indxBorrar);
}

function borrarRecordsDB(indxBorrar){

	if (xml){
		var transaction = idb.transaction(["itemsXML"],"readwrite").objectStore("itemsXML");
	} else{
		var transaction = idb.transaction(["itemsJSON"],"readwrite").objectStore("itemsJSON");	
	}

	transaction.openCursor().onsuccess = function(e){
		var cursor = e.target.result;
			
		if (cursor){
			for (var i = 0; i != indxBorrar.length; i++){
				if(cursor.value.ind == indxBorrar[i]){
					var request = transaction.delete(cursor.value.ind);
				}
			}
			cursor.continue();
		}
	};	
}

function reiniciar(){
	if(!borrant && !modificant){
		indexedDB.deleteDatabase("RMBD");
		location.reload(true);
		//alert("Recarregar la pàgina !");
	}
}







