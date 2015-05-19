<?php
require('clases/noticia.class.php');

$noticia_id=$_GET['id'];
$objnoticia=new noticia;
if( $objnoticia->eliminar($noticia_id) == true){
	//Exemple s'ha decidit que després d'eliminar, actualitzar dades
	//Redirigim la petició AJAX a fer un llistat Complert
	header('Location: LlistatComplert.php');

}else{
	//echo "Error";
	header('Location: error.php?codi='+$noticia_id);
}
?>
