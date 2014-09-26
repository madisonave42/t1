$(function(){
	
	// 테이블 열 개수
	(function(){
		
		var $table = $('table');
		var colNumber = $('table thead tr th').length;
		
		$('table thead tr th').css({width: ( 100 / colNumber ) + '%' });
		
		
	})();
	
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
