<?php
/* Connection point to the database */
class DBconect{
	private $host = 'localhost';
	private $dbname = 'yin-and-yang';
	private $dbuser = 'yin-and-yang';
	private $pass = 'yin-and-yang';
	static protected $mysql = '';
	public function __construct(){
		try{
			self::$mysql = new PDO( 'mysql:host=' . $this->host . ';dbname=' . $this->dbname, $this->dbuser, $this->pass );	
		} catch( PDOException $e ){
			echo 'Подключение не удалось: ' . $e->getMessage();
		}		
	}

	static public function SelectData( $td, $table ){
		$std = self::$mysql->query( 'SELECT ' . $td . ' FROM ' . $table );		
	}
	
	static public function InsertData( $table, $insertArray, $valueArray ){
		$sql = "INSERT INTO " . $table . " (" . $insertArray . ")
	    VALUES (" . $valueArray . ")";

	    self::$mysql->exec($sql);
	}
}