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
				<div id="mxYayPoint_Yin" class="mx-yay_point"></div>
			</div>
			<div class="mx-yay_yang_block">
				<div id="mxYayPoint_Yang" class="mx-yay_point"></div>
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

	<!-- popup-->
    <div class="mx-popup_wrap">
      <div class="mx-org_info_wrap"><img src="img/close_form.png" alt="" id="MxClose">

        <h2></h2>
        <h3></h3>
        <p></p>

      </div>
    </div>
    <!-- popup-->

	<script type="text/javascript" src="js/jquery-1.11.3.js"></script>
	<script src="js/jquery-ui.js"></script>
	<script type="text/javascript" src="js/jquery.cookie.js"></script>

	<script>
		$( document ).ready( function(){

			var disabledDraggable = false;

			init();

			$( '#mxYayPoint_Yin, #mxYayPoint_Yang' ).draggable( {
				disabled: disabledDraggable,
				zIndex: 100,
				drag: function(){
					$( this ).addClass( 'activePoint' );
				},
				containment: '.mx-yay_yin_field'
			} );

			$( '.mx-yay_yin_field' ).droppable({
		        drop: YinAndYangDrop
		    });

/*------------------------- functions ----------------------------*/
	
			// initialized
			function init(){
				var cookiOpen = $.cookie( 'cookie_ip' );

				if( cookiOpen ){
					console.log( cookiOpen );
					setPopupWindow(
						'Вы уже зделали свой выбор',
						'Спасибо!',
						'Этого окна не будет в программе'
					)
				} else{
					console.log( 'Open' );
					setPopupWindow(
						'Голосование открыто',
						'Вы можете выбрать один из двух вариантов',
						'Перетащите кружок в любое место на поле. Синий - добро, красный - зло.'
					)
				}
			}

			// Controller
		    function YinAndYangDrop(){        

		    	getPositionPoint( '.mx-yay_point', event );

		    	setPopupWindow(
					'Вы сделали выбор',
					'Спасибо!',
					'Передайте, пожалуйста, эту ссылку <span style="color: #3f21da;float: none;    padding: 10px 0px;font-weight: bold;">http://example.com</span> своему другу. Пусть и он проголосует :)'
				)

		    	//console.log( pointLeft + ' ' + pointTop );
		    }

		    // get Position Point
		    function getPositionPoint( mxPoint, event ){

		    	blockField = $( '.mx-yay_yin_field' ).offset();
	    		pointOffset = $( '.activePoint' ).offset();

	    		pointLeft = pointOffset.left - blockField.left;
	    		pointTop = pointOffset.top - blockField.top;	    		
		    	
		    }

		    // set cookie
		    function setCookie(){

		    }

		    // Popup window
		    function setPopupWindow( setH2, setH3, setP ){

		    	$( '#MxClose' ).css( 'cursor', 'pointer' );

		    	$( '.mx-popup_wrap h2' ).html( setH2 );
		    	$( '.mx-popup_wrap h3' ).html( setH3 );
		    	$( '.mx-popup_wrap p' ).html( setP );

		    	setTimeout( function(){
					$( '.mx-popup_wrap' ).css( 'display', 'block' );
					$( 'body' ).css( 'overflow', 'hidden' );
		    	},700 );		    	

				$( '#MxClose' ).on( 'click', function(){
					$( '.mx-popup_wrap' ).css( 'display', 'none' );
					$( 'body' ).css( 'overflow', 'auto' );
				});
		    }
		    			
				
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