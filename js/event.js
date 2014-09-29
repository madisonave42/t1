$(function(){
	
	// 편집 테이블 열 개수 계산 & 포커스 border
	(function(){
		
		var $table = $('table');
		var colNumber = $('table thead tr th').length;
		
		$('table thead tr th').css({width: ( 100 / colNumber ) + '%' });
		
		$('.popup_wrap table td').on('focusin', function(){
			$(this).parent('tr').addClass('focus');
		}).on('focusout', function(){
			$(this).parent('tr').removeClass('focus');
		});
		
		
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/* 달력컨트롤 */
	(function(){
		var calendarArea = $('.search_date');
		
		calendarArea.find('input').datepicker({
			duration: 'fast',
			dateFormat: 'yy/mm/dd',
			showMonthAfterYear: true,
			monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
			dayNamesMin: ['일','월','화','수','목','금','토']
		});
		calendarArea.find('.btn_start_cal').on('click',function(e) {
			e.preventDefault();
			calendarArea.find('.start_cal').datepicker('show');
		});
		calendarArea.find('.btn_end_cal').on('click',function(e) {
			e.preventDefault();
			calendarArea.find('.end_cal').datepicker('show');
		});
	})();
	
	
	
	
	
	
	
	
	
	
});
