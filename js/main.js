$(window).load(function() {
  $(".flexslider").flexslider({
    animation: "slide",
    start: function() {
      sliderContentPosition();
    }
  });
});

//////////////////////////////////
function sliderContentPosition() {
  let containerLeftPos = $("header div.container").position().left,
    headButton = $("div.head-button"),
    dots = $("ol.flex-control-nav");

  headButton.css("paddingLeft", containerLeftPos);
  dots.css("paddingLeft", containerLeftPos);
}

$(window).resize(function() {
  sliderContentPosition();
});

