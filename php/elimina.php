<?php
require('clases/cliente.class.php');

$cliente_id=$_GET['id'];
$objCliente=new Cliente;
if( $objCliente->eliminar($cliente_id) == true){
	//Exemple s'ha decidit que despr�s d'eliminar, actualitzar dades
	//Redirigim la petici� AJAX a fer un llistat Complert
	header('Location: LlistatComplert.php');

}else{
	//echo "Error";
	header('Location: error.php?codi='+$cliente_id);
}
?>
