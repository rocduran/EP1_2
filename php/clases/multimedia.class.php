<?php 
include_once("conexio.class.php");

class Multimedia{
 //constructor	
 	var $con;
 	function Multimedia(){
 		$this->con=new DBManager;
 	}

	function inserir($campos){
		if($this->con->conectar()==true){
			return mysql_query("INSERT INTO elements_mm (id, tipus, titol, desc, url) VALUES ('".$campos[0]."', '".$campos[1]."','".$campos[2]."','".$campos[3]."','".$campos[4]."')");
		}
	}
	
	function modificar($campos,$id){
		if($this->con->conectar()==true){
			//print_r($campos);
			return mysql_query("UPDATE elements_mm SET id = '".$campos[0]."', tipus = '".$campos[1]."', titol = '".$campos[2]."', desc = '".$campos[3]."', url = '".$campos[4]."' WHERE id = ".$id);
		}
	}
	
	function mostrar_multimedia($id){
		if($this->con->conectar()==true){
			return mysql_query("SELECT * FROM elements_mm WHERE id=".$id);
		}
	}

	function mostrar_multimedies(){
		if($this->con->conectar()==true){
			return mysql_query("SELECT * FROM elements_mm ORDER BY id DESC");
		}
	}

	function eliminar($id){
		if($this->con->conectar()==true){
			return mysql_query("DELETE FROM elements_mm WHERE id=".$id);
		}
	}
}
?>