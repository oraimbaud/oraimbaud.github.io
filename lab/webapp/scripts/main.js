$(document).ready(function() {

	var $w = $(window);
	var ww;
	var wh;
	var key;

    // On resize & load
    $w.resize(function () { ww = $(this).width(); wh = $(this).height(); }).load(function() {

    });
    
    // triggers & toggle "archive" dummy link
    $(document).keyup(function(e) {
        key = e.keyCode;

        if (key == 39) {  } // right
        else if (key == 37) {  } // left
        else if (key == 40) {  } // down
        else if (key == 38) {  } // up
    	else if (key == 32) {  } // space
        else if (key == 13) {  } // enter
        else if (key == 27) {  } // esc
    });	

    // Functions mobile
	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

	}

});