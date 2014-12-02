$(document).ready(function(){
	
	/* Alert Window Width */

	/*var width = $(window).width();
	alert(width)*/

	/* Primary Navigation */

	$('.dropdown').hover(function(){
		$(this).find('.dropdown-menu').fadeToggle();
		if($('.learner-profile-dropdown').is(':visible')){
			$('.learner-profile-dropdown').fadeOut();
			$('.learner-profile-top .salutation .user-profile-arrow').toggleClass('up');
		};
	});
    
	$('.mobile-search').click(function(e){
		$('#bs-example-navbar-collapse-1.in').collapse('hide');
	});

	// Mobile Navigation

	$('.mobilenavbar .mobileNav').click(function(){
		$('.mobile-navigation').slideToggle();
		$(this).toggleClass('close-mobile');
	});

	// Prevent Touch click on mobile devices 

	$('.preventTouchClick').click(function(e){
		e.preventDefault();
	});
	
	// User Profile 

	var iPhonePortrait = window.matchMedia( "(max-width: 320px)" );
	var iPhoneLandscape = window.matchMedia( "(max-width: 568px)" );
	var iPadPortrait = window.matchMedia( "(max-width: 768px)" );
	
	if(iPhonePortrait.matches){
		$('.learner-profile-top .salutation, .learner-profile-top .learner-portrait').click(function(){
			$('.learner-profile-dropdown').slideToggle();
			$('.learner-profile-top .salutation .user-profile-arrow').toggleClass('up');
			console.log('iPhone - Portrait - slideToggle');
			return false;
		})
		// Email Icon Link
		$('.email-icon').click(function(){
			window.location.href = 'http://media.capella.edu/NonCourseMedia/iGuide-responsive/_devCA/learnermail.html';
		});	
	} else if(iPhoneLandscape.matches){
		$('.learner-profile-top .salutation, .learner-profile-top .learner-portrait').click(function(){
			$('.learner-profile-dropdown').slideToggle();
			$('.learner-profile-top .salutation .user-profile-arrow').toggleClass('up');
			console.log('iPhone - Landscape - slideToggle');
			return false;
		})
		// Email Icon Link
		$('.email-icon').click(function(){
			window.location.href = 'http://media.capella.edu/NonCourseMedia/iGuide-responsive/_devCA/learnermail.html';
		});	
	} else if(iPadPortrait.matches){
		$('.learner-profile-top .salutation, .learner-profile-top .learner-portrait').click(function(){
			$('.learner-profile-dropdown').slideToggle();
			$('.learner-profile-top .salutation .user-profile-arrow').toggleClass('up');
			console.log('iPad - Portrait - slideToggle');
			return false;
		})
	} else {
		// Desktop 
		$('.learner-profile-top .salutation, .learner-profile-top .learner-portrait').click(function(){
			$('.learner-profile-dropdown').fadeToggle();
			$('.learner-profile-top .salutation .user-profile-arrow').toggleClass('up');
			console.log('Desktop');
			return false;
		})
	}
	
	// Close User Profile if User Clicks off Dropdown

    $('body').click(function(){
    	if($('.learner-profile-dropdown').is(':visible')){
    		$('.learner-profile-dropdown').fadeOut();
        	$('.learner-profile-top .salutation .user-profile-arrow').toggleClass('up');
        	return false;
    	}
    });

	// Search Panel

	$('.search-this').click(function(){
		$('#search-panel.search-panel').slideToggle();
		$(this).toggleClass('close-this');
	});

	// Upcoming Courses

	$('.upcoming-courses .course-panel .course-section .courses-arrow.1, .upcoming-courses .course-panel .course-section .course-dropdown1').click(function(e){
		$('.upcomingcourse.1').slideToggle();
		$('.upcoming-courses .course-panel .course-section .courses-arrow.1').toggleClass('up');
		e.preventDefault();
	});

	$('.upcoming-courses .course-panel .course-section .courses-arrow.2, .upcoming-courses .course-panel .course-section .course-dropdown2').click(function(e){
		$('.upcomingcourse.2').slideToggle();
		$('.upcoming-courses .course-panel .course-section .courses-arrow.2').toggleClass('up');
		e.preventDefault();
	});

	// Back to Top
	
	$('.back-to-top').click(function(e){
		// possibly vary time based on hight of document...
		$('html,body').animate({scrollTop:0},1000);
		e.preventDefault();
	});
});