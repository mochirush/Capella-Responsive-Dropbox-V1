$(document).ready(function(){
	
	
	$('.mobile-search').click(function(e){
		$('#bs-example-navbar-collapse-1.in').collapse('hide');
	});
	
	
	// $('.search-icon.mobile-search.open-search').on('click', function(){
	// 	$(this).hide(); 
	// 	$('.search-icon.mobile-search.close-search').show();
	// 	if($('.navbar-collapse').is(':visible')){
	// 		$('navbar-toggle').trigger('click');
	// 	}
	// });
	// $('.search-icon.mobile-search.close-search').on('click', function(){
	// 	$(this).hide();
	// 	$('.search-icon.mobile-search.open-search').show();
	// });
	
	$('.back-to-top').click(function(e){
		// possibly vary time based on hight of document...
		$('html,body').animate({scrollTop:0},1000);
		e.preventDefault();
	});

	// $('.morenews').click(function(e){
	// 	var newstop = $('.news-mobile').offset().top;
	// 	$('html,body').animate({scrollTop:newstop},1000);
	// 	e.preventDefault();
	// });
	$('a.inactivecoursehead').on('click', function(){
		if(!$(this).hasClass('collapsed')){
			$(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
		} else {
			$(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
		}
	});
	$('.course-info a.visible-xs').on('click', function(){
		if(!$(this).hasClass('collapsed')){
			$(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
		} else {
			$(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
		}
	});

	$('.morenews').on('click', 'a', function(){
		if(!$(this).hasClass('collapsed')){
			$(this).html('MORE NEWS <i class="fa fa-angle-down"></i>');
		} else {
			$(this).html('LESS NEWS <i class="fa fa-angle-up"></i>');
		}
	});

	$('.news-alert a').on('click', function(){
		if(!$(this).hasClass('collapsed')){
			// $(this).html('MORE <i class="fa fa-chevron-down"></i>');
			$(this).show();
			$('.less_btn').show();
		} else {
			// $(this).html('LESS <i class="fa fa-chevron-up"></i>');
			$(this).hide();
		}
	});
	$('.news-alert a.less_btn').on('click', function(){
		// $(this).hide();
		$('.news-alert a').addClass('collapsed').show();
	});
	

	$('.announcement-list a').on('click', function(){
		if(!$(this).hasClass('collapsed')){
			// $(this).html('More <i class="fa fa-angle-down"></i>');
			$(this).show();

		} else {
			// $(this).html('Less <i class="fa fa-angle-up"></i>');
			$(this).hide();
		}
	});
	$('.announcement-list a.less_btn').on('click', function(){
		$('.announcement-list a').addClass('collapsed').show();
	});
	$('.primary-header a.search-icon').on('click', function(e){
		e.preventDefault();
		if(!$(this).hasClass('collapsed')){
			$(this).hide();
		} else {
			$(this).show();
		}
	});//When search icon is clicked the search icon hides.
	$('#search-panel a.close').on('click', function(e){
		e.preventDefault();
		if(!$('.primary-header a.search-icon').is(':visible')){
			$('.primary-header a.search-icon').show();
		}
	}); //When search panel is closed using close button the search icon reappears. 

	$('.navbar-toggle').on('click', function(e){
		e.preventDefault();
		if($(this).hasClass('collapsed')){
			$(this).find('img').attr('src' , 'img/navclose.png');
			$(this).addClass('hamopen');
		} else {
			$(this).find('img').attr('src', 'img/hamburger.png');
			$(this).removeClass('hamopen').addClass('collapsed');
		}
		if($('#mobile-search.in').is(':visible')){
			$('.search-icon.mobile-search').trigger('click');
		}
			
	});
	$('.search-icon.mobile-search').on('click', function(e){
		e.preventDefault();

		if($(this).hasClass('collapsed')){
			$(this).find('img').attr('src' , 'img/close.png');
			$(this).addClass('search-open');
		} else {
			$(this).find('img').attr('src', 'img/search.png');
			$(this).removeClass('search-open');
		}
		if($('.navbar-collapse').is(':visible')){
			$('.navbar-toggle').trigger('click');
	 	}
			
	});
	

	$('.panel-heading .panel-title a').on('click', function(){
		if($(this).hasClass('collapsed')){
			$(this).css({'background' : '#929292', 'color' : '#fff'});
		} else {
			$(this).css({'background' : '#f5f5f5', 'color' : '#333'});
		}
	});
});