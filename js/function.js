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
			// 하위노드 체크
			$treeNode.each(function(i){
				var childNode = $(this).next().is('ul');
				if( !childNode ){
					$(this).find('.tree_item').addClass('no_child');
				}
			});
		},

		/**
		 * 트리뷰 접었다 폈다 함수
		 * 
		 */
		fold : function( event, $treeItem ){
			
			event.preventDefault();
			
			if( $treeItem.data('fold') == 'false' ){
				$treeItem.addClass('fold');
				$treeItem.parents('.tree_node').next('ul').addClass('fold');
				$treeItem.data('fold', 'true');
			} else {
				$treeItem.removeClass('fold');
				$treeItem.parents('.tree_node').next('ul').removeClass('fold');
				$treeItem.data('fold', 'false');
			}
		},
		
		/**
		 * 트리뷰 VM 선택여부
		 * 
		 */
		selectVm : function( event, $treeItem ){
			
			event.preventDefault();
			
			if( $treeItem.data('select') == 'false' ){
				$treeItem.addClass('on');
				$treeItem.find('input').prop('checked', true);
				$treeItem.data('select', 'true');
			} else {
				$treeItem.removeClass('on');
				$treeItem.find('input').prop('checked', false);
				$treeItem.data('select', 'false');
			}
		}

	};
	
})();