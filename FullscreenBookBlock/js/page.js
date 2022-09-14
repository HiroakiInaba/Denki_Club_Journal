let hide_front = document.getElementById("hide_front");
let hide_back = document.getElementById("hide_back");

var Page = (function () {

	var $container = $('#container'),
		$bookBlock = $('#bb-bookblock'),
		$items = $bookBlock.children(),
		itemsCount = $items.length,
		current = 0,
		bb = $('#bb-bookblock').bookblock({
			speed: 500,
			perspective: 1000,
			shadowSides: 0.8,
			shadowFlip: 0.4,
			onEndFlip: function (old, page, isLimit) {

				current = page;
				// update TOC current
				updateTOC();
				// updateNavigation
				updateNavigation(isLimit);
				// initialize jScrollPane on the content div for the new item
				setJSP('init');
				// destroy jScrollPane on the content div for the old item
				setJSP('destroy', old);

			}
		}),
		$navNext = $('#bb-nav-next'),
		$navPrev = $('#bb-nav-prev').hide(),
		$menuItems = $container.find('ul.menu-toc > li'),
		$tblcontents = $('#tblcontents'),
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
		supportTransitions = Modernizr.csstransitions;

	function init() {

		// initialize jScrollPane on the content div of the first item
		setJSP('init');
		initEvents();

	}

	async function asyncFunc_o() {
		hide_front.style.display = 'none';
	};
	async function asyncFunc_c() {
		hide_front.style.display = "block";
	};
	async function asyncFunc_o_b() {
		hide_back.style.display = 'none';
	};
	async function asyncFunc_c_b() {
		hide_back.style.display = "block";
	};

	function initEvents() {

		// add navigation events
		$navNext.on('click', function () {
			bb.next();
			return false;
		});

		$navPrev.on('click', function () {
			bb.prev();
			return false;
		});

		// add swipe events
		$items.on({
			'swipeleft': function (event) {
				if ($container.data('opened')) {
					return false;
				}
				bb.next();
				return false;
			},
			'swiperight': function (event) {
				if ($container.data('opened')) {
					return false;
				}
				bb.prev();
				return false;
			}
		});

		// show table of contents
		$tblcontents.on('click', toggleTOC);

		// click a menu item
		$menuItems.on('click', function () {

			var $el = $(this),
				idx = $el.index(),
				jump = function () {
					bb.jump(idx + 1);
				}

			if (idx === 0) {//idx = メニューパネルで選択したページのインデックス番号。
				setTimeout(asyncFunc_c, 550);//0の時はトップなのでdiv表示で閉じる//275
				setTimeout(asyncFunc_o_b,660);
			} else {
				setTimeout(asyncFunc_o, 660);//それ以外の時はdivを非表示//330
			}

			current !== idx ? closeTOC(jump) : closeTOC();

			return false;

		});

		// reinit jScrollPane on window resize
		$(window).on('debouncedresize', function () {
			// reinitialise jScrollPane on the content div
			setJSP('reinit');
		});

	}

	function setJSP(action, idx) {

		var idx = idx === undefined ? current : idx,
			$content = $items.eq(idx).children('div.content'),
			apiJSP = $content.data('jsp');

		if (action === 'init' && apiJSP === undefined) {
			$content.jScrollPane({ verticalGutter: 0, hideFocus: true });
		}
		else if (action === 'reinit' && apiJSP !== undefined) {
			apiJSP.reinitialise();
		}
		else if (action === 'destroy' && apiJSP !== undefined) {
			apiJSP.destroy();
		}

	}

	function updateTOC() {
		$menuItems.removeClass('menu-toc-current').eq(current).addClass('menu-toc-current');
	}

	function updateNavigation(isLastPage) {

		if (current === 0) {
			$navNext.show();
			$navPrev.hide();
		}
		else if (isLastPage) {
			$navNext.hide();
			$navPrev.show();
		}
		else {
			$navNext.show();
			$navPrev.show();
		}

	}

	function toggleTOC() {
		var opened = $container.data('opened');
		opened ? closeTOC() : openTOC();
	}

	function openTOC() {
		$navNext.hide();
		$navPrev.hide();
		$container.addClass('slideRight').data('opened', true);
	}

	function closeTOC(callback) {

		updateNavigation(current === itemsCount - 1);
		$container.removeClass('slideRight').data('opened', false);
		if (callback) {
			if (supportTransitions) {
				$container.on(transEndEventName, function () {
					$(this).off(transEndEventName);
					callback.call();
				});
			}
			else {
				callback.call();
			}
		}

	}

	return { init: init };

})();