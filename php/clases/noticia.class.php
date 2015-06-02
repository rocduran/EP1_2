<?php 
include_once("conexio.class.php");

class Noticia{
 //constructor	
 	var $con;
 	function Noticia(){
 		$this->con=new DBManager;
 	}

	function inserir($camps){
		if($this->con->conectar()==true){
			return mysql_query("INSERT INTO noticies (tipus, titol, contingut, resum) VALUES ('".$camps[0]."','".$camps[1]."','".$camps[2]."','".$camps[3]."')");
		}
	}
	
	function modificar($camps,$id){
		if($this->con->conectar()==true){
			return mysql_query("UPDATE noticies SET id = '".$camps[0]."', tipus = '".$camps[1]."', titol = '".$camps[2]."', contingut = '".$camps[3]."', resum ='".$camps[4]."' WHERE id = ".$id);
		}
	}
	
	function mostrar_noticia($id){
		if($this->con->conectar()==true){
			return mysql_query("SELECT * FROM noticies WHERE id=".$id);
		}
	}

	function mostrar_noticies(){
		if($this->con->conectar()==true){
			return mysql_query("SELECT * FROM noticies ORDER BY id DESC");
		}
	}

	function eliminar($id){
		if($this->con->conectar()==true){
			return mysql_query("DELETE FROM noticies WHERE id=".$id);
		}
	}
}
?>