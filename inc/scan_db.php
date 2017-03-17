<?php

require_once( 'classes/connect-db.php' );

/* Creating a successor parameters for data output */
class SelectedID extends DBconect{
	static public function SelectIDPoints( $td = 'id', $table = 'yin_and_yang_points' ){
		$std = self::$mysql->query( 'SELECT ' . $td . ' FROM ' . $table . ' ORDER BY id DESC LIMIT 1' );
		foreach ( $std as $row ) {
			echo $row['id'];
		}
	}
}
/*
*
*	
*	BODY
*
*
*/
/* Connection database */
$conect = new DBconect();
?>

<?php
/* Output from the database id */
SelectedID::SelectIDPoints();
?>