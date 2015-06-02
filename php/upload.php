<?php
// En versiones de PHP anteriores a 4.1.0, $HTTP_POST_FILES debe utilizarse en lugar
// de $_FILES.

$uploaddir = '../img/';
$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);

move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile);

header('Location: ' . '../admin.html');
?> 