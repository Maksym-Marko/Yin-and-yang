$( document ).ready( function(){

	//$.cookie( 'cookie_ip', '' );

	var disabledDraggable = false;

	init();

	$( '#mxYayPoint_Yin, #mxYayPoint_Yang' ).draggable( {
		disabled: disabledDraggable,
		start: function( event, ui ) {
			$( '.mx-yay_point_main' ).removeClass( 'mx-yay_point_main_transition' );
		},
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

	// Scan DB
	MxScanDB( '../inc/scan_db.php' )	
		
},4000 );


/*--------------------------------------------------------* 
*------------------------- AJAX --------------------------*
* --------------------------------------------------------*/



// ajax load Points
function MxOnloadAllPoints( newUrl, limitSelect ){

	var getSend = 'limit=' + limitSelect;

	$.ajax( {
		url: newUrl,		
		data: getSend,
		type: 'GET',
		beforeSend: function(){},
		complete: function(){},
		success: function( data ){
			$( '.mx-yay_yin_field' ).append( data );
		}
	} );
}

// Insert data
function insertData( pointLeft, pointTop, pointID ){		

	pointInsertData = 	'ip_user='+ ipUser +
						'&id_point=' + pointID +
						'&coord_x=' + pointLeft +
						'&coord_y=' + pointTop;
	$.ajax({
		type: 'POST',
		url: '../inc/insert.php',
		data: pointInsertData,	
		success: function(data) {
			console.log( 'success!)' );                    
		}			
	});

	// Set coocie
	setCookie();
}

// ajax scan db
function MxScanDB( scanUrl ){

	var diffID = '';

	$.ajax( {
		url: scanUrl,
		type: 'GET',
		beforeSend: function(){},
		complete: function(){},
		success: function( data ){
			var lastIdDB = data,
				lastIdDBCookie = $.cookie( 'lastId' );

			if( !$.cookie( 'lastId' ) ){
				$.cookie( 'lastId', lastIdDB );
				console.log( 'id no cookie' );
			} else{
				if( lastIdDB !== lastIdDBCookie ){
					var diffID = lastIdDB - lastIdDBCookie; // difference (LIMIT)

					diffID = 'LIMIT ' + diffID;

					// Select from DB LIMIT = diffID
					MxOnloadAllPoints( '../inc/select.php', diffID );

					// Set cookie
					$.cookie( 'lastId', lastIdDB );

					// Set var
					lastIdDBCookie = $.cookie( 'lastId' );

					// Count points
					setTimeout( function(){
						setCountPoints();
					},500 );					

					console.log( diffID );
				} else{
					console.log( 'No set points' );
				}				
			}
			
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

			// Inactive points
			inactiveMainPoints();

			// Get point user
			setTimeout( function(){
				getPointThisUser();

				// Show all points if is cookie
				$( '.mx-yay_point_load' ).css( 'display', 'block' );

			},400 );			

			console.log( cookiOpen );
			setPopupWindow(
				'Вы уже зделали свой выбор',
				'Спасибо!',
				'Этого окна не будет в программе'
			);

			disabledDraggable = true;

			// Shine points
			actionKey = false;

		} else{
			console.log( 'Open' );

			// Shine points
			actionKey = true;

			$( '.mx-yay_point_main' ).addClass( 'mx-yay_point_main_transition' );

			// setPopupWindow(
			// 	'Голосование открыто',
			// 	'Вы можете выбрать один из двух вариантов',
			// 	'Перетащите кружок в любое место на поле. Синий - добро, красный - зло.'
			// )
		}

		// Load points
		MxOnloadAllPoints( '../inc/select.php', '' );

		// Count points
		setTimeout( function(){
			setCountPoints();
		},400 );
		
	}

	// Drop Down
    function YinAndYangDrop(){

    	if( disabledDraggable == false ){

    		getInfoPoint( '.mx-yay_point' );

	    	// Popup
	    	setPopupWindow(
				'Вы сделали выбор',
				'Спасибо!',
				'Передайте, пожалуйста, эту ссылку своему другу <span style="color: #3f21da;float: none;padding: 10px 0px;font-weight: bold;">http://example.com</span> Пусть и он проголосует :) <br><br> Также Вы можете поделиться страницой в социальной сете.'
			);

	    	// append pluso		
			$( '.pluso' ).css( { 'display': 'block', 'margin-top': '10px' } );

	    	// Insert data
	    	insertData( pointLeft, pointTop, pointID );

	    	// Load points
	    	setTimeout( function(){

	    		// Scan db and select			
				MxScanDB( '../inc/scan_db.php' );
			
	    	},1000 );

	    	setTimeout( function(){

				// Get point user			
				getPointThisUser();

				// Show all points if is cookie
				$( '.mx-yay_point_load' ).css( 'display', 'block' );

	    	},1500 );				

			// Inactive points
			inactiveMainPoints();

			// Shine points
			actionKey = false;

			// Disabled
			disabledDraggable = true;

    	}    	
		
    }

    // get Position Point
    function getInfoPoint( mxPoint ){

    	blockField = $( '.mx-yay_yin_field' ).offset();
		pointOffset = $( '.activePoint' ).offset();

		pointLeft = pointOffset.left - blockField.left;
		pointLeft = parseInt( pointLeft );

		pointTop = pointOffset.top - blockField.top;
		pointTop = parseInt( pointTop );

		pointID = $( '.activePoint' ).attr( 'id' );

		//console.log( pointLeft + ' ' + pointTop + ' ' + pointID );
    	
    }

    // set cookie
    function setCookie(){
    	$.cookie( 'cookie_ip', ipUser );   	
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

    // Count points functions
	function setCountPoints(){
		var countPoint_Yin = $( '.mx-yay_yin_field .mxYayPoint_Yin' ).length;
		var countPoint_Yang = $( '.mx-yay_yin_field .mxYayPoint_Yang' ).length;

		$( '.mx-yay_count_yin .mx-yay_count_block span' ).html( '<span> - </span>' + countPoint_Yin );
		$( '.mx-yay_count_yang .mx-yay_count_block span' ).html( '<span> - </span>' + countPoint_Yang );
	}	

	// Inactive points
	function inactiveMainPoints(){
		$( '.mx-yay_point_main' ).attr( 'style', '' );
		$( '.mx-yay_point_main' ).css( { 'opacity': '0.5', 'cursor': 'default' } );
	}
    
    // Point this user
    function getPointThisUser(){
    	var getCookieIp = $.cookie( 'cookie_ip' );
    	$( '.mx-yay_point_load' ).each( function(){
    		var dataIpUser = $( this ).attr( 'data-ip-user' );
    		if( dataIpUser == getCookieIp ){
    			$( this ).addClass( 'mx-point_this_user' );
    			$( this ).attr( 'title', 'Твой выбор' );
    		}
    		//console.log(dataIpUser);
    	} );

    }

	// Shine points
	keyShine = 'bright';
	brightInterval = setInterval( function(){

		if( actionKey == false ){
			clearInterval( brightInterval );				
		} else{				
			if( keyShine == 'bright'  ){
				$( '.mx-yay_point_main' ).css( {'opacity': 0.5, 'width': '22px', 'height': '22px' } );
				keyShine = 'lost';				
			} else{
				$( '.mx-yay_point_main' ).css( {'opacity': 1, 'width': '20px', 'height': '20px' } );
				keyShine = 'bright';
			}
		}

	},800 );

		
		

		

} );