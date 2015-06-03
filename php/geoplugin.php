<?php


require_once('clases/geoplugin.class.php');

$geoplugin = new geoPlugin();


//locate the IP
$geoplugin->locate();

/* Finding places nearby 
nearby($radius, $maxresults)
$radius (optional: default 10)
$maxresults (optional: default 5)
 */
$nearby = $geoplugin->nearby();

header('Content-type: application/json');
echo json_encode($nearby);
// if ( isset($nearby[0]['geoplugin_place']) ) {

// 	echo "<pre><p>Some places you may wish to visit near " . $geoplugin->city . ": </p>\n";

// 	foreach ( $nearby as $key => $array ) {
		
// 		echo ($key + 1) .":<br />";
// 		echo "\t Place: " . $array['geoplugin_place'] . "<br />";
// 		echo "\t Region: " . $array['geoplugin_region'] . "<br />";
// 		echo "\t Latitude: " . $array['geoplugin_latitude'] . "<br />";
// 		echo "\t Longitude: " . $array['geoplugin_longitude'] . "<br />";
// 	}
// 	echo "</pre>\n";
// }

?>