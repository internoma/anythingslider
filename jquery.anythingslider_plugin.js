/**
* AnythingSlider jQuery Plugin.
* @authors Alfredo González P.
* @date    2014-08-23 13:33:03
* @version 1.0.1
*/

jQuery.anythingslider = function(idContent,type,animation,transition) {

	"use strict";

	var content = jQuery(idContent + ' .anythingSlider-content li');
	var navs = jQuery(idContent + ' .anythingSlider-nav li');
	var elength = content.length;
	var cont = 0;
	var current = 0;
	var enow = jQuery(idContent + ' .anythingSlider-content li:nth-child(1)');
	var datatime = enow.data('time');
	var elemcontent = [];
	var img_url = '';
	var jQ_contentAct;

	if (type === 'random') {
		content.shuffle();
		content = jQuery(idContent + ' .anythingSlider-content li');
		enow = jQuery(idContent + ' .anythingSlider-content li:nth-child(1)');
		datatime = enow.data('time');
	}

	jQuery.each(content, function(index, value){
		elemcontent.push( jQuery(value).html() );
		if (index > 0) jQuery(content[index]).html('');
	});

	enow.show();

	jQuery(idContent + ' .anythingSlider-nav li:nth-child(1)').addClass("active");

	var fnslide = function (current) {
		clearInterval(interval);

		if (animation === 'slide') {
			enow.slideUp();
		} else {
			enow.hide();
		}
		if (transition === 'direct') {
			navs.removeClass("active");
		} else {
			navs.removeClass("active").removeClass("preactive");
		}

		if (current >= 0) cont = current - 1;

		if (cont < elength) {
			cont++;
		} else {
			cont = 0;
		}

		jQuery(content).html('');
		jQ_contentAct = jQuery(content[cont]);
		jQ_contentAct.html(elemcontent[cont]);

		if (cont < elength) {
			if ( elemcontent[cont].indexOf(".gif") > 0 ) {
				var date = new Date();
				img_url = jQ_contentAct.find('img').attr('src');
				img_url = img_url  + '?v=' + date.getTime();
				jQ_contentAct.find('img').attr('src', img_url);
			}
		}

		enow = jQuery(idContent + ' .anythingSlider-content li:nth-child('+ (cont +1) +')');
		if (animation === 'fade') {
			enow.fadeIn();
		} else if (animation === 'slide') {
			enow.slideDown();
		} else {
			enow.show();
		}
		datatime = enow.data('time');
		jQuery(idContent + ' .anythingSlider-nav li:nth-child('+ (cont +1) +')').addClass("active");
		interval = window.setInterval(fnslide, datatime);
	};

	var interval = window.setInterval(fnslide, datatime);

	// interactividad de navegacion
	//
	navs.click(function(){

		current = jQuery(this).index();

		if (transition === 'direct') {
			fnslide(current);
		} else {
			if (current != cont) {
				cont = jQuery(this).index();
				navs.removeClass("preactive");
				jQuery(this).addClass("preactive");
			}
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
