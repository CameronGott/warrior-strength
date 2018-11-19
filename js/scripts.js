$(document).ready(function() {
    // all custom jQuery will go here
    $('.anim').css("visibility", "hidden");
    $('.rounded-circle').css("visibility", "hidden");


	$(window).scroll(function () {
	    $('.anim').each(function () {
	        var imagePos = $(this).offset().top;
	        var imageHeight = $(this).height() * 3.5;
	        var topOfWindow = $(window).scrollTop();
	        var id = this.id;

	        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {

	        	if(id == 'animationWrapper1' || id == 'animationWrapper3') {
		        	$(this).css("visibility", "visible");
		            $(this).addClass("bounceInLeft");
	            }
	            else if(id == 'animationWrapper2') {
	            	$(this).css("visibility", "visible");
		            $(this).addClass("bounceInRight");
	            }
	        } 
	    });

	    $('.rounded-circle').each(function () {
	    	var imagePos = $(this).offset().top;
	        var imageHeight = $(this).height() * 5;
	        var topOfWindow = $(window).scrollTop();

	        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
	        	$(this).css("visibility", "visible");
		        $(this).addClass("zoomInUp");

	        }

	    });
	});
});