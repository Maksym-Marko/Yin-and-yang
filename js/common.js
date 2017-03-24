$( document ).ready( function(){

	//$.cookie( 'cookie_ip', '' );

	var cookiOpen = $.cookie( 'cookie_ip' ), // Cookie valid Open
		disabledDraggable = false; // Disabled draggable		

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
	
	if( cookiOpen ){
		// AJAX functions
			// code ...

		// Scan DB
		MxScanDB( '../inc/scan_db.php' );

	}
		
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

						// Show all points
						$( '.mx-yay_point_load' ).css( 'display', 'block' );

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
				'Ты уже зделал свой выбор',
				'Спасибо!',
				'На данный момент проголосовало <strong class="mx-count_All_Points" style="color: #000;"></strong> людей. <br> <img src="img/neo.png" style="width: 300px; margin: 25px auto; display: table; position: absolute; top: 19px;">'
			);

			disabledDraggable = true;

			// Shine points
			actionKey = false;

		} else{
			console.log( 'Open' );

			// Shine points
			actionKey = true;

			$( '.mx-yay_point_main' ).addClass( 'mx-yay_point_main_transition' );

			setPopupWindow(
				'Помнишь, как в Матрице…?',
				'Выбери таблетку, Нео!',
				'<strong style="color: #3724E2;">Синюю</strong> – и все останется как было. <br> <strong style="color: #E22424;">Красную</strong> – тебе откроется суровая реальность! <br><br> Как думаешь, сколько человек выберут сложный путь? <br> Свой выбор сделали уже <strong class="mx-count_All_Points" style="color: #000;"></strong> людей. Чтобы узнать детальную информацию, сделай и ты выбор! <br><br> <strong>Перетащи кружок в любое место на экране</strong>. <img src="img/screen.jpg" style="width: 90%; margin: 12px auto; display: table;">'
			)
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
				'Ты сделал выбор',
				'Спасибо!',
				'Передай, пожалуйста, эту ссылку другу <span style="color: #3f21da;float: none;padding: 10px 0px;font-weight: bold;">http://example.com</span> Пусть и он проголосует :) <br><br> Также ты можешь поделиться страницой в социальной сети.'
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

			// Set cookie
			cookiOpen = $.cookie( 'cookie_ip' );

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

    	var displayPopup = $( '.mx-popup_wrap' ).css( 'display' );

    	$( '#MxClose' ).css( 'cursor', 'pointer' );

    	$( '.mx-popup_wrap h2' ).html( setH2 );
    	$( '.mx-popup_wrap h3' ).html( setH3 );
    	$( '.mx-popup_wrap p' ).html( setP );

    	setTimeout( function(){
			$( '.mx-popup_wrap' ).css( 'display', 'block' );
			$( 'body' ).css( 'overflow', 'hidden' );

			displayPopup = $( '.mx-popup_wrap' ).css( 'display' );

    	},700 );    		

		$( '#MxClose' ).on( 'click', function(){
			$( '.mx-popup_wrap' ).css( 'display', 'none' );
			$( 'body' ).css( 'overflow', 'auto' );

			displayPopup = $( '.mx-popup_wrap' ).css( 'display' );

		});		

		$( document ).click( function( e ){

			if( displayPopup == 'block' ){
				var popupBlock = $( '.mx-org_info_wrap' );

				if( !popupBlock.is( e.target ) && popupBlock.has( e.target).length === 0 ){
					$( '.mx-popup_wrap' ).css( 'display', 'none' );
					$( 'body' ).css( 'overflow', 'auto' );
					displayPopup = 'none';
				}
			}

		} );
		
    }

    // Count points functions
	function setCountPoints(){

		var countPoint_Yin = $( '.mx-yay_yin_field .mxYayPoint_Yin' ).length;
		var countPoint_Yang = $( '.mx-yay_yin_field .mxYayPoint_Yang' ).length;

		if( cookiOpen ){

			$( '.mx-yay_count_yin .mx-yay_count_block span' ).html( '<span> - </span>' + countPoint_Yin );
			$( '.mx-yay_count_yang .mx-yay_count_block span' ).html( '<span> - </span>' + countPoint_Yang );

			countAllPoints = $( '.mx-yay_yin_field .mx-yay_point_load' ).length;
			$( '.mx-count_All_Points' ).text( countAllPoints );

		} else{

			countAllPoints = $( '.mx-yay_yin_field .mx-yay_point_load' ).length;
			$( '.mx-count_All_Points' ).text( countAllPoints );

		}		

		
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