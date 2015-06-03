<?php 
include_once("conexio.class.php");

class Usuari{
 //constructor	
 	var $con;
 	function usuari(){
 		$this->con=new DBManager;
 	}

	function inserir($camps){
		if($this->con->conectar()==true){
			return mysql_query("INSERT INTO usuaris (nom, cognom, telefon, adreca, poblacio, codiPostal, pais, dataNaix, email, contrasenya, iban) VALUES ('".$camps[0]."', '".$camps[1]."','".$camps[2]."','".$camps[3]."','".$camps[4]."', '".$camps[5]."','".$camps[6]."','".$camps[7]."','".$camps[8]."','".$camps[9]."', '".$camps[10]."')");
		}
	}
	
	function modificar($camps,$id){
		if($this->con->conectar()==true){
			return mysql_query("UPDATE usuaris SET id = '".$camps[0]."', nom = '".$camps[1]."', cognom = '".$camps[2]."', telefon = '".$camps[3]."', adreca, = '".$camps[4]."', poblacio = '".$camps[5]."', codiPostal = '".$camps[6]."', pais = '".$camps[7]."', dataNaix = '".$camps[8]."', email = '".$camps[9]."',  contrasenya = '".$camps[10]."', email = '".$camps[11]."' WHERE id = ".$id);
		}
	}
	
	function mostrar_usuari($id){
		if($this->con->conectar()==true){
			return mysql_query("SELECT * FROM usuaris WHERE id=".$id);
		}
	}

	function mostrar_usuaris(){
		if($this->con->conectar()==true){
			return mysql_query("SELECT * FROM usuaris ORDER BY id DESC");
		}
	}

	function eliminar($id){
		if($this->con->conectar()==true){
			return mysql_query("DELETE FROM usuaris WHERE id=".$id);
		}
	}
}
?>