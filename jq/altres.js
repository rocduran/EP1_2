window.onload = function() {
	associarEvents();
};
	
function associarEvents() {
	xmlFolder = '/RocMoi/BD/XMLDPEspanya2015.xml';
	jsonFolder = '/RocMoi/BD/XMLDPFrança2015.txt';
	contingut = document.getElementById("contingutFitxer");

	document.getElementById("jsonBut").onclick = carregarJSON; 
	document.getElementById("xmlBut").onclick = carregarXML; 
}

function crearObjecteAjax(){
	var obj;
	if(window.XMLHttpRequest){ //si no es IE
		obj = new XMLHttpRequest();
	} else { //es IE o no te objecte
		try{
			obj = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {
			alert("Navegador utilitzat no soportat !")
		}
	}
	return obj;
}

function carregarJSON(){
	jsonRequest = crearObjecteAjax();
	jsonRequest.open('GET',jsonFolder,true);
	jsonRequest.send("");
	jsonRequest.onreadystatechange = function()
	{
		if(jsonRequest.readyState == 4 && jsonRequest.status == 200){
			contingut.innerHTML = "";
			txt="" // txt comtindra el codi html a inserir :D
			doc = JSON.parse(jsonRequest.responseText);
		    for (i=0;i<doc.length;i++){
	    		txt = txt + "<p class=\"item\">";

	    		txt = txt + "Codi: " + doc[i].CODI + "<BR>";

	    		txt = txt + "Tipus: " + doc[i].TIPUS + "<BR>";

	    		txt = txt + "Pregunta: " + doc[i].PREGUNTA + "<BR>";

	    		txt = txt + "Data Inici: " + doc[i].DATAI + "<BR>";

	    		txt = txt + "Data Final: " + doc[i].DATAF;

	    		txt = txt + "</p>";
	   		}	
		    contingut.innerHTML = txt;
		}
	}
	alert("JSON carregat! :D");
}

function carregarXML() {
	xmlRequest = crearObjecteAjax();
	xmlRequest.open('GET',xmlFolder, true);
	xmlRequest.send("");
	xmlRequest.onreadystatechange = function()
	{
		if(xmlRequest.readyState == 4 && xmlRequest.status == 200){
			contingut.innerHTML = "";
			txt="";
			doc= xmlRequest.responseXML.documentElement.getElementsByTagName("ITEM");
			for (i=0; i<doc.length; i++){
				txt = txt + "<p class=\"item\">";
				aux = doc[i].getElementsByTagName("CODI");
				txt = txt + "Codi: " + aux[0].firstChild.nodeValue + "<BR>";

				aux = doc[i].getElementsByTagName("TIPUS");
				txt = txt + "Tipus: " + aux[0].firstChild.nodeValue + "<BR>";

				aux = doc[i].getElementsByTagName("PREGUNTA");
				txt = txt + "Pregunta: " + aux[0].firstChild.nodeValue + "<BR>";

				aux = doc[i].getElementsByTagName("DATAI");
				txt = txt + "Data Inici: " + aux[0].firstChild.nodeValue + "<BR>";

				aux = doc[i].getElementsByTagName("DATAF");
				txt = txt + "Data Fi: " + aux[0].firstChild.nodeValue;

				txt = txt + "</p>";
	    	}
	   		contingut.innerHTML = txt;	
		}
	}
	alert("XML carregat! :D");	
}



