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
		
		if( $('div').is('.search_date') ){
			
			var calendarArea = $('.search_date');
			
			calendarArea.find('input').datepicker({
				duration: 'fast',
				dateFormat: 'yy/mm/dd',
				showMonthAfterYear: true,
				monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
				monthNamesShort: ['01','02','03','04','05','06','07','08','09','10','11','12'],
				dayNamesMin: ['일','월','화','수','목','금','토'],
				changeMonth: true,
				changeYear: true
			});
			calendarArea.find('.btn_start_cal').on('click',function(e) {
				e.preventDefault();
				calendarArea.find('.start_cal').datepicker('show');
			});
			calendarArea.find('.btn_end_cal').on('click',function(e) {
				e.preventDefault();
				calendarArea.find('.end_cal').datepicker('show');
			});
		}
		
	})();
	
	/* tree view */
	
	(function(){
		
		// 트리뷰 DOM, Data 로딩 - 일반, ajax
		
		$(window).load(function(){
			if( $('ul').is('.tree_view') ){
				$('.tree_node').data('fold', 'true');
				$('.tree_node .node_check').data('select', 'false');
				treeView.init( $('.tree_view') );
			}
		});
		$(document).ajaxComplete(function(){
			if( $('ul').is('.tree_view') ){
				$('.tree_node').data('fold', 'true');
				$('.tree_node .node_check').data('select', 'false');
				treeView.init( $('.tree_view') );
			}
		});
		
		$('body').on('click', '.node_icon', function( event ){
			if( $(this).parent('.tree_node').is('.has_child') ){
				treeView.fold( event, $(this).parent('.tree_node') );
			} else {
				event.preventDefault();
			}
		});
		
		$('body').on('click', '.node_name', function( event ){
			if( $(this).parent('.tree_node').is('.has_child') ){
				treeView.fold( event, $(this).parent('.tree_node') );
			} else {
				event.preventDefault();
			}
		});
		
		
		$('body').on('click', '.node_check', function( event ){
			treeView.selectVm( event, $(this) );
		});
		
	})();
	
	/* tree view area init */
	
	(function(){
		
		var max = 0;
				
		if( $('ul').is( '.tree_view' ) ){
			$('.node_name').each(function(i){
				var currentNodeName = $(this).outerWidth();
				if( max < currentNodeName ){
					max = currentNodeName;
				}
			});
			$('.tree_node').css({width : max + 60});
		}
		
	})();
	
	/* 페이지 높이체크 (lnb 높이 조절용) */
	(function(){
		var win = $( window );
		var doc = $( 'body' );
		var html = $( 'html' );
	
		$( window ).on( 'load resize', function(){
			checkDocHeight.toggleClass( win, doc, html);
		});
		$( document ).ajaxComplete( function(){
			checkDocHeight.toggleClass( win, doc, html);
		});
		
	})();
	
});
