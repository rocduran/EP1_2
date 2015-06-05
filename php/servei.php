<?php
    //Definir la funcionalitat  

function getInfo($quin) {
    if ($quin == "JSON") {
        $json = file_get_contents("../bd/XMLDPFrança2015.txt");
        $resultat = json_decode($json, TRUE);
    }

    if ($quin =="XML"){
        $xml = file_get_contents('../bd/XMLDPEspanya2015.xml');
        $resultat = simplexml_load_string($xml);
        $json = json_encode($resultat);
        $resultat = json_decode($json, TRUE);
    }

    header('Content-type: application/json');

    //Codificar en JSON i retornar petició en un array entenible per JS
    return json_encode($resultat);
}

?>
