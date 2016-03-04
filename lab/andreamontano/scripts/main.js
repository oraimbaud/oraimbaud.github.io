$(document).ready(function() {

	
	var $w = $(window);
    var ww;
    var wh;
    var $p = $('.photo');
    var $pv = $('.visible');
    var nrp = $('.p-1');

    // On resize :
    $w.resize(function () {
        ww = $w.width();
        wh = $w.height();
        rpbg(nrp);
    }).resize();

    // resize photo bg
    function rpbg(rp) {
        if ($(rp).width() / $(rp).height() <= $(rp).data('iw') / $(rp).data('ih')) {
            $p.addClass('w').removeClass('h');
        } else {
            $p.addClass('h').removeClass('w');
        }
    }

    var dl;

    // On click : thumb
    $('.project-thumb').click(function () {
        dl = $(this).data('pj-link');
        if (dl) {
            $p.each(function() {
                $(this).css('opacity', 0);
            });
            function display() {
                $p.each(function() {
                    if ($(this).data('pj-destination') == dl) {
                        $(this).css('opacity', 1);
                        nrp = $(this);
                        $w.resize();
                    }
                });
                toggleabout();
            }
            display();
        } else {
            return false;
        }
    });

    // On click about link
    function toggleabout() {

        if ($('.about-lb').hasClass('hidden')) {
            $('.about-lb').removeClass('hidden');
        } else {
            $('.about-lb').addClass('hidden');
        }

    }

    $('.about-link').click(toggleabout);

    // Pjeject title hover about page
    var ttl;

    $('.project-thumb-wrap').mouseenter(function () {
        ttl = $(this).data('title');
        if (ttl) {
            $('.project-title').removeClass('hidden').text(ttl);
        }
    }).mouseleave(function () {
        $('.project-title').addClass('hidden');
    });

});