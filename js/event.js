$(function(){

	//gnb
	$('.header_tab .monitoring').on('mouseenter', function(){
		$(this).children('.submenu').show(); 
	});
	$('.header_tab .monitoring').on('mouseleave', function(){
		$(this).children('.submenu').hide();
	});
	
	$('.header_tab .catalogue').on('mouseenter', function(){
		$(this).children('a').addClass('on');
		$(this).children('.submenu').show(); 
	});
	$('.header_tab .catalogue').on('mouseleave', function(){
		$(this).children('a').removeClass('on');
		$(this).children('.submenu').hide();
	});
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
			var chkDateRange = $('.search_date').find('input[type=checkbox]');
			
			var chkYear;
			var chkMonth;
			var chkDay;
			
			chkDateRange.on('change', function(){
				
				chkYear = $('.chk_year').is(':checked');
				chkMonth = $('.chk_month').is(':checked');
				chkDay = $('.chk_day').is(':checked');
				
				if( chkYear ){
					
					datePick.onlyYear(calendarArea);
					
					if(chkYear && !chkMonth && chkDay){
					
						alert('월을 먼저 선택해주세요.');
						$('input[type=checkbox]').prop('checked', false);
					
					} else if( chkYear && chkMonth ) {
						
						datePick.yearMonth(calendarArea);
						
						if( chkYear && chkMonth && chkDay ){
							
							datePick.fullDate(calendarArea);
						
						}
						
					}
					
				} else if( !chkYear && !chkMonth && !chkDay ){
					calendarArea.find('input[type=text]').val('');
				} else {
					alert('연도를 먼저 선택해주세요.');
					$('input[type=checkbox]').prop('checked', false);
				}

			});
			
			calendarArea.find('.start_cal').on('click',function(e) {
				e.preventDefault();
				calendarArea.find('.start_cal').datepicker('show');
				
			});
			
			calendarArea.find('.btn_start_cal').on('click',function(e) {
				e.preventDefault();
				calendarArea.find('.start_cal').datepicker('show');
			});
			
			calendarArea.find('.end_cal').on('click',function(e) {
				e.preventDefault();
				calendarArea.find('.end_cal').datepicker('show');
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
	
	/* Topology scrollable Tab */
	(function() {
		var scroll_tab = $('.scrollable_tab');
		
		if (scroll_tab.length != 0) {
			$(window).on('load', topology.initScrollTab(scroll_tab));
			$(document).on("ajaxStop", function(){
				topology.initScrollTab(scroll_tab);
			});
		}
	
	})();
	
});
