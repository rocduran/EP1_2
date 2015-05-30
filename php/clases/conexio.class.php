<?php 
class DBManager{
	var $conect;
  
	var $BaseDatos;
	var $Servidor;
	var $Usuario;
	var $Clave;
	function DBManager(){
		$this->BaseDatos = "mmiret";
		$this->Servidor = "192.168.3.120";
		$this->Usuario = "ep1";
		$this->Clave = "ep1";
	}

	 function conectar() {
		if(!($con=@mysql_connect($this->Servidor,$this->Usuario,$this->Clave))){
			exit();
		}
		if (!@mysql_select_db($this->BaseDatos,$con)){
			exit();
		}
		$this->conect=$con;
		return true;	
	}
}

?>
