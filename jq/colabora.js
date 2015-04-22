window.onload = function() {
	carregarScript();
	associarEvents();
};

function associarEvents(){
	titul = document.getElementById("hcolabOp");
	tanca = document.getElementById("hcolabCl");
	contingut = document.getElementById("colabora");
	
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
	var mapProp = {
        zoom: 15,
        center: new google.maps.LatLng(42.474759, 1.490000),
		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var mapProp2 = {
 		zoom: 15,
        center: new google.maps.LatLng(48.8667 , 2.33333),
		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP
  	};

	var map = new google.maps.Map(document.getElementById("divMap1"),mapProp);

	var oficina1 = new google.maps.LatLng(57.0442, 9.9116); // marcador mapa sanju
  	var ofi1Mark = new google.maps.Marker({
      position: oficina1,
      map: map,
      title:"Oficina Sant Julia"
  	});

	var map2 = new google.maps.Map(document.getElementById("divMap2"),mapProp2);

}

function carregarScript()
{
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=&sensor=false&callback=initMap";
  document.body.appendChild(script);
}



