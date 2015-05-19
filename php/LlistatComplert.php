<?php
//Carregar codi de la Classe Client
require('clases/noticia.class.php');
//Instància de l'objecte
$objnoticia=new noticia;
//Invocar mètode (Recollir tots els Clients)
$consulta=$objnoticia->mostrar_noticies();
//Cal que el primer index sigui 1 (per poder usar each en JS)
for($i = 1; $dades[$i] = mysql_fetch_array($consulta); $i++) ;
array_pop($dades); //Eliminar l'últim ja que crea un últim element buid
//Enviar capaçalera indicant JSON
header('Content-type: application/json');
//Codificar en JSON i retornar petició en un array entenible per JS
echo json_encode($dades);
?>