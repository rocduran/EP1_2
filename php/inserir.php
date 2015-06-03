<?php
if($_POST['quin'] == 'noticies'){
	require('clases/noticia.class.php');

	$tipus = htmlspecialchars(trim($_POST['tipus']));
	$titol = htmlspecialchars(trim($_POST['titol']));
	$contingut = htmlspecialchars(trim($_POST['contingut']));
	$resum = htmlspecialchars(trim($_POST['resum']));

	$objnoticia=new noticia;
	$objnoticia->inserir(array($tipus, $titol, $contingut, $resum));
}

if($_POST['quin'] == 'noticiesUpdate'){
	require('clases/noticia.class.php');

	$id = htmlspecialchars(trim($_POST['id']));
	$tipus = htmlspecialchars(trim($_POST['tipus']));
	$titol = htmlspecialchars(trim($_POST['titol']));
	$contingut = htmlspecialchars(trim($_POST['contingut']));
	$resum = htmlspecialchars(trim($_POST['resum']));

	$objnoticia=new noticia;
	$objnoticia->modificar(array($id, $tipus, $titol, $contingut, $resum), $id);
}

if($_POST['quin'] == 'multimedies'){
	require('clases/multimedia.class.php');

	$tipus = htmlspecialchars(trim($_POST['tipus']));
	$titol = htmlspecialchars(trim($_POST['titol']));
	
	$target_path = "img/";
	$target_path = $target_path . basename( $_POST['url']); 
	$url = $target_path;

	$objmultimedia=new multimedia;
	$objmultimedia->inserir(array($tipus, $titol, $url));
}

if($_POST['quin'] == 'multimediesUpdate'){
	require('clases/multimedia.class.php');

	$id = htmlspecialchars(trim($_POST['id']));
	$tipus = htmlspecialchars(trim($_POST['tipus']));
	$titol = htmlspecialchars(trim($_POST['titol']));
	
	$target_path = "uploads/";
	$target_path = $target_path . basename( $_POST['url']); 
	$url = $target_path;

	$objmultimedia=new multimedia;
	$objmultimedia->modificar(array($id, $tipus, $titol, $url), $id);
}

if($_POST['quin'] == 'usuaris'){
	require('clases/usuari.class.php');

	$nom = $_POST['nom'];
	$cognom = $_POST['cognom'];
	$telf = $_POST['telf'];
	$adress = $_POST['adress'];
	$poblacio = $_POST['poblacio'];
	$codi = $_POST['codis'];
	$pais = $_POST['pais'];
	$born = $_POST['born'];
	$email = $_POST['email'];
	$contrasenya = $_POST['contrasenya'];
	$banc = $_POST['banc'];

	$objUsuari=new usuari;
	$objUsuari->inserir(array($nom, $cognom, $telf, $adress, $poblacio, $codi, $pais, $born, $email, $contrasenya, $banc));

}

?>