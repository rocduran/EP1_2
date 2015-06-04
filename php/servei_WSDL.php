<?php
    require_once "nusoap-0.9.5/lib/nusoap.php";
    //Funcionalitat del servei
    require_once('servei.php');  
    
    //Generació del WSDL
	//Cal trucar llibres_WSDL.php?WSDL per crear,actualitzar (llibres.wsdl) i visualitzar i provar el servei
	//Un cop trucat, cal crear manualment el fitxer llibres.WSDL (a partir de copy paste del servei generat)
    $server = new soap_server();
    $server->configureWSDL("llibres", "urn:llibres");
    //Definició de les E/S del servei  
    $server->register("getProd",
        array("categoria" => "xsd:string"),
        array("return" => "xsd:string"),
        "urn:llibres",
        "urn:llibres#getProd",
        "rpc",
        "encoded",
        "Retorna un llistat de productes d'aquesta categoria");
      
    $server->service($HTTP_RAW_POST_DATA);
?>
