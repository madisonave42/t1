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