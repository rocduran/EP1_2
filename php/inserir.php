<?php
if($_GET['quin'] == 'noticies'){
	require('clases/noticia.class.php');

	$titul = $_GET['titul'];
	$tipus = $_GET['tipus']
	$contingut = $_GET['contingut']
	$url = $_GET['url']
	$resum = $_GET['resum']

	$objnoticia=new noticia;

	if($objnoticia->inserir(array($tipus, $titul, $contingut, $url, $resum)) == true){
		echo 'Datos guardados';
	else {
		echo 'ERROR';
	}
}
?>