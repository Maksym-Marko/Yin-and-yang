$( document ).ready( function(){

	var disabledDraggable = false;

	init();

	$( '#mxYayPoint_Yin, #mxYayPoint_Yang' ).draggable( {
		disabled: disabledDraggable,
		//zIndex: 100,
		drag: function(){
			$( this ).addClass( 'activePoint' );
		},
		containment: '.mx-yay_yin_field'
	} );

	$( '.mx-yay_yin_field' ).droppable({
        drop: YinAndYangDrop
    });

/*--------------------------------------------------------* 
*------------------------- CYCLE --------------------------*
* --------------------------------------------------------*/

setInterval( function(){
	

	// AJAX functions
		// code ...

	// Count points functions
	setCountPoints();
		
},2000 );


/*--------------------------------------------------------* 
*------------------------- AJAX --------------------------*
* --------------------------------------------------------*/



// ajax load page
function MxOnloadPage( newUrl ){
	$.ajax( {
		url: newUrl,
		type: 'GET',
		beforeSend: function(){},
		complete: function(){},
		success: function( data ){
			$( '.mx-yay_yin_field' ).append( data );
		}
	} );
}











/*--------------------------------------------------------* 
*----------------------- FUNCTIONS -----------------------*
* --------------------------------------------------------*/

	// initialized
	function init(){
		var cookiOpen = $.cookie( 'cookie_ip' );

		if( cookiOpen ){

			console.log( cookiOpen );
			setPopupWindow(
				'Вы уже зделали свой выбор',
				'Спасибо!',
				'Этого окна не будет в программе'
			);

			disabledDraggable = true;

		} else{
			console.log( 'Open' );
			// setPopupWindow(
			// 	'Голосование открыто',
			// 	'Вы можете выбрать один из двух вариантов',
			// 	'Перетащите кружок в любое место на поле. Синий - добро, красный - зло.'
			// )
		}

		// Load points
		MxOnloadPage( '../inc/select.php' );

		// Count points
		setTimeout( function(){
			setCountPoints();
		},400 );
		
	}

	// Controller
    function YinAndYangDrop(){

    	getPositionPoint( '.mx-yay_point' );

    	setPopupWindow(
			'Вы сделали выбор',
			'Спасибо!',
			'Передайте, пожалуйста, эту ссылку своему другу <span style="color: #3f21da;float: none;padding: 10px 0px;font-weight: bold;">http://example.com</span> Пусть и он проголосует :) <br><br> Также Вы можете поделиться страницой в социальной сете.'
		);

    	// append pluso		    	
    	$( '<script type="text/javascript" src="js\/pluso.js"><\/script>' ).appendTo( '.mx-org_info_wrap' );
		$( '<div class="pluso" style="display:none;" data-background="transparent" data-options="big,square,line,horizontal,counter,theme=04" data-services="vkontakte,odnoklassniki,facebook,twitter,google" data-url="http://yin-and-yang/" data-title="Синие против красного" data-description="Текст описаие"></div>' ).appendTo( '.mx-org_info_wrap' );
		$( '.pluso' ).css( { 'display': 'block', 'margin-top': '10px' } );

    	console.log( parseInt( pointLeft ) + ' ' + parseInt( pointTop ) );
    }

    // get Position Point
    function getPositionPoint( mxPoint ){

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

			$( '.mx-org_info_wrap .pluso' ).remove();
			$( '.mx-org_info_wrap script' ).remove();
		});
    }

    // Count points functions
	function setCountPoints(){
		var countPoint_Yin = $( '.mx-yay_yin_field .mxYayPoint_Yin' ).length;
		var countPoint_Yang = $( '.mx-yay_yin_field .mxYayPoint_Yang' ).length;

		$( '.mx-yay_count_yin .mx-yay_count_block span' ).html( '<span> - </span>' + countPoint_Yin );
		$( '.mx-yay_count_yang .mx-yay_count_block span' ).html( '<span> - </span>' + countPoint_Yang );
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