/* 
 *  Copyright (C) 2013 by Heiko Markgraf (SoftHai)
 *  Licence:  MIT
 */

/* ------------------------------------------------------ */
/* ---------------JQuery Plugin Logic-------------------- */
/* ------------------------------------------------------ */
(function ( $ ) {
 
    var splitViewManager = {
        PrimaryView: null,
        SecondaryView: null,
        SidebarLeftView: null,
        SidebarRightView: null
    }
 
    $.fn.initSplitView = function(action) {
        switch (action.toLowerCase())
        {
            case "primary":
                this.addClass( "sh-splitview-primary").addClass("sh-splitview-primary-passive");
                splitViewManager.PrimaryView = this;
                if(splitViewManager.SidebarRightView != null)
                {
                    this.addClass( "sh-splitview-sidebar-right-present");
                }
                break;
                
            case "secondary":
                this.addClass( "sh-splitview-secondary").addClass("sh-splitview-secondary-active");
                splitViewManager.SecondaryView = this;
                if(splitViewManager.SidebarLeftView != null)
                {
                    this.addClass( "sh-splitview-sidebar-left-present");
                }
                
                $('.sh-splitview-hide-secondary').toggleClass('sh-splitview-hide', true);
                break;
                
            case "sidebarright":
                this.addClass( "sh-splitview-sidebar-right").addClass("sh-splitview-sidebar-right-closed");
                splitViewManager.SidebarRightView = this;
                if(splitViewManager.PrimaryView != null)
                {
                    splitViewManager.PrimaryView.addClass( "sh-splitview-sidebar-right-present");
                }
                break;
                
            case "sidebarleft":
                this.addClass( "sh-splitview-sidebar-left").addClass("sh-splitview-sidebar-left-closed");
                splitViewManager.SidebarLeftView = this;
                if(splitViewManager.SecondaryView != null)
                {
                    splitViewManager.SecondaryView.addClass( "sh-splitview-sidebar-left-present");
                }
                break;
           
            case "toggle":
                splitViewManager.PrimaryView.toggleClass("sh-splitview-primary-active");
                splitViewManager.PrimaryView.toggleClass("sh-splitview-primary-passive");
                
                splitViewManager.SecondaryView.toggleClass("sh-splitview-secondary-active");
                splitViewManager.SecondaryView.toggleClass("sh-splitview-secondary-passive");
                
                $('.sh-splitview-hide-primary').toggleClass('sh-splitview-hide');
                $('.sh-splitview-hide-secondary').toggleClass('sh-splitview-hide');
                break;
                
            case "primary":
                splitViewManager.PrimaryView.toggleClass("sh-splitview-primary-active", true);
                splitViewManager.PrimaryView.toggleClass("sh-splitview-primary-passive", false);
                
                splitViewManager.SecondaryView.toggleClass("sh-splitview-secondary-active", false);
                splitViewManager.SecondaryView.toggleClass("sh-splitview-secondary-passive", true);
                
                $('.sh-splitview-hide-primary').toggleClass('sh-splitview-hide');
                $('.sh-splitview-hide-secondary').toggleClass('sh-splitview-hide');
                break;
                
            case "secondary":
                splitViewManager.PrimaryView.toggleClass("sh-splitview-primary-active", false);
                splitViewManager.PrimaryView.toggleClass("sh-splitview-primary-passive", true);
                
                splitViewManager.SecondaryView.toggleClass("sh-splitview-secondary-active", true);
                splitViewManager.SecondaryView.toggleClass("sh-splitview-secondary-passive", false);
                
                $('.sh-splitview-hide-primary').toggleClass('sh-splitview-hide');
                $('.sh-splitview-hide-secondary').toggleClass('sh-splitview-hide');
                break;
        }
        return this;
    };
    
    $.controlSplitView = function(action) {
        switch (action.toLowerCase())
        {
            case "toggle":
                splitViewManager.PrimaryView.toggleClass("sh-splitview-primary-active");
                splitViewManager.PrimaryView.toggleClass("sh-splitview-primary-passive");
                
                splitViewManager.SecondaryView.toggleClass("sh-splitview-secondary-active");
                splitViewManager.SecondaryView.toggleClass("sh-splitview-secondary-passive");
                
                $('.sh-splitview-hide-primary').toggleClass('sh-splitview-hide');
                $('.sh-splitview-hide-secondary').toggleClass('sh-splitview-hide');
                break;
                
            case "primary":
                splitViewManager.PrimaryView.toggleClass("sh-splitview-primary-active", true);
                splitViewManager.PrimaryView.toggleClass("sh-splitview-primary-passive", false);
                
                splitViewManager.SecondaryView.toggleClass("sh-splitview-secondary-active", false);
                splitViewManager.SecondaryView.toggleClass("sh-splitview-secondary-passive", true);
                
                $('.sh-splitview-hide-primary').toggleClass('sh-splitview-hide', true);
                $('.sh-splitview-hide-secondary').toggleClass('sh-splitview-hide', false);
                break;
                
            case "secondary":
                splitViewManager.PrimaryView.toggleClass("sh-splitview-primary-active", false);
                splitViewManager.PrimaryView.toggleClass("sh-splitview-primary-passive", true);
                
                splitViewManager.SecondaryView.toggleClass("sh-splitview-secondary-active", true);
                splitViewManager.SecondaryView.toggleClass("sh-splitview-secondary-passive", false);
                
                $('.sh-splitview-hide-primary').toggleClass('sh-splitview-hide', false);
                $('.sh-splitview-hide-secondary').toggleClass('sh-splitview-hide', true);
                break;
        }
    };
    
    $.toggleSidebar = function(side) {
        if(side == 'right')
        {
           splitViewManager.SidebarRightView.toggleClass("sh-splitview-sidebar-right-closed");
           splitViewManager.SidebarRightView.toggleClass("sh-splitview-sidebar-right-opened"); 
        }
        else if(side == 'left')
        {
           splitViewManager.SidebarLeftView.toggleClass("sh-splitview-sidebar-left-closed");
           splitViewManager.SidebarLeftView.toggleClass("sh-splitview-sidebar-left-opened"); 
        }
        else if(side == 'close')
        {
           splitViewManager.SidebarLeftView.toggleClass("sh-splitview-sidebar-left-closed", true);
           splitViewManager.SidebarLeftView.toggleClass("sh-splitview-sidebar-left-opened", false); 
           splitViewManager.SidebarRightView.toggleClass("sh-splitview-sidebar-right-closed", true);
           splitViewManager.SidebarRightView.toggleClass("sh-splitview-sidebar-right-opened", false); 
        }
    };
 
}( jQuery ));
