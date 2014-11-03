/**
 * 트리뷰 컨트롤
 * @namespace 트리뷰 컨트롤
 * @constructor treeView
 */
var treeView = (function(){
	
	return{
		
		/**
		 * 트리뷰 초기화
		 * 
		 */
		init : function( $treeView ){
			var $treeNode = $treeView.find('.tree_node');
			// 하위노드 체크 - class name 부여
			$treeNode.each(function(i){
				var childNode = $(this).next().is('ul');
				if( childNode ){
					$(this).addClass('has_child');
					$(this).find('.node_icon').addClass('fold');
					$(this).next('ul').addClass('fold');
				}
			});
		},

		/**
		 * 트리뷰 접었다 폈다 함수
		 * 
		 */
		fold : function( event, $treeItem ){
			
			event.preventDefault();
			
			// unfold
			if( $treeItem.data('fold') == 'true' ){
				$treeItem.find('.node_icon').removeClass('fold').addClass('unfold');
				$treeItem.find('.node_name').removeClass('fold').addClass('unfold');
				$treeItem.next('ul').removeClass('fold').addClass('unfold');
				$treeItem.data('fold', 'false');
			} else {
				$treeItem.find('.node_icon').addClass('fold').removeClass('unfold');
				$treeItem.find('.node_name').addClass('fold').removeClass('unfold');
				$treeItem.next('ul').addClass('fold').removeClass('unfold');
				$treeItem.data('fold', 'true');
			}
		},
		
		/**
		 * 트리뷰 VM 선택여부
		 * 
		 */
		selectVm : function( event, $nodeCheck ){
			
			event.preventDefault();
			
			if( $nodeCheck.data('select') == 'false' ){
				$nodeCheck.addClass('on');
				$nodeCheck.find('input').prop('checked', true);
				$nodeCheck.data('select', 'true');
			} else {
				$nodeCheck.removeClass('on');
				$nodeCheck.find('input').prop('checked', false);
				$nodeCheck.data('select', 'false');
			}
		}

	};
	
})();


/**
 * 문서 높이 체크
 * @namespace 문서 높이 체크
 * @constructor
 */
var checkDocHeight = (function(){
	
	return{
		
		/**
		 * 높이 비교 후 클래스 수정
		 * 
		 */
		toggleClass : function( win, doc, html ){
			
			html.removeClass('full_height');
			
			if( win.height() > doc.height() ) {
				html.addClass( 'full_height' );
			} else {
				html.removeClass( 'full_height' );
			}
		}

	};
	
})();

/**
 * date picker year/month/day
 * @namespace date picker
 */

var datePick = (function(){
	
	var id=0;

	return{
		
		onlyYear : function( calendarArea ){
			
			calendarArea.find('input[type=text]').datepicker('destroy');
			calendarArea.find('input[type=text]').val('');
			
			calendarArea.find('input[type=text]').datepicker({
				duration: 'fast',
				dateFormat: 'yy/mm/dd',
				showMonthAfterYear: true,
				monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
				monthNamesShort: ['01','02','03','04','05','06','07','08','09','10','11','12'],
				dayNamesMin: ['일','월','화','수','목','금','토'],
				changeMonth: true,
				changeYear: true,
				showButtonPanel:true,
				
        onClose: function(dateText, inst) {
          var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
          
          var className = $(this).attr('class');
          
          if( className.indexOf('start') >= 0 ){
          	$(this).datepicker('setDate', new Date(year, 0, 1));
          } else {
          	$(this).datepicker('setDate', new Date(year, 11, 31));
          }
        }
        
			});
			
		},
		yearMonth : function( calendarArea ){
			
			calendarArea.find('input[type=text]').datepicker('destroy');
			calendarArea.find('input[type=text]').val('');
			
			calendarArea.find('input[type=text]').datepicker({
				duration: 'fast',
				dateFormat: 'yy/mm/dd',
				showMonthAfterYear: true,
				monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
				monthNamesShort: ['01','02','03','04','05','06','07','08','09','10','11','12'],
				dayNamesMin: ['일','월','화','수','목','금','토'],
				changeMonth: true,
				changeYear: true,
				showButtonPanel:true,
				
        onClose: function(dateText, inst) {
          var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
          var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
          
          var className = $(this).attr('class');
          
          if( className.indexOf('start') >= 0 ){
          	$(this).datepicker('setDate', new Date(year, month, 1));
          } else {
          	var lastDay = datePick.calcLastDay( year, month );
          	$(this).datepicker('setDate', new Date(year, month, lastDay));
          }
        }
			});
			
		},
		fullDate : function( calendarArea ){
			
			calendarArea.find('input[type=text]').datepicker('destroy');
			calendarArea.find('input[type=text]').val('');
			
			calendarArea.find('input[type=text]').datepicker({
				duration: 'fast',
				dateFormat: 'yy/mm/dd',
				showMonthAfterYear: true,
				monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
				monthNamesShort: ['01','02','03','04','05','06','07','08','09','10','11','12'],
				dayNamesMin: ['일','월','화','수','목','금','토'],
				changeMonth: true,
				changeYear: true,
			});
			
		},
		calcLastDay : function(year, month){
			var lastDay;
			
			if( month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11 ){
				
				lastDay = 31;
				
			} else if(month == 1){
				
				if( (year%4 == 0) && (year%100 != 0 ) || (year%400 == 0) ){
					lastDay = 29;
				} else {
					lastDay = 28;
				}
				
			} else {
				
				lastDay = 30;
				
			}
			
			
			return lastDay;
		}
		
	};
	
	
})();






























































































































































/**
 * 스크롤 탭
 * @namespace 
 * @constructor
 */
var topology = (function(){
	
	return{
		
		/**
		 * 토플로지 페이지 스크롤 탭
		 * 
		 */
		initScrollTab : function(el){
			var tabList = el.find('ul');
			var tabItems = el.find('li');
			var btnPrev = el.find('.prev');
			var btnNext = el.find('.next');
			var pageNum = 0;
			var currentPage = 0;
			var itemWidth = tabItems.eq(0).width();
			var pageWidth = itemWidth * 4;
			
			// ajax 완료시마다 실행되기때문에 중복방지를 위한 초기화
			btnPrev.off();
			btnNext.off();
			
			pageNum = Math.floor(tabItems.length / 4);
			
			if (tabItems.length % 4 > 0) {
				pageNum += 1;
			}
			if (pageNum > 1) {
			
				btnPrev.addClass('disable');
			
				tabItems.css({width: itemWidth})
				tabList.css({width: pageWidth * pageNum});
				
				pageNum--; // 0부터 시작하는 인덱스로 사용하기위해 1을 뺌
				
				function updateBtnState() {
					btnPrev.removeClass('disable');
					btnNext.removeClass('disable');
					if (currentPage == 0) {
						btnPrev.addClass('disable');
					}
					if (currentPage == pageNum) {
						btnNext.addClass('disable');
					}
				}
				
				btnPrev.on('click', function() {
					currentPage = currentPage - 1 > 0 ? currentPage - 1 : 0;
					tabList.stop().animate({'margin-left': -(currentPage * pageWidth)});
					updateBtnState();
				});
				btnNext.on('click', function() {
					currentPage = currentPage + 1 > pageNum ? pageNum : currentPage + 1;
					tabList.stop().animate({'margin-left': -(currentPage * pageWidth)});
					updateBtnState();
				});
			
			} else {
				btnPrev.addClass('disable');
				btnNext.addClass('disable');
			}
		}
				
			

	};
	
})();




