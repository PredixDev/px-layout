/* ------------------------------------------------------ */
/* ---------------JQuery Plugin Logic-------------------- */
/* ------------------------------------------------------ */
(function($) {

  var breadcrumbViewManager = {
    Container: null,
    Breadcrumb: null,
    History: [],
    Current: null,
    HistoryWith: 8.333333333333332,
    MaxHistoryEntries: 8,
    DisplayBreadcrumbPath: false,
    SizeMode: "LG",
    Config: {
      XSHistoryEntries: 0,
      SMHistoryEntries: 2,
      MDHistoryEntries: 4,
      LGHistoryEntries: 8,
      XSHistoryWidth: 10,
      SMHistoryWidth: 10,
      MDHistoryWidth: 8,
      LGHistoryWidth: 6,
      XSDisplayBreadcrumbPath: true,
      SMDisplayBreadcrumbPath: false,
      MDDisplayBreadcrumbPath: false,
      LGDisplayBreadcrumbPath: false,
      UseURLHistory: true,
      PushURLHistory: function(fn) {
        var generateUUID = function() {
          var d = new Date().getTime();
          var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
          });
          return uuid;
        };
        var id = generateUUID();
        fn.BreadcrumbID = id;
        window.history.pushState({
          ID: id
        }, undefined, "?id=" + id);
      },
      PopURLHistory: function(historyElements, popStateEventData) {
        var eventState = popStateEventData.state;
        if (eventState != null) {
          for (var i = 0; i < historyElements.length; i++) {
            var element = historyElements[i];
            if (element.BreadcrumbID == eventState.ID) {
              return element;
            }
          }
        } else if (historyElements.length > 0) {
          return historyElements[0]; // No state but a history, go back to first element
        }

        return null;
      },
      BreadcrumbContainerTemplate: '<ul class=\'breadcrumbview-breadcrumb-container\'></ul>',
      BreadcrumbItemTemplate: '<li></li>'
    },
    Recalculate: function(forceRecalculation) {
      var currentWindowWidth = window.innerWidth;
      var currentSizeMode = "LG"; // LG Device
      var currentMaxEntries = breadcrumbViewManager.Config.LGHistoryEntries;
      var currentWidth = breadcrumbViewManager.Config.LGHistoryWidth;
      var currentDisplayBreadcrumb = breadcrumbViewManager.Config.LGDisplayBreadcrumbPath;
      if (currentWindowWidth < 768) // XS Device
      {
        currentSizeMode = "XS";
        currentMaxEntries = breadcrumbViewManager.Config.XSHistoryEntries;
        currentWidth = breadcrumbViewManager.Config.XSHistoryWidth;
        currentDisplayBreadcrumb = breadcrumbViewManager.Config.XSDisplayBreadcrumbPath;
      } else if (currentWindowWidth < 992) // SM Device
      {
        currentSizeMode = "SM";
        currentMaxEntries = breadcrumbViewManager.Config.SMHistoryEntries;
        currentWidth = breadcrumbViewManager.Config.SMHistoryWidth;
        currentDisplayBreadcrumb = breadcrumbViewManager.Config.SMDisplayBreadcrumbPath;
      } else if (currentWindowWidth < 1200) // MD Device
      {
        currentSizeMode = "MD";
        currentMaxEntries = breadcrumbViewManager.Config.MDHistoryEntries;
        currentWidth = breadcrumbViewManager.Config.MDHistoryWidth;
        currentDisplayBreadcrumb = breadcrumbViewManager.Config.MDDisplayBreadcrumbPath;
      }

      if (breadcrumbViewManager.SizeMode != currentSizeMode || forceRecalculation) // Size changed or force
      {
        breadcrumbViewManager.HistoryWith = currentWidth;
        breadcrumbViewManager.MaxHistoryEntries = currentMaxEntries;
        breadcrumbViewManager.SizeMode = currentSizeMode;
        breadcrumbViewManager.DisplayBreadcrumbPath = currentDisplayBreadcrumb;

        var currentWidth = 100 - Math.min(breadcrumbViewManager.History.length,
          breadcrumbViewManager.MaxHistoryEntries) * breadcrumbViewManager.HistoryWith;

        // Recalculation required
        var right = currentWidth;
        for (var i = breadcrumbViewManager.History.length - 1; i >= 0; i--) {
          var element = breadcrumbViewManager.History[i];
          if (right < 100) {
            // Move one position
            element.css("right", right + "%");
            element.width(breadcrumbViewManager.HistoryWith + "%");
            element.css("opacity", 1);
            right += breadcrumbViewManager.HistoryWith;
          } else {
            // switch from screen to offscreen
            element.css("right", right + "%");
            element.width("0%");
            element.css("opacity", 0);
          }
        }

        breadcrumbViewManager.Current.width(currentWidth + "%");
        breadcrumbViewManager.Current.css("right", "0%");
        breadcrumbViewManager.Current.css("opacity", 1);

        // Clear breadcrumb
        // :-( don't works - breadcrumbViewManager.Breadcrumb.children().each(function(index, element) { element.off('click', breadcrumbViewManager.ReopenHistoryClick)});
        breadcrumbViewManager.Breadcrumb.empty();
        // Update Breadcrumb
        if (breadcrumbViewManager.DisplayBreadcrumbPath) {
          breadcrumbViewManager.Breadcrumb.css('display', 'inherit');
          // Create history List
          for (var i = 0; i < breadcrumbViewManager.History.length; i++) {
            var element = breadcrumbViewManager.History[i];
            breadcrumbViewManager.Breadcrumb.append(
              $(breadcrumbViewManager.Config.BreadcrumbItemTemplate).append(
                $('<a href=\'#\'>' + element.find(">:first-child").data('crumbtitle') +
                  '</a>')
                .click(element, breadcrumbViewManager.ReopenHistoryClick)));
          }

          // Add Current element
          breadcrumbViewManager.Breadcrumb.append(
            $(breadcrumbViewManager.Config.BreadcrumbItemTemplate).html(
              breadcrumbViewManager.Current.find(">:first-child").data('crumbtitle')));
        } else {
          breadcrumbViewManager.Breadcrumb.css('display', 'none');
        }
      }
    },
    ReopenHistoryClick: function(eventData) {
      if (eventData.eventPhase == 2) // Allow only clicks direct on the element
      {
        if (breadcrumbViewManager.Config.UseURLHistory) {
          var index = breadcrumbViewManager.History.indexOf(eventData.data);
          var offset = index - breadcrumbViewManager.History.length;
          window.history.go(offset);
        } else {
          breadcrumbViewManager.ReopenHistory(eventData.data);
        }
      }
    },
    ReopenHistory: function(fn) {
      // Remove current
      breadcrumbViewManager.Current.detach();

      // Move from History to current
      fn.removeClass("breadcrumbview-history").addClass("breadcrumbview-current");
      fn.off("click", breadcrumbViewManager.ReopenHistoryClick);
      breadcrumbViewManager.Current = fn;

      // Kill history after current
      var foundIndex = -1;
      for (var i = 0; i < breadcrumbViewManager.History.length; i++) {
        var element = breadcrumbViewManager.History[i];
        if (foundIndex >= 0) {
          element.detach();
        } else {
          if (element == fn) {
            foundIndex = i;
          }
        }
      }

      breadcrumbViewManager.History.splice(foundIndex, breadcrumbViewManager.History.length -
        foundIndex);

      // Toogle visible flags
      $('.breadcrumbview-current .breadcrumbview-hide-history').toggleClass(
        "breadcrumbview-hide", false);
      $('.breadcrumbview-current .breadcrumbview-hide-current').toggleClass(
        "breadcrumbview-hide", true);

      $('.breadcrumbview-history .breadcrumbview-hide-history').toggleClass(
        "breadcrumbview-hide", true);
      $('.breadcrumbview-history .breadcrumbview-hide-current').toggleClass(
        "breadcrumbview-hide", false);

      breadcrumbViewManager.Recalculate(true);
    }
  }

  $.fn.initBreadcrumbView = function(config) {
    jQuery.extend(breadcrumbViewManager.Config, config);

    if (breadcrumbViewManager.Config.Template != undefined) {
      breadcrumbViewManager.Container = $('<div></div>');
      breadcrumbViewManager.Breadcrumb = $(breadcrumbViewManager.Config.BreadcrumbContainerTemplate);

      this.append(breadcrumbViewManager.Breadcrumb);
      this.append(breadcrumbViewManager.Container);

      breadcrumbViewManager.Container.addBreadcrumb({});

      window.onresize = function() {
        // Recalculate control
        breadcrumbViewManager.Recalculate(false);
      }

      if (breadcrumbViewManager.Config.UseURLHistory) {
        window.onpopstate = function(eventData) {
          var element = breadcrumbViewManager.Config.PopURLHistory(breadcrumbViewManager.History,
            eventData);
          if (element != null) {
            breadcrumbViewManager.ReopenHistory(element);
          }
        }
      }
    }

    return this;
  };

  $.fn.addBreadcrumb = function(config) {
    var templateConfig = (config != null && config.Template != undefined) ? config.Template :
      breadcrumbViewManager.Config.Template;

    // Handle function and string templates
    var template = jQuery.isFunction(templateConfig) ? templateConfig() : templateConfig;

    // Move Old current to history
    if (breadcrumbViewManager.Current != null) {
      var oldCurrent = breadcrumbViewManager.Current;
      oldCurrent.removeClass("breadcrumbview-current").addClass("breadcrumbview-history");
      oldCurrent.click(oldCurrent, breadcrumbViewManager.ReopenHistoryClick);
      breadcrumbViewManager.History.push(oldCurrent);
    }

    // Create new current
    breadcrumbViewManager.Current = $("<div class='breadcrumbview-current'>" + template +
      "</div>");
    breadcrumbViewManager.Container.append(breadcrumbViewManager.Current);

    // Toogle visible flags
    $('.breadcrumbview-current .breadcrumbview-hide-history').toggleClass(
      "breadcrumbview-hide", false);
    $('.breadcrumbview-current .breadcrumbview-hide-current').toggleClass(
      "breadcrumbview-hide", true);

    $('.breadcrumbview-history .breadcrumbview-hide-history').toggleClass(
      "breadcrumbview-hide", true);
    $('.breadcrumbview-history .breadcrumbview-hide-current').toggleClass(
      "breadcrumbview-hide", false);

    // Update Layout
    breadcrumbViewManager.Recalculate(true);

    // Update URL
    if (breadcrumbViewManager.Config.UseURLHistory && breadcrumbViewManager.History.length > 0) {
      breadcrumbViewManager.Config.PushURLHistory(breadcrumbViewManager.Current);
    }
    return this;
  };

  $.navigateBack = function() {

    if (breadcrumbViewManager.History.length > 0) {
      if (breadcrumbViewManager.Config.UseURLHistory) {
        window.history.go(-1);
      } else {
        breadcrumbViewManager.ReopenHistory(breadcrumbViewManager.History[breadcrumbViewManager
          .History.length - 1]);
      }
    }
  }

}(jQuery));

/* Initialize the view */
function BuildTemplate(param) {
  var elementContent = param;
  if (elementContent == undefined) {
    elementContent = elementCounter;
    elementCounter++;
  }

  // Create subitem List
  var list = "<ul class='list-ui'>";
  for (var i = 0; i < Math.floor((Math.random() * 20) + 1); i++) {
    list +=
      "<li><a  class='' onclick=\"$('#breadcrumbView').addBreadcrumb({ Template: BuildTemplate('Clicked->" +
      i + "') })\">Sub Element '" + i + "' of crumb '" + elementContent + "'</a></li>";
  }
  list += "</ul>";

  // Also possible to get template remote
  var template = "<div data-CrumbTitle='Crumb " + elementContent + "'>" +
    "<h2 class='breadcrumbview-hide-history'>Current: " + elementContent + "</h2>" +
    "<span class='breadcrumbview-hide-current demo-history-text'>History: " + elementContent +
    "</span>" +
    "<div class='breadcrumbview-hide-history'>" + list + "</div>" +
    "</div>";

  console.log('BuildTemplate', template, param);

  return template;
}

var elementCounter = 1;
$('#breadcrumbView').initBreadcrumbView({
  Template: BuildTemplate,
  SMDisplayBreadcrumbPath: true
});
