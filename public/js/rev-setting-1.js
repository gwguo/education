<<<<<<< HEAD

=======
>>>>>>> 321b91aef80bb3cf441d1dd5651ce2472264e9f7
$(document).ready(function() {

	if ($.fn.cssOriginal!=undefined)
		$.fn.css = $.fn.cssOriginal;

		var api = $('#revolution-slider').revolution(
			{
				delay:9000,
				startwidth:960,
				startheight:450,
	
				onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off
	
				thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
				thumbHeight:50,
				thumbAmount:3,
	
				hideThumbs:10,
				navigationType:"none",				// bullet, thumb, none
				navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none
	
				navigationStyle:"round",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom
	
	
				navigationHAlign:"center",				// Vertical Align top,center,bottom
				navigationVAlign:"bottom",					// Horizontal Align left,center,right
				navigationHOffset:30,
				navigationVOffset:-40,
	
				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,
	
				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,
	
				touchenabled:"on",						// Enable Swipe Function : on/off
	
	
				stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
				stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
	
				hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
				hideAllCaptionAtLilmit:0,				// Hide all The Captions if Width of Browser is less then this value
				hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value
	
	
				fullWidth:"on",
	
				shadow:0								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)
	
			});


			// TO HIDE THE ARROWS SEPERATLY FROM THE BULLETS, SOME TRICK HERE:
			// YOU CAN REMOVE IT FROM HERE TILL THE END OF THIS SECTION IF YOU DONT NEED THIS !
			api.bind("revolution.slide.onloaded",function (e) {


			$('.tparrows').each(function() {
				var arrows=$(this);

				var timer = setInterval(function() {

				if (arrows.css('opacity') == 1 && !$('.tp-simpleresponsive').hasClass("mouseisover"))
				  arrows.fadeOut(100);
				},0);
			})

			$('.tp-simpleresponsive, .tparrows').hover(function() {
				$('.tp-simpleresponsive').addClass("mouseisover");
				$('body').find('.tparrows').each(function() {
					$(this).fadeIn(100);
				});
				}, function() {
					if (!$(this).hasClass("tparrows"))
						$('.tp-simpleresponsive').removeClass("mouseisover");
				})
			});
			// END OF THE SECTION, HIDE MY ARROWS SEPERATLY FROM THE BULLETS

});
