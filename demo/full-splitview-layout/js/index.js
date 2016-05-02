/* ------------------------------------------------------ */
/* ---------------JQuery Plugin Logic-------------------- */
/* ------------------------------------------------------ */
(function($) {

	var splitViewManager = {
		PrimaryView: null,
		SecondaryView: null,
		SidebarLeftView: null,
		SidebarRightView: null
	};

	var splitViewClasses = {
		column: 'splitview__col',
		primary: 'splitview__col--primary',
		primaryPresent: 'splitview__col--is-present',
		primaryActive: 'splitview__col--is-active',
		primaryPassive: 'splitview__col--is-passive',
		secondaryActive: 'splitview__col--is-active',
		secondaryPassive: 'splitview__col--is-passive',
		secondary: 'splitview__col--secondary',
		sidebar: 'splitview__sidebar',
		sidebarPresent: 'splitview__sidebar--is-present',
		sidebarOpened: 'splitview__sidebar--is-opened',
		sidebarClosed: 'splitview__sidebar--is-closed',
		sidebarLeft: 'splitview__sidebar--left',
		sidebarRight: 'splitview__sidebar--right'
	};

	$.fn.initSplitView = function(action) {
		console.log('initSplitView', action, splitViewManager);
		switch (action.toLowerCase()) {
			case 'primary':
				this.addClass(splitViewClasses.primary)
					.addClass(splitViewClasses.primaryPassive);
				splitViewManager.PrimaryView = this;
				if (splitViewManager.SidebarRightView !== null) {
					this.addClass('splitview-sidebar-right-is-present');
				}
				break;

			case 'secondary':
				this.addClass(splitViewClasses.secondary)
					.addClass(splitViewClasses.secondaryActive);
				splitViewManager.SecondaryView = this;
				if (splitViewManager.SidebarLeftView !== null) {
					this.addClass('splitview-sidebar-left-is-present');
				}

				$('.splitview-hide-secondary').toggleClass('splitview-hide', true);
				break;

			case 'sidebarright':
				this.addClass(splitViewClasses.sidebarRight)
					.addClass(splitViewClasses.sidebarClosed);
				splitViewManager.SidebarRightView = this;
				if (splitViewManager.PrimaryView !== null) {
					splitViewManager.PrimaryView.addClass(splitViewClasses.primaryPresent);
					splitViewManager.PrimaryView.addClass('splitview-sidebar-right-is-present');
				}
				break;

			case 'sidebarleft':
				this.addClass(splitViewClasses.sidebarLeft).addClass(splitViewClasses.sidebarClosed);
				splitViewManager.SidebarLeftView = this;
				if (splitViewManager.SecondaryView !== null) {
					splitViewManager.SecondaryView.addClass(splitViewClasses.secondaryPresent);
					splitViewManager.SecondaryView.addClass('splitview-sidebar-left-is-present');
				}
				break;

			case 'toggle':
				splitViewManager.PrimaryView.toggleClass(splitViewClasses.primaryActive);
				splitViewManager.PrimaryView.toggleClass(splitViewClasses.primaryPassive);

				splitViewManager.SecondaryView.toggleClass(splitViewClasses.secondaryActive);
				splitViewManager.SecondaryView.toggleClass(splitViewClasses.secondaryPassive);

				$('.' + splitViewClasses.primary).toggleClass('splitview-hide');
				$('.' + splitViewClasses.secondary).toggleClass('splitview-hide');
				break;

			case 'primary':
				splitViewManager.PrimaryView.toggleClass(splitViewClasses.primaryActive, true);
				splitViewManager.PrimaryView.toggleClass(splitViewClasses.primaryPassive, false);

				splitViewManager.SecondaryView.toggleClass(splitViewClasses.secondaryActive, false);
				splitViewManager.SecondaryView.toggleClass(splitViewClasses.secondaryPassive, true);

				$('.splitview-hide-primary').toggleClass('splitview-hide');
				$('.splitview-hide-secondary').toggleClass('splitview-hide');
				break;

			case 'secondary':
				splitViewManager.PrimaryView.toggleClass(splitViewClasses.primaryActive, false);
				splitViewManager.PrimaryView.toggleClass(splitViewClasses.primaryPassive, true);

				splitViewManager.SecondaryView.toggleClass(splitViewClasses.secondaryActive, true);
				splitViewManager.SecondaryView.toggleClass(splitViewClasses.secondaryPassive, false);

				$('.splitview-hide-primary').toggleClass('splitview-hide');
				$('.splitview-hide-secondary').toggleClass('splitview-hide');
				break;
		}
		return this;
	};

	$.controlSplitView = function(action) {
		console.log('controlSplitView', action);

		switch (action.toLowerCase()) {
			case 'toggle':
				splitViewManager.PrimaryView.toggleClass(splitViewClasses.primaryActive);
				splitViewManager.PrimaryView.toggleClass(splitViewClasses.primaryPassive);

				splitViewManager.SecondaryView.toggleClass(splitViewClasses.secondaryActive);
				splitViewManager.SecondaryView.toggleClass(splitViewClasses.secondaryPassive);

				$('.splitview-hide-primary').toggleClass('splitview-hide');
				$('.splitview-hide-secondary').toggleClass('splitview-hide');
				break;

			case 'primary':
				splitViewManager.PrimaryView.toggleClass(splitViewClasses.primaryActive, true);
				splitViewManager.PrimaryView.toggleClass(splitViewClasses.primaryPassive, false);

				splitViewManager.SecondaryView.toggleClass(splitViewClasses.secondaryActive, false);
				splitViewManager.SecondaryView.toggleClass(splitViewClasses.secondaryPassive, true);

				$('.splitview-hide-primary').toggleClass('splitview-hide', true);
				$('.splitview-hide-secondary').toggleClass('splitview-hide', false);
				break;

			case 'secondary':
				console.warn('Toggling', 'secondary');
				splitViewManager.PrimaryView.toggleClass(splitViewClasses.primaryActive, false);
				splitViewManager.PrimaryView.toggleClass(splitViewClasses.primaryPassive, true);

				splitViewManager.SecondaryView.toggleClass(splitViewClasses.secondaryActive, true);
				splitViewManager.SecondaryView.toggleClass(splitViewClasses.secondaryPassive, false);

				$('.splitview-hide-primary').toggleClass('splitview-hide', false);
				$('.splitview-hide-secondary').toggleClass('splitview-hide', true);
				break;
		}
	};

	$.toggleSidebar = function(side) {
		console.log('toggleSidebar', side);
		if (side === 'right') {
			splitViewManager.SidebarRightView.toggleClass(splitViewClasses.sidebarClosed);
			splitViewManager.SidebarRightView.toggleClass(splitViewClasses.sidebarOpened);
		} else if (side === 'left') {
			splitViewManager.SidebarLeftView.toggleClass(splitViewClasses.sidebarClosed);
			splitViewManager.SidebarLeftView.toggleClass(splitViewClasses.sidebarOpened);
		} else if (side === 'close') {
			splitViewManager.SidebarLeftView.toggleClass(splitViewClasses.sidebarClosed, true);
			splitViewManager.SidebarLeftView.toggleClass(splitViewClasses.sidebarOpened, false);
			splitViewManager.SidebarRightView.toggleClass(splitViewClasses.sidebarClosed, true);
			splitViewManager.SidebarRightView.toggleClass(splitViewClasses.sidebarOpened, false);
		}
	};

	var _defaults = {
		primary: '.splitview__col--primary',
		secondary: '.splitview__col--secondary',
		left: '.splitview__sidebar--left',
		right: '.splitview__sidebar--right'
	};

	var options = {};

	$.fn.splitview = function(o) {
		options = $.extend(_defaults, o);

		console.warn('splitview', options);

		$(options.left).initSplitView('SidebarLeft');
		$(options.right).initSplitView('SidebarRight');
		$(options.primary).initSplitView('Primary');
		$(options.secondary).initSplitView('Secondary');
	};

}(jQuery));

/* Usage */
$(function() {
	
	$('.list-ui--nav a').on('click', function(e){
		console.log('link clicked');
		//e.preventDefault();
		//return false;
	});

	var $list = $('#list1');
	var $li = $('#list1 li:first-child').clone();
	var li;
	_.times(5, function(i) {
		li = $li.clone();
		li.find('a').text('Line item ' + i)
		$list.append(li);
	});

	$('#splitview').splitview();

	$('.brand').on('click', function() {
			$('.splitview__breadcrumbs').toggleClass('splitview__breadcrumbs--is-active');
			return false;
		})
		/* Initialize the view 
  $('#splitviewSidebarLeft').initSplitView('SidebarLeft');
  $('#splitviewSidebarRight').initSplitView('SidebarRight');
  $('#splitviewPrimary').initSplitView('Primary');
  $('#splitviewSecondary').initSplitView('Secondary');
	*/

});

(function() {
	var app = {
		// routes (i.e. views and their functionality) defined here
		'routes': {
			'blank-view-1': {
				'rendered': function() {
					console.warn('this view is "blank-view"');
				}
			},
			'blank-view-2': {
				'rendered': function() {
					console.warn('this view is "blank-view-2"');
				}
			},
			'some-view': {
				'rendered': function() {
					console.warn('this view is "some-view"');
				}
			},
			'default-view': {
				'rendered': function() {
					console.warn('this view is "default-view"');
				}
			},
			'dashboard-view': {
				'rendered': function() {
					console.warn('this view is "dashboard-view"');
				}
			},
			'another-view': {
				'rendered': function() {
					console.warn('this view is "another-view"');
					app.routeElem.innerHTML = '<p>This JavaScript content overrides the static content for this view.</p>';
				}
			}
		},
		// The default view is recorded here. 
		// might query the DOM to define it on the fly.
		'default': 'default-view',
		'routeChange': function() {
			app.routeID = location.hash.slice(1);
			app.route = app.routes[app.routeID];
			app.routeElem = document.getElementById(app.routeID);
			app.route.rendered();
		},
		// The function to start the app
		'init': function() {
			window.addEventListener('hashchange', function() {
				app.routeChange();
			});
			// If there is no hash in the URL, change the URL to
			// include the default view's hash.
			if (!window.location.hash) {

				window.location.hash = app.default;
			} else {
				// Execute routeChange() for the first time
				app.routeChange();
			}
		}
	};
	window.app = app;
	console.log('app.router', app);
})();

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}
app.init();