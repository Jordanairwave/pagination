var site = {
	init: function() {
	
		//Pageination
		$('ul.page-numbers a').on('click', function(event){
			//Prevent Default Link action
			event.preventDefault();
			
			//Get Page name from data-page attribute
			var pageName = $(this).attr('data-page');
			
			//Add current class to parent li element and remove from others
			$(this).parent().addClass('current').siblings().removeClass('current');
			
			//Show correct page and hide the rest.
			$('#pagination-wrapper .page-wrapper #' + pageName).show().siblings().hide();
		});
		
    }
};

$(document).ready(function(){ site.init(); });