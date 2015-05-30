<?php

$ldap = ldap_connect("ldap.uda.ad",389) or die("No hi ha manera de trobar LDAP");


if ($bind = ldap_bind($ldap, "mail=".$_POST["usuari"]."@uda.ad", $_POST["contrasenya"])) {
	$_SESSION['nomUsuari'] = $_POST["usuari"]."@uda.ad";
	echo 1;
} else {
	echo 2;
}

?>