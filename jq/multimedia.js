window.onload = function () {

  //sessionStorage
  
  //Mirem si estem a visualitzador.html per llegir el valor de tipusM i carregar el contingut dins l'HTML
  if  (/visualitzador/.test(self.location.href)){
  	init();
  }
  associaDOMevents();  

};

//Associar events
function associaDOMevents() {

	//Al fer click a un Arxiu de multimedia.html es guarda el tipus que es a SessionStorage
	$(".video").click(lsVideo)
	$(".audio").click(lsAudio)
	$(".article").click(lsArticle)
}

function init() {
	//Careguem el tipus de contingut segons sigui la variable tipusM de SessionStorage
	document.getElementById("contingut").innerHTML = "";
	if (sessionStorage["tipusM"]) {
		var tipus = sessionStorage.getItem('tipusM');
		if (tipus == "video") {
			document.getElementById("contingut").innerHTML += "<video poster\"http://www.html5rocks.com/en/tutorials/video/basics/star.png\" controls><source src=\"http://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.mp4\" type='video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\"'/></video><video poster=\"http://www.html5rocks.com/en/tutorials/video/basics/star.png\" controls><source src=\"http://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.webm\" type='video/webm; codecs=\"vp8, vorbis\"' /></video><video poster=\"http://www.html5rocks.com/en/tutorials/video/basics/star.png\" controls><source src=\"http://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.ogv\" type='video/ogg; codecs=\"theora, vorbis\"' /></video>"
		}
		if (tipus == "audio") {
			document.getElementById("contingut").innerHTML += "<audio controls><source src=\"http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.mp4\" type='audio/mp4' /><source src=\"http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga\" type='audio/ogg; codecs=vorbis' /><p>Your user agent does not support the HTML5 Audio element.</p></audio>"
		}
		if (tipus == "article") {
			document.getElementById("contingut").innerHTML += "<embed src=\"http://www.estadistica.ad/serveiestudis/publicacions/Publicacions/Andorra%20en%20Xifres_ang.pdf\" width=\"500\" height=\"375\">"
		}
		
	}
}

//Funcions que guarden la variable tipusM amb el seu valor a SessionStorage
function lsVideo () {
	sessionStorage.setItem('tipusM', "video");
}

function lsAudio () {
	sessionStorage.setItem('tipusM', "audio");
}
function lsArticle () {
	sessionStorage.setItem('tipusM', "article");
}