$(function(){
	
	$(window).on('load', function(){
		var winHeight = $(window).height();
		$('.container').css({'min-height':winHeight - 67});
	});
	
});
