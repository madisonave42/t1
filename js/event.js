$(function(){
	
	$(window).on('load', function(){
		console.log(1);
		var winHeight = $(window).height();
		$('.container').css({'min-height':winHeight - 67});
	});

	/* 팝업 탭 기능 */
	(function(){
		var popTabArea = $( '.popup_tab_area > section' );
		var popTabBtns = $( '.popup_section_heading a' );
		popTabBtns.on( 'click', function(e){
			e.preventDefault();
			popTabArea.removeClass('on');
			$( $( this ).attr( 'href' ) ).addClass('on');
		});
	})();
	
});
