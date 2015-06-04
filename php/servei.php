<?php
    //Definir la funcionalitat  

// function getInfo($categoria) {
    $categoria = "XML";
    if ($categoria == "JSON") {
        $resultat = file_get_contents("../bd/XMLDPFrança2015.txt");
    }

    if ($categoria =="XML"){
        $xml = file_get_contents('../bd/XMLDPEspanya2015.xml');
        $resultat = simplexml_load_string($xml);
        $json = json_encode($resultat);
        $resultat = json_decode($json, TRUE);
    }


    header('Content-type: application/json');

    //Codificar en JSON i retornar petició en un array entenible per JS
    echo json_encode($resultat);
// }

?>
