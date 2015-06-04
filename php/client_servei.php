<?php
    require_once "nusoap-0.9.5/lib/nusoap.php";
    //Accés amb WSDL
	//penseu en crear l'arxiu WSDL prèviament.
    $client = new nusoap_client("servei.wsdl", true);  
    $error = $client->getError();
    if ($error) {
        echo "<h2>Constructor error</h2><pre>" . $error . "</pre>";
    }
    
    //Consumir el servei  
    $result = $client->call("getProd", array("categoria" => "llibres"));
      
	//Presentació de resultats (o missatges d'error)  
    if ($client->fault) {
        echo "<h2>Fault</h2><pre>";
        print_r($result);
        echo "</pre>";
    }
    else {
        $error = $client->getError();
        if ($error) {
            echo "<h2>Error en client</h2><pre>" . $error . "</pre>";
        }
        else {
            echo "<h2>Llibres</h2><pre>";
            echo $result;
            echo "</pre>";
        }
    }
?>
