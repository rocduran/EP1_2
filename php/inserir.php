<?php
if($_POST['quin'] == 'noticies'){
	require('clases/noticia.class.php');

	$tipus = htmlspecialchars(trim($_POST['tipus']));
	$titol = htmlspecialchars(trim($_POST['titol']));
	$contingut = htmlspecialchars(trim($_POST['contingut']));
	$url = htmlspecialchars(trim($_POST['url']));
	$resum = htmlspecialchars(trim($_POST['resum']));

	$objnoticia=new noticia;
	$objnoticia->inserir(array($tipus, $titol, $contingut, $url, $resum));
}

if($_POST['quin'] == 'noticiesUpdate'){
	require('clases/noticia.class.php');

	$id = htmlspecialchars(trim($_POST['id']));
	$tipus = htmlspecialchars(trim($_POST['tipus']));
	$titol = htmlspecialchars(trim($_POST['titol']));
	$contingut = htmlspecialchars(trim($_POST['contingut']));
	$url = htmlspecialchars(trim($_POST['url']));
	$resum = htmlspecialchars(trim($_POST['resum']));

	$objnoticia=new noticia;
	$objnoticia->modificar(array($id, $tipus, $titol, $contingut, $url, $resum), $id);
}

if($_POST['quin'] == 'multimedies'){
	require('clases/multimedia.class.php');

	$tipus = htmlspecialchars(trim($_POST['tipus']));
	$titol = htmlspecialchars(trim($_POST['titol']));
	$url = htmlspecialchars(trim($_POST['url']));

	$objmultimedia=new multimedia;
	$objmultimedia->inserir(array($tipus, $titol, $url));
}

if($_POST['quin'] == 'multimediesUpdate'){
	require('clases/multimedia.class.php');

	$id = htmlspecialchars(trim($_POST['id']));
	$tipus = htmlspecialchars(trim($_POST['tipus']));
	$titol = htmlspecialchars(trim($_POST['titol']));
	$url = htmlspecialchars(trim($_POST['url']));

	$objmultimedia=new multimedia;
	$objmultimedia->modificar(array($id, $tipus, $titol, $url), $id);
}

?>