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
	$w.mousemove(function(e) {
		if (o == false) {
            if ($ifc.hasClass('opened')) {
                if (e.pageX < w / 2 - mp * w) {
                    if (ejected == false && injecting == false) {
                        $('.infos-container.opened').css({
                            'width': Math.round(w / 2)
                        });
                    } else if (ejected == true && injecting == false) {
                        injecting = true;
                        $ifc.add('.slideshow-container').removeClass('black');
                        $('.infos-container.opened').animate({
                            'width': Math.round(w / 2)
                        }, 200, function () {
                            injecting = false;
                            ejected = false
                        });
                    }
                } else if (e.pageX >= w / 2 - mp * w && e.pageX <= w - w / 3 && injecting == false && ejected == false) {
                    $('.infos-container.opened').css({
                        'width': Math.round(e.pageX + mp * w)
                    });
                } else if (e.pageX > w - w / 3 && ejecting == false && ejected == false) {
                    ejecting = true;
                    $('.infos-container.opened').animate({
                        'width': Math.round(w)
                    }, 100, function () {
                        ejecting = false;
                        ejected = true;
                    });
                }
                if (ejected == false) {
                    if (e.pageX >= .5 * w) {
                        $ifc.add('.slideshow-container').addClass('black');
                    } else {
                        $ifc.add('.slideshow-container').removeClass('black');
                    }
                }
            }
		}
        if ($('.ss-description').hasClass('hidden')) {
            if (e.pageX >= .5 * w && $ifc.hasClass('closed')) {
                $sr.addClass('mouse-right').removeClass('mouse-left');
            } else {
                $sr.addClass('mouse-left').removeClass('mouse-right');
            }
        } else {
            $sr.removeClass('mouse-right'+' '+'mouse-left');
        }
	}).load(function () {
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

	// City identifier
    $.get('http://ipinfo.io', function (response) {
        if (response.city) {
            $('.city').html(', visiteur <br/> de ' + response.city);
        }
    }, 'jsonp');

	// Date
    function date() {
        var today = new Date();
        var dn = today.getDay() + 1;
        var dt;
        var dd = today.getDate();
        var mn = today.getMonth() + 1;
        var mt;
        var yyyy = today.getFullYear();

        if (dn == 1) {
            dt = 'Dimanche'
        }
        else if (dn == 2) {
            dt = 'Lundi'
        }
        else if (dn == 3) {
            dt = 'Mardi'
        }
        else if (dn == 4) {
            dt = 'Mercredi'
        }
        else if (dn == 5) {
            dt = 'Jeudi'
        }
        else if (dn == 6) {
            dt = 'Vendredi'
        }
        else if (dn == 7) {
            dt = 'Samedi'
        }

        if (mn == 1) {
            mt = 'janvier'
        }
        else if (mn == 2) {
            mt = 'février'
        }
        else if (mn == 3) {
            mt = 'mars'
        }
        else if (mn == 4) {
            mt = 'avril'
        }
        else if (mn == 5) {
            mt = 'mai'
        }
        else if (mn == 6) {
            mt = 'juin'
        }
        else if (mn == 7) {
            mt = 'juillet'
        }
        else if (mn == 8) {
            mt = 'août'
        }
        else if (mn == 9) {
            mt = 'septembre'
        }
        else if (mn == 10) {
            mt = 'octobre'
        }
        else if (mn == 11) {
            mt = 'novembre'
        }
        else if (mn == 12) {
            mt = 'décembre'
        }

        today = dt + ' ' + dd + ' ' + mt + ' ' + yyyy;
        $('.date').html(today);
    }
    date();

    // Functions mobile
	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

	}

});