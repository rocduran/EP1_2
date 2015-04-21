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

function initMap(){
	var mapProp = {
  		center:new google.maps.LatLng(42.472, 1.492), //moi's house ! 
  		zoom: 10,
  	mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var mapProp2 = {
    	center: new google.maps.LatLng(48.8667 , 2.33333), //paris
    	zoom:10,
    	mapTypeId: google.maps.MapTypeId.ROADMAP
  	};

	var map = new google.maps.Map(document.getElementById("divMap1"),mapProp);

	var map2 = new google.maps.Map(document.getElementById("divMap2"),mapProp2);

}

function carregarScript()
{
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=&sensor=false&callback=initMap";
  document.body.appendChild(script);
}



