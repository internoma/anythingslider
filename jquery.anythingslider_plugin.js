/**
* AnythingSlider jQuery Plugin.
* @authors Alfredo González P. (alfredo@internoma.com)
* @date    2014-08-23 13:33:03
* @version 1.0.0
*/

jQuery.anythingslider = function(type,animation) {

	"use strict";

	var content = jQuery('ul#anythingSlider-content li');
	var navs = jQuery('ul#anythingSlider-nav li');
	var elength = content.length;
	var cont = 1;
	var enow = jQuery('ul#anythingSlider-content li:nth-child(1)');
	var datatime = enow.data('time');
	var elemcontent = [];

	if (type === 'random') {
		content.shuffle();
		content = jQuery('ul#anythingSlider-content li');
		enow = jQuery('ul#anythingSlider-content li:nth-child(1)');
		datatime = enow.data('time');
	}

	jQuery.each(content, function(index, value){
		elemcontent.push( jQuery(value).html() );
		jQuery(content[index]).html('');
		window.console.log(index + ' - ' + elemcontent[index]);
	});

	jQuery(content[0]).html(elemcontent[0]);

	if (animation === 'fade') {
		enow.fadeIn();
	} else if (animation === 'slide') {
		enow.slideDown();
	} else {
		enow.show();
	}
	jQuery('ul#anythingSlider-nav li:nth-child(1)').addClass("active");

	var fnslide = function () {
		clearInterval(interval);

		jQuery(content[cont]).html(elemcontent[cont]);

		if (animation === 'slide') {
			enow.slideUp();
		} else {
			enow.hide();
		}
		navs.removeClass("active").removeClass("preactive");
		if (cont < elength) {
			cont++;
		} else {
			cont = 1;
		}
		enow = jQuery('ul#anythingSlider-content li:nth-child('+cont+')');
		if (animation === 'fade') {
			enow.fadeIn();
		} else if (animation === 'slide') {
			enow.slideDown();
		} else {
			enow.show();
		}
		datatime = enow.data('time');
		jQuery('ul#anythingSlider-nav li:nth-child('+cont+')').addClass("active");
		interval = window.setInterval(fnslide, datatime);
	};
	var interval = window.setInterval(fnslide, datatime);

	// interactividad de navegacion
	//
	navs.on('click', function(){
		if (jQuery(this).index()+1 != cont) {
			cont = jQuery(this).index();
			navs.removeClass("preactive");
			jQuery(this).addClass("preactive");
		}
	});

};

(function(jQuery){

    jQuery.fn.shuffle = function() {
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = jQuery.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = jQuery(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
        this.each(function(i){
            jQuery(this).replaceWith(jQuery(shuffled[i]));
        });
        return jQuery(shuffled);
    };

})(jQuery);
