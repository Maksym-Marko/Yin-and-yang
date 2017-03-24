<!DOCTYPE html>
<html lang="en">
<head>	
	<title>Yin and yang</title>

	<meta charset="UTF-8">
	<meta name="author" content="Marko Maksym"/>
	<meta name="keywords" content=""/>
	<meta name="description" content=""/>
	
	<!-- timer -->
	<link rel="stylesheet" href="js/countup/jquery.countup.css">

	<link rel="stylesheet" href="css/style.css?v=<?php echo time(); ?>">
</head>
<body>

	<div class="mx-yay_wrap">
		<div class="mx-yay_yin_header">
			<div class="mx-yay_yin_block">
				<div id="mxYayPoint_Yin" class="mx-yay_point mx-yay_point_main"></div>
			</div>
			<div class="mx-yay_yang_block">
				<div id="mxYayPoint_Yang" class="mx-yay_point mx-yay_point_main"></div>
			</div>
			<div class="mx-yay_info">
				<span id="mx-info" title="Информация">i</span>
				<div class="mx-info_wrap">
					<div class="mx-info_content">
						
						<h1>
							Если я был бы Нео или Синий против Красного
						</h1>

						<p>
							<strong>А если бы на месте Нео оказался ты, какой бы цвет взял?</strong>
						</p>

						<p>
							<strong style="color: #3724E2;">Синюю</strong> – и все останется как было. <br>
							<strong style="color: #E22424;">Красную</strong> – тебе откроется суровая реальность!							
						</p>
						<p>
							Как думаешь, сколько человек выберут сложный путь?
						</p>
						<p>
							Свой выбор сделали уже <strong class="mx-count_All_Points" style="color: #000;"></strong> людей.
						</p>

						<h2>
							Описание:
						</h2>
						<p>
							- Проголосовать можно <strong>один раз</strong>. 
						</p>
						<p>
							- Голосование носит исключительно <strong>шуточный характер</strong>.
						</p>

						<h2>
							Правила:
						</h2>						

						<p>
							- Выбери любую точку cверху на экране (синюю или красную) и перетащи ее на поле. Только после этого ты сможешь увидеть, <strong>сколько людей думают также как и ты</strong>.
						</p>
						<img src="img/screen.jpg" style="width: 90%; margin: 25px auto; display: table;">
						<p style="color: #157908; font-size: 19px; font-weight: bold;">
							Поделись с друзьями :)
						</p>


						<div class="pluso" style="clear: both; float: none; display: table; margin: 10px auto;" data-background="transparent" data-options="big,square,line,horizontal,counter,theme=04" data-services="vkontakte,odnoklassniki,facebook,twitter,google" data-url="http://yin-and-yang/" data-title="Синие против красного" data-description="Текст описаие"></div>
					</div>					
				</div>
			</div>
		</div>

		<div class="mx-yay_yin_field"></div>

		<div class="mx-yay_yin_sistem">
			<div class="mx-yay_count_yin">
				<div class="mx-yay_count_block">
					<div></div>
					<span><span> - </span>?</span>
				</div>				
			</div>
			<div class="mx-yay_count_yang">
				<div class="mx-yay_count_block">
					<div></div>
					<span><span> - </span>?</span>
				</div>
			</div>
			<div class="mx-yay_timer">
				<span id="mx-timer"></span>
			</div>
		</div>
	</div>

	<!-- popup-->
    <div class="mx-popup_wrap">
      <div class="mx-org_info_wrap"><img src="img/close_form.png" alt="" id="MxClose">

        <h2></h2>
        <h3></h3>
        <p></p>

        <div class="pluso" style="display:none;" data-background="transparent" data-options="big,square,line,horizontal,counter,theme=04" data-services="vkontakte,odnoklassniki,facebook,twitter,google" data-url="http://yin-and-yang/" data-title="Синие против красного" data-description="Текст описаие"></div>
		
      </div>
    </div>
    <!-- popup-->

    <!-- Get ip -->
    <?php
		if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
		    $ip = $_SERVER['HTTP_CLIENT_IP'];
		} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
		    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
		} else {
		    $ip = $_SERVER['REMOTE_ADDR'];
		}		
	?>

	<script>
		var ipUser = '<?php echo $ip; ?>';		
	</script>
	<!-- Get ip -->

	<script type="text/javascript" src="js/jquery-1.11.3.js"></script>
	<script type="text/javascript" src="js/jquery-ui.js"></script>
	<script type="text/javascript" src="js/jquery.cookie.js"></script>
	<script type="text/javascript" src="js/common.js?v=<?php echo time();?>"></script>
	
	<!-- Timer -->
	<script src="js/countup/jquery.countup.js"></script>
	<script>
	$( document ).ready( function(){
		$('#mx-timer').countup( {
			start: new Date( 'Sat Mar 18 2017 16:22:46 GMT+0200' )
		} );
	} );
	</script>

	<script type="text/javascript" src="js/pluso.js"></script>

</body>
</html>