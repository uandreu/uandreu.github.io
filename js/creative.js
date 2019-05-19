(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
	
	$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

			// When elemened is focused, some mobile browsers in some cases zoom in
			// It looks not nice, so we disable it:
			callbacks: {
				beforeOpen: function() {
					if($(window).width() < 700) {
						this.st.focus = false;
					} else {
						this.st.focus = '#name';
					}
				}
			}
		});
	});

})(jQuery); // End of use strict

// Mini JS tidbits

/** Quotes **/

var day = new Date().getDay();

if (day === 0) {
	document.getElementById('quotes').innerHTML = '"All right, I\'ve been thinking. When live gives you lemons? Don\'t make lemonade. '
					+ 'Make life take the lemons back! Get mad! \'I don\'t want your damn lemons! '
					+ 'What am I supposed to do with these?\' Demand to see life\'s manager! '
					+ 'Make life rue the day it thought it could give Cave Johnson lemons! '
					+ 'Do you know who I am? I\'m the man who\'s going to burn your house down! With the lemons! '
					+ 'I\'m going to get my engineers to invent a combustible lemon that burns your house down!" - Cave Johnson';
} else
if (day === 1) {
	document.getElementById('quotes').innerHTML = '"I cock my hat as I please. - Walt Whitman"';
} else
if (day === 2) {
	document.getElementById('quotes').innerHTML = '"Don\'t believe everything you hear on the internet. - Abraham Lincoln"';
} else
if (day === 3) {
	document.getElementById('quotes').innerHTML = '"Having a family doesn’t mean that you stop being an individual. '
					+ 'You know the best thing you can do for the people that depend on you? Be honest with them, ' 
					+ 'even if it means setting them free" - Mr. Meeseeks';
} else
if (day === 4) {
	document.getElementById('quotes').innerHTML = '"Bad biscuits make the baker broke, bro." - Jake the Dog';
} else
if (day === 5) {
	document.getElementById('quotes').innerHTML = '"We do have a lot in common. The same earth, the same air, '
					+ 'the same sky. Maybe if we started looking at what\'s the same, instead of looking at what\'s different, '
					+ 'well, who knows?" - Meowth';
} else
if (day === 6) {
	document.getElementById('quotes').innerHTML = '"Go beyond the impossible and kick reason to the curb!" - Kamina';
}

/** Quotes End **/