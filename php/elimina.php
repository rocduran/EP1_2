<?php
if($_GET['quin'] == 'noticia'){
	require('clases/noticia.class.php');

	$noticia_id=$_GET['id'];
	$objnoticia=new noticia;
	if( $objnoticia->eliminar($noticia_id) == true){

	}else{

	}
}

if($_GET['quin'] == 'multimedia'){
	require('clases/multimedia.class.php');

	$multimedia_id=$_GET['id'];
	$objmultimedia=new multimedia;
	if( $objmultimedia->eliminar($multimedia_id) == true){

	}else{

	}
}

if($_GET['quin'] == 'usuari'){
	require('clases/usuari.class.php');

	$usuari_id=$_GET['id'];
	$objusuari=new usuari;
	if( $objusuari->eliminar($usuari_id) == true){

	}else{

	}
}
?>