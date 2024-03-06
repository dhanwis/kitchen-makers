// SKILLS
;(function ($, window, document, undefined) {
	'use strict';



	$(window).on('scroll', function () {

		// linear style
		if ( $('.skill-wrapper.linear').length ) {
			$('.skill-wrapper.linear .skills').not('.active').each(function () {
				if ($(window).scrollTop() >= $(this).offset().top - $(window).height() * 1) {
					$(this).addClass('active');
					$(this).find('.skill').each(function () {
						var procent = $(this).attr('data-value');
						$(this).find('.active-line').css('width', procent + '%');
						$(this).find('.counter').countTo();
					}); // end each
				} // end if
			}); // end each
		}
		// numerical style
		if ( $('.skill-wrapper.numerical').length ) {
			$('.skill-wrapper.numerical').not('.active').each(function () {
				if ($(window).scrollTop() >= $(this).offset().top - $(window).height() * 1) {
					$(this).addClass('active');
					$(this).find('.skill').each(function () {
						var procent = $(this).attr('data-value');
						$(this).find('.active-line').css('width', procent);
						$(this).find('.skill-value').countTo();
					});
				} // end if
			}); // end each
		} // end else if

		if ( $('.skill-wrapper.circle').length ) {
			$('.skill-wrapper.circle').not('.active').each(function () {
				if ($(window).scrollTop() >= $(this).offset().top - $(window).height() * 1) {
					$(this).addClass('active');
					$(this).find('.skill').each(function () {
						var procent = $(this).attr('data-value');
						var circle = $(this).find('svg .bar');
						var r = circle.attr('r');
						var c = Math.PI*(r*2);
						if ( procent < 0 ) {
							procent = 0;
						}
						if ( procent > 100 ) {
							procent = 100;
						}
						var pct = ((100 - procent) / 100)*c;
						circle.css({strokeDashoffset: pct});
					});
				}
			});
		}
	});

	$(document).ready(function () {
		// Set initial state to hidden using CSS
		$('#btn-to-top, #whatsapp-icon, #instagram-icon, #facebook-icon').hide();
	  
		$(window).scroll(function () {
		  if ($(this).scrollTop() > 300) {
			$('#btn-to-top, #whatsapp-icon, #instagram-icon, #facebook-icon').fadeIn('slow');
		  } else {
			$('#btn-to-top, #whatsapp-icon, #instagram-icon, #facebook-icon').fadeOut('slow');
		  }
		});
	  
		$('#btn-to-top').on('click', function () {
		  $("html, body").animate({ scrollTop: 0 }, 600);
		  return false;
		});
	  });
})(jQuery, window, document);