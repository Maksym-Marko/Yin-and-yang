<!DOCTYPE html>
<html lang="en">
<head>	
	<title>Yin and yang</title>

	<meta charset="UTF-8">
	<meta name="author" content="Marko Maksym"/>
	<meta name="keywords" content=""/>
	<meta name="description" content=""/>

	<link rel="stylesheet" href="css/style.css">
</head>
<body>

	<div class="mx-yay_wrap">
		<div class="mx-yay_yin_header">
			<div class="mx-yay_yin_block">
				<div id="mxYayPoint_Yin"></div>
			</div>
			<div class="mx-yay_yang_block">
				<div id="mxYayPoint_Yang"></div>
			</div>
			<div class="mx-yay_info">
				1
			</div>
		</div>

		<div class="mx-yay_yin_field"></div>

		<div class="mx-yay_yin_sistem">
			<div class="mx-yay_count_yin">
				<div class="mx-yay_count_block">
					<div></div>
					<span><span> - </span>2344</span>
				</div>				
			</div>
			<div class="mx-yay_count_yang">
				<div class="mx-yay_count_block">
					<div></div>
					<span><span> - </span>1353</span>
				</div>
			</div>
			<div class="mx-yay_timer">
				<span>
					00:32:12:02
				</span>
			</div>
		</div>
	</div>
	
	



	<script type="text/javascript" src="js/jquery-1.11.3.js"></script>
	<script src="js/jquery-ui.js"></script>
	<script type="text/javascript" src="js/jquery.cookie.js"></script>

	<script>
		$( document ).ready( function(){

			$( "#mxYayPoint_Yin, #mxYayPoint_Yang" ).draggable( {

			} );


			var cookName = $.cookie( 'cook_background' );
				
			// if( cookName ){
			
			// 	$( '.cook' ).css( 'background', cookName );
			
			// } 				
			
			// set cookie
			
			//$( '.cook' ).click( function(){
			
				//$( this ).css( 'background', 'gray' );	
				
				$.cookie( 'cook_background', 'gray' );
			
			//} );

			//alert( cookName );

		} );
	</script>


</body>
</html>