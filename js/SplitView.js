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

  $.fn.initSplitView = function(action) {
    console.log('initSplitView', action);
    switch (action.toLowerCase()) {
      case 'primary':
        this
          .addClass('splitview-primary')
          .addClass('is-passive');
        splitViewManager.PrimaryView = this;
        if (splitViewManager.SidebarRightView != null) {

          this.addClass("splitview-sidebar-right-is-present");
        }
        break;

      case 'secondary':
        this
          .addClass('splitview-secondary')
          .addClass('is-active');
        splitViewManager.SecondaryView = this;
        if (splitViewManager.SidebarLeftView != null) {
          this.addClass("splitview-sidebar-left-is-present");
        }

        $('.splitview-hide-secondary')
          .toggleClass('splitview-hide', true);
        break;

      case 'sidebarright':
        this.addClass('splitview-sidebar-right')
          .addClass('is-closed');
        splitViewManager.SidebarRightView = this;
        if (splitViewManager.PrimaryView != null) {
          //splitViewManager.PrimaryView.addClass('is-present');
          splitViewManager.PrimaryView.addClass("splitview-sidebar-right-is-present");
        }
        break;

      case 'sidebarleft':
        this.addClass('splitview-sidebar-left').addClass('is-closed');
        splitViewManager.SidebarLeftView = this;
        if (splitViewManager.SecondaryView != null) {
          //splitViewManager.SecondaryView.addClass('is-present');
          splitViewManager.SecondaryView.addClass("splitview-sidebar-left-is-present");
        }
        break;

      case 'toggle':
        splitViewManager.PrimaryView.toggleClass('is-active');
        splitViewManager.PrimaryView.toggleClass('is-passive');

        splitViewManager.SecondaryView.toggleClass('is-active');
        splitViewManager.SecondaryView.toggleClass('is-passive');

        $('.splitview-hide-primary').toggleClass('splitview-hide');
        $('.splitview-hide-secondary').toggleClass('splitview-hide');
        break;

      case 'primary':
        splitViewManager.PrimaryView.toggleClass('is-active', true);
        splitViewManager.PrimaryView.toggleClass('is-passive', false);

        splitViewManager.SecondaryView.toggleClass('is-active', false);
        splitViewManager.SecondaryView.toggleClass('is-passive', true);

        $('.splitview-hide-primary').toggleClass('splitview-hide');
        $('.splitview-hide-secondary').toggleClass('splitview-hide');
        break;

      case 'secondary':
        splitViewManager.PrimaryView.toggleClass('is-active', false);
        splitViewManager.PrimaryView.toggleClass('is-passive', true);

        splitViewManager.SecondaryView.toggleClass('is-active', true);
        splitViewManager.SecondaryView.toggleClass('is-passive', false);

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
        splitViewManager.PrimaryView.toggleClass('is-active');
        splitViewManager.PrimaryView.toggleClass('is-passive');

        splitViewManager.SecondaryView.toggleClass('is-active');
        splitViewManager.SecondaryView.toggleClass('is-passive');

        $('.splitview-hide-primary').toggleClass('splitview-hide');
        $('.splitview-hide-secondary').toggleClass('splitview-hide');
        break;

      case 'primary':
        splitViewManager.PrimaryView.toggleClass('is-active', true);
        splitViewManager.PrimaryView.toggleClass('is-passive', false);

        splitViewManager.SecondaryView.toggleClass('is-active', false);
        splitViewManager.SecondaryView.toggleClass('is-passive', true);

        $('.splitview-hide-primary').toggleClass('splitview-hide', true);
        $('.splitview-hide-secondary').toggleClass('splitview-hide', false);
        break;

      case 'secondary':
        splitViewManager.PrimaryView.toggleClass('is-active', false);
        splitViewManager.PrimaryView.toggleClass('is-passive', true);

        splitViewManager.SecondaryView.toggleClass('is-active', true);
        splitViewManager.SecondaryView.toggleClass('is-passive', false);

        $('.splitview-hide-primary').toggleClass('splitview-hide', false);
        $('.splitview-hide-secondary').toggleClass('splitview-hide', true);
        break;
    }
  };

  $.toggleSidebar = function(side) {
    console.log('toggleSidebar', side);
    if (side == 'right') {
      splitViewManager.SidebarRightView.toggleClass('is-closed');
      splitViewManager.SidebarRightView.toggleClass('is-opened');
    } else if (side == 'left') {
      splitViewManager.SidebarLeftView.toggleClass('is-closed');
      splitViewManager.SidebarLeftView.toggleClass('is-opened');
    } else if (side == 'close') {
      splitViewManager.SidebarLeftView.toggleClass('is-closed', true);
      splitViewManager.SidebarLeftView.toggleClass('is-opened', false);
      splitViewManager.SidebarRightView.toggleClass('is-closed', true);
      splitViewManager.SidebarRightView.toggleClass('is-opened', false);
    }
  };

}(jQuery));

$(function() {
  /* Initialize the view */
  $('#LeftSidebar').initSplitView("SidebarLeft");
  $('#RightSidebar').initSplitView("SidebarRight");
  $('#Primary').initSplitView("Primary");
  $('#Secondary').initSplitView("Secondary");
});
