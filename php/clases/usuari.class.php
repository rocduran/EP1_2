<?php 
include_once("conexio.class.php");

class Usuari{
 //constructor	
 	var $con;
 	function usuari(){
 		$this->con=new DBManager;
 	}

	function inserir($campos){
		if($this->con->conectar()==true){
			return mysql_query("INSERT INTO usuaris (id, nom, cognom, telefon, adreca, poblacio, codiPostal, pais, dataNaix, email, contrasenya) VALUES ('".$campos[0]."', '".$campos[1]."','".$campos[2]."','".$campos[3]."','".$campos[4]."', '".$campos[5]."','".$campos[6]."','".$campos[7]."','".$campos[8]."','".$campos[9]."', '".$campos[10]."')");
		}
	}
	
	function modificar($campos,$id){
		if($this->con->conectar()==true){
			return mysql_query("UPDATE usuaris SET id = '".$campos[0]."', nom = '".$campos[1]."', cognom = '".$campos[2]."', telefon = '".$campos[3]."', adreca, = '".$campos[4]."', poblacio = '".$campos[5]."', codiPostal = '".$campos[6]."', pais = '".$campos[7]."', dataNaix = '".$campos[8]."', email = '".$campos[9]."',  contrasenya = '".$campos[10]."' WHERE id = ".$id);
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