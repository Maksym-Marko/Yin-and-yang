<style>
	.mx-yay_point{
		display: table;
		border-radius: 50%;
		-moz-border-radius: 50%;
		-o-border-radius: 50%;
		-webkit-border-radius: 50%;
		cursor: pointer;
	}
	.mxYayPoint_Yin{
		background-color: #3724E2;
	}
	.mxYayPoint_Yang{
		background-color: #E22424;
	}
	.mx-yay_point_load{
		position: absolute;
		width: 10px;
		height: 10px;
		display: none;
	}
		
</style>
<?php

require_once( 'classes/connect-db.php' );

/* Creating a successor parameters for data output */
class SelectedData extends DBconect{

	static public function SelectDataPoints( $td, $table, $limit ){
		$std = self::$mysql->query( 'SELECT ' . $td . ' FROM ' . $table . ' ORDER BY id DESC ' . $limit );
		foreach ( $std as $row ) {
			?>
				

				<div style="left: <?php echo $row['coord_x']; ?>px; top: <?php echo $row['coord_y']; ?>px;" id="<?php echo $row['id_point'] . '_' . $row['id']; ?>" class="mx-yay_point_load mx-yay_point <?php echo $row['id_point']; ?>" data-ip-user="<?php echo $row['ip_user']; ?>"></div>


			<?
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


$limit = $_GET['limit'];


/* Output from the database id */
SelectedData::SelectDataPoints( $td = '*', $table = 'yin_and_yang_points', $limit );
?>