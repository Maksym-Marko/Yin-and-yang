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
					<span><span> - </span>0</span>
				</div>				
			</div>
			<div class="mx-yay_count_yang">
				<div class="mx-yay_count_block">
					<div></div>
					<span><span> - </span>0</span>
				</div>
			</div>
			<div class="mx-yay_timer">
				<span id="mx-timer" data-millisec-start="1489521128">
					<?php
						$timeStart = 1489521128;
						$timeLive = time();
						$timeDifference = $timeLive - $timeStart;
						echo $timeDifference . '<br>';

						$timeDifferenceKey = gmdate( "d", $timeDifference ) - 1;

						if( $timeDifferenceKey == 0 ){
							echo gmdate( "H:i:s", $timeDifference );
						} else{
							echo gmdate( "d H:i:s", $timeDifference );
						}

						echo $_SERVER["REMOTE_ADDR"];		
					?>
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
	<script type="text/javascript" src="js/jquery-ui.js"></script>
	<script type="text/javascript" src="js/jquery.cookie.js"></script>
	<script type="text/javascript" src="js/common.js"></script>



</body>
</html>