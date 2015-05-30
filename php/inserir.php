<?php
// if($_POST['quin'] == 'noticies'){
	require('clases/noticia.class.php');

	$tipus = htmlspecialchars(trim($_POST['tipus']));
	$titol = htmlspecialchars(trim($_POST['titol']));
	$contingut = htmlspecialchars(trim($_POST['contingut']));
	$url = htmlspecialchars(trim($_POST['url']));
	$resum = htmlspecialchars(trim($_POST['resum']));

	$objnoticia=new noticia;
	$objnoticia->inserir(array($tipus, $titol, $contingut, $url, $resum));
	
// }
?>