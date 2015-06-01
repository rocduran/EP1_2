<?php
session_start();
switch ($_POST["quin"]){
	case "login":
		$ldap = ldap_connect("ldap.uda.ad",389) or die("No hi ha manera de trobar LDAP");

		if ($bind = ldap_bind($ldap, "mail=".$_POST["usuari"]."@uda.ad", $_POST["contrasenya"])) {
			$_SESSION['usuari']  = $_POST["usuari"]."@uda.ad";
			$ok = "true";
		} else {
			$ok = "false";
		}
		header('Content-type: application/json');
		echo json_encode($ok);
	break;

	case "load":
		if ($_SESSION['usuari']){ //Si existeix la variable de sessio 'usuari
			$resultat[0] = true;
			$resultat[1] = $_SESSION['usuari'];
		} else {
			$resultat[0] = false;
			$resultat[1] = null;
		}
		header('Content-type: application/json');
		echo json_encode($resultat);
	break;

	case "logout":
		session_destroy();
	break;
}
?>