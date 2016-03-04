jQuery(document).ready(function($){

	var $body = $('body');
	var $products = $('ul.products');
	var $product = $('.product');
	var product_h3_h;
	var $product_img;
	var scroll_value;
	var $title_border = $('.title_border');
	var $title_bottom_offset = $('span.title_bottom_offset');
	var $page_title = $('h1.page-title');
	var $breadcrumb = $('nav.woocommerce-breadcrumb');
	var $main = $('.main_content');
	var $page_content = $('.page_content');
	var $footer_border = $('.footer_border');
	var $footer = $('.footer_sheets');
	var offset_title_val;

	function toggle_border_bottom() {
		if ($main.outerHeight(true) > $(this).height()-2) {
			$footer.removeClass('has_gradient');
			$footer_border.addClass('is_visible');
		} else {
			$footer.addClass('has_gradient');
			$footer_border.removeClass('is_visible');
		}
	}

	$(window).resize(function() {
		if ($title_bottom_offset.length) { offset_title_val = $('span.title_bottom_offset').offset().top; }
		toggle_border_bottom();
	}).resize();

	$(window).scroll(function() {
		scroll_value = $(this).scrollTop();
		if (scroll_value >= 17) {
			$title_border.addClass('has_border');
		} else {
			$title_border.removeClass('has_border');
		}
		toggle_border_bottom();
	});
	
	function scroll_navtitle_to_bottom(nav_title) {
		nav_title.delay(1000).animate({ scrollTop: offset_title_val }, 2000, function() {
			scroll_navtitle_to_top(nav_title);
		});

		function scroll_navtitle_to_top(nav_title) {
			nav_title.delay(1000).animate({ scrollTop: 0 }, 2000, function() {
				scroll_navtitle_to_bottom(nav_title);
			});
		}
	}
	if ($body.hasClass('archive') || $body.hasClass('page')) {
		scroll_navtitle_to_bottom($page_title);
	} else if ($body.hasClass('single')) {
		scroll_navtitle_to_bottom($breadcrumb);
	}

	$('a.menu_accordion_link').click(function() {
		var $content_to_offset;
		var offset_class;
		if ($body.hasClass('home') || $body.hasClass('page')) {
			$content_to_offset = $page_content;
			offset_class = 'menu_accordion_opened_offset_content';
		} else if ($body.hasClass('single')) {
			$content_to_offset = $('.singlewrap');
			offset_class = 'menu_accordion_opened_offset_content';			
		} else if ($body.hasClass('archive') && $page_content.length !=0 ) {
			$content_to_offset = $page_content;
			offset_class = 'menu_accordion_opened_offset_products';
		} else if ($body.hasClass('archive') && $products.length !=0 ) {
			$content_to_offset = $products;
			offset_class = 'menu_accordion_opened_offset_products';
		}
		$('.menuwrapper.loggedin').toggleClass('menu_accordion_opened')
		$('.navbar-fixed-top').toggleClass('menu_accordion_opened_offset_navbar')
		$content_to_offset.toggleClass(offset_class);
		toggle_border_bottom();
		return false;
	});

	$('input#searchsubmit').mouseenter(function() {
		$(this).parents('form#searchform').addClass('search_mouseenter');
	}).mouseleave(function() {
		$(this).parents('form#searchform').removeClass('search_mouseenter');
	});
	
});