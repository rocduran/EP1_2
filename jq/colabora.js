window.onload = function() {
	carregarScript();
	associarEvents();
};

function associarEvents(){
	titul = document.getElementById("hcolabOp");
	tanca = document.getElementById("hcolabCl");
	contingut = document.getElementById("colabora");

	paisos = document.getElementById("paisos");
	pais = paisos.options[paisos.selectedIndex].text;

	divMap = document.getElementById("mapa");

	paisos.onchange = initMap;
	
	titul.onclick= mostrarColab;
	tanca.onclick= mostrarColab;

	visualitzant=false;
	map=null;

}

function mostrarColab(){
	if(!visualitzant){
		colabora.style.display="block";	
		tanca.style.display="block";
		visualitzant=true;
	} else{
		colabora.style.display="none";
		tanca.style.display="none";	
		visualitzant=false;
	}
}

function initMap(){//moi's house ! 42.474759, 1.490000 // //paris 48.8667 , 2.33333
	pais = paisos.options[paisos.selectedIndex].text;
	var latitud;
	var longitud;
	var titolEti;
	if(pais == "Andorra"){
		latitud = 42.474759 ;
		longitud = 1.490000;
		titolEti = "Oficina Andorra";
	} 
	if(pais == "França"){
		latitud = 48.8667 ;
		longitud = 2.33333;
		titolEti = "Oficina França";
	}
	var mapProp = {
        zoom: 10,
        center: new google.maps.LatLng(latitud, longitud),
		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(divMap,mapProp);

	var infowindow = new google.maps.InfoWindow({
        map: map,
        position: new google.maps.LatLng(latitud, longitud),
        content: titolEti
      });
}

function carregarScript(){
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=&sensor=false&callback=initMap";
  document.body.appendChild(script);
}



