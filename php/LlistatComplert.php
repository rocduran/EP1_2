<?php
//Carregar codi de la Classe Client
require('clases/cliente.class.php');
//Inst�ncia de l'objecte
$objCliente=new Cliente;
//Invocar m�tode (Recollir tots els Clients)
$consulta=$objCliente->mostrar_clientes();
//Cal que el primer index sigui 1 (per poder usar each en JS)
for($i = 1; $dades[$i] = mysql_fetch_array($consulta); $i++) ;
array_pop($dades); //Eliminar l'�ltim ja que crea un �ltim element buid
//Enviar capa�alera indicant JSON
header('Content-type: application/json');
//Codificar en JSON i retornar petici� en un array entenible per JS
echo json_encode($dades);
?>