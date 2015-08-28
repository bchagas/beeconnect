beeConnect.mobileNavigation = function(menu, trigger) {
  menu = $(menu); trigger = $(trigger);

  var visibleAreaHeight = $(window).height(),
      logo = $(".mobile-logo"),
      page = $("body");

  window.addEventListener("orientationchange", function() {
    visibleAreaHeight = $(window).height();
    menu.css({ "margin-top" : -Math.abs(visibleAreaHeight) });
    logo.css({ "margin-top" : -Math.abs(visibleAreaHeight) });
  });

  menu.css({ "margin-top" : -Math.abs(visibleAreaHeight) });
  logo.css({ "margin-top" : -Math.abs(visibleAreaHeight) });

  trigger.on("click", function(event) {
    trigger.$ = $(this);

    if(!menu.is(":visible")) {
      page.css({ overflow: "hidden" });
      menu.show();
      logo.css({ visibility: "visible" });

      menu.animate({
        "margin-top" : 0,
      }, 500);

      logo.animate({
        "margin-top" : "5%",
      }, 200);

      trigger.$.addClass("active");
    } else {
      trigger.$.removeClass("active");
      page.removeAttr("style");

      logo.animate({
        "margin-top" : -Math.abs(visibleAreaHeight),
      }, 500).css({"visibility" : "hidden"});

      menu.animate({
        "margin-top" : -Math.abs(visibleAreaHeight),
      }, 200, function(){
        menu.hide();
      });

      trigger.$.removeClass("active");
    }
  });
};
