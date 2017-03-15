<?php
require_once( 'classes/connect-db.php' );

/* Connection database */
$conect = new DBconect();

$sql = "INSERT INTO yin_and_yang_points (ip_user, time, id_point, coord_x, coord_y)
	    VALUES ('122.00.11.11', '14:27', 'mxYayPoint_Yin', '12', '111')";

class InsertData extends DBconect{

	static public function InsertDataPoints( $table, $insertArray, $valueArray ){
		
		$sql = "INSERT INTO " . $table . " (" . implode(",",$insertArray) . ")
	    VALUES (" . implode(",",$valueArray) . ")";

	    self::$mysql->exec($sql);

	}
} 

if( isset( $_POST['id_point'] ) ){
	$ip_user = "'" . $_SERVER['REMOTE_ADDR'] . "'";
	$time = "'" . date( 'H:m:s' ) . "'";
	$id_point = "'" . $_POST['id_point'] . "'";
	$coord_x = "'" . $_POST['coord_x'] . "'";
	$coord_y = "'" . $_POST['coord_y'] . "'";


	$table = 'yin_and_yang_points';
	$insertArray = array('ip_user', 'time', 'id_point', 'coord_x', 'coord_y');
	$valueArray = array($ip_user, $time, $id_point, $coord_x, $coord_y);

	InsertData::InsertDataPoints( $table, $insertArray, $valueArray );
}
else{
	echo '<br><br><br><br><h1 style="text-align: center;">ПРОИЗОШЛА ОШИБКА!(</h1>';
}
