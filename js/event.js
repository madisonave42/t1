$(function(){
	
	$(window).on('load', function(){
		console.log(1);
		var winHeight = $(window).height();
		$('.container').css({'min-height':winHeight - 67});
	});

});
