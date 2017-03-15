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

$table = 'yin_and_yang_points';
$insertArray = array('ip_user', 'time', 'id_point', 'coord_x', 'coord_y');
$valueArray = array("'122.00.11.11'", "'15:50'", "'mxYayPoint_Yin'", "'134'", "'54'");

InsertData::InsertDataPoints( $table, $insertArray, $valueArray );