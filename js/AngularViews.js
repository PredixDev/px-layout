/* 
 *  Copyright (C) 2013 by Heiko Markgraf (SoftHai)
 *  Licence:  MIT
 */

/* ------------------------------------------------------ */
/* ---------------Angular JS Plugin Logic---------------- */
/* ------------------------------------------------------ */
angular.module('SoftHai.ResponsitiveSpitView', [])
  .directive('shSplitview', function() {
    return {
      restrict: 'AE',
      replace: true,
      transclude: true,
      scope: false,
      template: '<div ng-transclude></div>'
    };
  })
  .directive('shSidebar', function() {
    return {
      restrict: 'AE',
      replace: true,
      transclude: true,
      scope: false,
      link: function(scope, element, attrs) {
        if(attrs.sidebarconfig == 'left')
        {
            element.initSplitView("SidebarLeft");
        }
        else if(attrs.sidebarconfig == 'right')
        {
           element.initSplitView("SidebarRight");
        }
      },
      template: '<div ng-transclude></div>'
    };
  })
  .directive('shView', function() {
    return {
      restrict: 'AE',
      replace: true,
      transclude: true,
      scope: false,
      link: function(scope, element, attrs, SplitviewCtrl) {
        if(attrs.viewconfig == 'primary')
        {
            element.initSplitView("Primary");
        }
        else if(attrs.viewconfig == 'secondary')
        {
           element.initSplitView("Secondary");
        }
      },
      template: '<div ng-transclude></div>'
    };
  })
  .directive('shHide', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var switches = attrs.shHide.split(",");
        for(var i = 0; i < switches.length; i++)
        {
            switch(switches[i].toLowerCase())
            {
                case "primary":
                    element.addClass("sh-splitview-hide-primary");
                    break;
                case "secondary":
                    element.addClass("sh-splitview-hide-secondary").addClass("sh-splitview-hide");
                    break;
                case "splitscreen":
                    element.addClass("sh-splitview-hide-splitScreen");
                    break;
                case "fullscreen":
                    element.addClass("sh-splitview-hide-fullScreen");
                    break;
            }
        }
      }
    }
  })
  .directive('shViewcontrol', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.on("click", function() 
        { 
            $.controlSplitView(attrs.shViewcontrol); 
        });
      }
    }
  })
  .directive('shSidebarcontrol', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.on("click", function() 
        { 
            $.toggleSidebar(attrs.shSidebarcontrol);
        });
      }
    }
  })
;
