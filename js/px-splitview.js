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
    primaryPresent: 'splitview__col--primary--is-present',
    primaryActive: 'splitview__col--primary--is-active',
    primaryPassive: 'splitview__col--primary--is-passive',
    secondaryActive: 'splitview__col--secondary--is-active',
    secondaryPassive: 'splitview__col--secondary--is-passive',
    secondary: 'splitview__col--secondary',
    sidebar: 'splitview__sidebar',
    sidebarPresent: 'splitview__sidebar--is-present',
    sidebarOpened: 'splitview__sidebar--is-open',
    sidebarClosed: 'splitview__sidebar--is-closed',
    sidebarLeft: 'splitview__sidebar--left',
    sidebarRight: 'splitview__sidebar--right'
  };

  $.fn.initSplitView = function(action) {
    console.log('initSplitView', action, splitViewManager);
    switch (action.toLowerCase()) {
      case 'primary':
        this
          .addClass(splitViewClasses.primary)
          .addClass(splitViewClasses.primaryPassive);
        splitViewManager.PrimaryView = this;
        if (splitViewManager.SidebarRightView !== null) {
          this.addClass('splitview-sidebar-right-is-present');
        }
        break;

      case 'secondary':
        this
          .addClass(splitViewClasses.secondary)
          .addClass(splitViewClasses.secondaryActive);
        splitViewManager.SecondaryView = this;
        if (splitViewManager.SidebarLeftView !== null) {
          this.addClass('splitview-sidebar-left-is-present');
        }

        $('.splitview-hide-secondary')
          .toggleClass('splitview-hide', true);
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

}(jQuery));

$(function() {
  /* Initialize the view */
  $('#LeftSidebar').initSplitView('SidebarLeft');
  $('#RightSidebar').initSplitView('SidebarRight');
  $('#Primary').initSplitView('Primary');
  $('#Secondary').initSplitView('Secondary');
});
