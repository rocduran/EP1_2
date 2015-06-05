<?php
    require_once "nusoap-0.9.5/lib/nusoap.php";
    //Funcionalitat del servei
    require_once('servei.php');  
    
    //Generació del WSDL
	//Cal trucar servei_WSDL.php?WSDL per crear,actualitzar (servei.wsdl) i visualitzar i provar el servei
	//Un cop trucat, cal crear manualment el fitxer servei.WSDL (a partir de copy paste del servei generat)
    $server = new soap_server();
    $server->configureWSDL("servei", "urn:servei");
    //Definició de les E/S del servei  
    $server->register("getInfo",
        array("quin" => "xsd:string"),
        array("return" => "xsd:string"),
        "urn:servei",
        "urn:servei#getInfo",
        "rpc",
        "encoded",
        "Retorna un array codificat en json amb el contingut d'un .xml o .txt, segons sigui 'quin'");
      
    $server->service($HTTP_RAW_POST_DATA);
?>
