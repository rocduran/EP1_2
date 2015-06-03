<?php 
include_once("conexio.class.php");

class Multimedia{
 //constructor	
 	var $con;
 	function Multimedia(){
 		$this->con=new DBManager;
 	}

	function inserir($camps){
		if($this->con->conectar()==true){
			return mysql_query("INSERT INTO elements_mm (tipus, titol, url) VALUES ('".$camps[0]."', '".$camps[1]."','".$camps[2]."')");
		}
		
	}
	
	function modificar($camps,$id){
		if($this->con->conectar()==true){
			//print_r($camps);
			return mysql_query("UPDATE elements_mm SET id = '".$camps[0]."', tipus = '".$camps[1]."', titol = '".$camps[2]."', url = '".$camps[3]."' WHERE id = ".$id);
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