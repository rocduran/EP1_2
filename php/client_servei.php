<?php
require_once "nusoap-0.9.5/lib/nusoap.php";
//Acc�s amb WSDL
//penseu en crear l'arxiu WSDL pr�viament.
$client = new nusoap_client("servei.wsdl", true);  
$error = $client->getError();
if ($error) {
    echo "<h2>Constructor error</h2><pre>" . $error . "</pre>";
}

    //Consumir el servei  
$resultat = $client->call("getInfo", array("quin" => $_POST["quin"]));
    // $resultat = $client->call("getInfo", array("quin" => "JSON"));

header('Content-type: application/json');

    //Codificar en JSON i retornar petici� en un array entenible per JS
echo json_encode($resultat);
?>
