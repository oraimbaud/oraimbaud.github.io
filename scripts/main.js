$(document).ready(function() {

	var $w = $(window);
	var wb = 1280;
	var w;
	var wp;
	var h;
	var o;
    var injecting = false;
    var ejecting = false;
    var ejected = false;
    var mp = .029296875;
    var $ifc = $('.infos-container');
	var $sr = $('.slideshow-row');
	var $s = $('.slideshow');
	var $i = $s.find('.slideshow-item');
	var i;
	var t;
	var l;
    var $tags = $('.pj-tags');
	var tags;
	var ts;

    // On mousemove
    // On resize : font-size + padding
	$w.load(function () {
        st();
        $s.removeClass('onload').addClass('loaded');
        $('.infos-link.open').trigger('click');
    }).resize(function() {
		w = $w.width();
		h = $w.height();
		wp = .025*w;

		$('body').css({
            'font-size': w*50/wb,
            'line-height': w*60/wb+'px'
        });

		$('h1').add('h2').add('h3').add('p').add('ul').css({
            'margin-bottom': wp
        });

		$('.pj-tags').css({
            'font-size': w*12/wb,
            'line-height': w*14/wb+'px',
            'height': wp
        });

		$('.pj-description').add('.blog').css({
            'font-size': w*30/wb,
            'line-height': w*38/wb+'px',
            'height': w*.084375
        });

        $('.ss-prev').add('.ss-next').css({
            'font-size': w*22/wb
        });

		$('.infos-row').width(w);

		$('.infos').add('.links').add('.welcome').add('.blog').css({
            'padding-top': wp,
            'padding-bottom': wp
        });

		$('.infos-link').css({
            'height': mp*2*w,
            'font-size': w*13/wb,
            'line-height': mp*2*w+'px'
        });

        $('.logo').css({
            'font-size': w*23/wb,
            'line-height': w*23/wb+'px'
        });

		$('.infos-contact').css({
            'bottom': w*21/wb,
            'font-size': w*13/wb,
            'line-height': w*24/wb+'px'
        });

		$('.infos-contact a').css({
            'padding-top': w*3/wb,
            'padding-right': w*12/wb,
            'padding-bottom': w*3/wb,
            'padding-left': w*12/wb,
            'border-radius': w*5/wb
        });

        if (w/h >= 1280/700) {
            $s.removeClass('h').addClass('w')
        } else {
            $s.removeClass('w').addClass('h')
        }

	}).resize();

    // Open infos
	$('.infos-link.open').click(function() {
		o = true;
        $('.slideshow-container').addClass('draggable');
		$('.infos-container.closed').removeClass('closed').addClass('opened').animate({
			width: 50+'%'
		}, 200, function() {
			o = false;
		});
		return false;
	});

    // Close infos
	$('.infos-link.close').click(function() {
        $('.slideshow-container').removeClass('draggable');
		$('.infos-container.opened').removeClass('opened').addClass('closed').animate({
			width: 0
		}, 200);
		return false;
	});

    //Infos init
	function st() {
		i = $s.find('.slideshow-item:visible');
		t = i.data('pj-title');
		l = i.data('pj-link');
		tags = i.data('pj-tags');
		ts = tags.split(', ');

        $tags.empty();
        if (tags.length) {
            $tags.css('visibility', 'visible');
            for (var xx = 0; xx < ts.length; xx++) {
                $tags.append('<li>' + ts[xx] + '</li>');
            }
            $tags.find('li').css({
                'width': 200 / $tags.find('li').length + '%'
            });
        } else {
            $tags.css('visibility', 'hidden');
        }

		$('.pj-title').html(t+'<br>'+'<a href="'+l+'" target="_blank">'+l+'</a>');
	}

    // Slideshow
    $('.ss-description .pj-description').mouseenter(function() {
        $(this).parents('.ss-description').removeClass('hidden');
        $s.addClass('ss-grey');
        $('.infos-link.open').addClass('dumblink')
    }).mouseleave(function() {
        $(this).parents('.ss-description').addClass('hidden');
        $s.removeClass('ss-grey');
        $('.infos-link.open').removeClass('dumblink')
    });
	$('.infos-description .ss-next').add('.ss-description .ss-next').click(function() {
		var $next = i.hide().next('.slideshow-item:hidden');
		if ($next.length){
			$next.show();
		} else {
			$i.eq(0).show();
		}
		st();
		return false;
	});
	$('.infos-description .ss-prev').add('.ss-description .ss-prev').click(function() {
		var $prev = i.hide().prev('.slideshow-item:hidden');
		if ($prev.length){
			$prev.show();
		} else {
			$i.eq($i.length-1).show();
		}
		st();
		return false;
	});

    // Fire events on keyboard
	$('body').keyup(function(e) {
		if(e.keyCode == 39) { $('.ss-description .ss-next').trigger('click'); } // right
		else if(e.keyCode == 37) { $('.ss-description .ss-prev').trigger('click'); } // left
		else if(e.keyCode == 73 && $ifc.hasClass('closed')) { $('.infos-link.open').trigger('click'); } // "i"
        else if(e.keyCode == 73 && $ifc.hasClass('opened')) { $('.infos-link.close').trigger('click'); } // "i"
	});

});