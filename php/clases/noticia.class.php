<?php 
include_once("conexio.class.php");

class Noticia{
 //constructor	
 	var $con;
 	function Noticia(){
 		$this->con=new DBManager;
 	}

	function inserir($campos){
		if($this->con->conectar()==true){
			//print_r($campos);
			//echo "INSERT INTO cliente (id, tipus, titol, contingut, url) VALUES ('".$campos[0]."', '".$campos[1]."','".$campos[2]."','".$campos[3]."','".$campos[4]."')";
			return mysql_query("INSERT INTO noticies (id, tipus, titol, contingut, url) VALUES ('".$campos[0]."', '".$campos[1]."','".$campos[2]."','".$campos[3]."','".$campos[4]."')");
		}
	}
	
	function modificar($campos,$id){
		if($this->con->conectar()==true){
			//print_r($campos);
			return mysql_query("UPDATE noticies SET id = '".$campos[0]."', tipus = '".$campos[1]."', titol = '".$campos[2]."', contingut = '".$campos[3]."', url = '".$campos[4]."' WHERE id = ".$id);
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