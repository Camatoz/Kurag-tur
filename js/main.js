$(window).load(function () {

  initMainSlider();
  initScroll();
  initSandwich();
  initSubMenu();
  initTourSlider();
  initTourSelector();

});

//////////////////////////////////
function sliderContentPosition() {
  let containerLeftPos = $("header div.container").position().left,
    headButton = $("div.head-button"),
    dots = $("ol.flex-control-nav");

  headButton.css("paddingLeft", containerLeftPos);
  dots.css("paddingLeft", containerLeftPos);
}

$(window).resize(function () {
  sliderContentPosition();
});


///////////////////////////
function initMainSlider() {

  $("header div.flexslider").flexslider({
    animation: "slide",
    start: function () {
      sliderContentPosition();
    }
  });

}

///////////////////////
function initScroll() {
  document.getElementById("top").onclick = function () {
    window.scrollTo(0, 0);
  };
}

/////////////////////////
function initSandwich() {
  let sandwich = $(".head-nav-sandwich"),
    menu = $(".head-nav");



  sandwich.click(function () {
    let menuTopPos = sandwich.position().top + sandwich.height();
    menu.css("top", menuTopPos)
    menu.slideToggle(100);
    return false;
  })

}

////////////////////////
function initSubMenu() {
  let menuLevel1 = $(".head-nav > ul > li > a");

  menuLevel1.click(function () {

    let item = $(this),
      sub = item.next('.head-nav-sub');
    sub.slideToggle(100);
  })

}

///////////////////////////
function initTourSlider() {

  $(" div.hot-tour-slider").flexslider({
    animation: "slide",
    move: 1,
    minItems: 3,
    maxItems: 3,
    itemWidth: 300,
    itemMargin: 20,
    controlNav: false,
    delay: 3000
  });

}

///////////////////////////
function initPopSlider() {

  $(" div.pop-tour-slider").flexslider({
    animation: "slide",
    move: 1,
    minItems: 3,
    maxItems: 3,
    itemWidth: 300,
    itemMargin: 20,
    controlNav: false,
    delay: 3000
  });

}

/////////////////////////////
function initTourSelector() {

  let hotBtn = $('a.hot-tour-btn'),
    popBtn = $('a.pop-tour-btn'),
    hotSlider = $('div.hot-tour-slider'),
    popSlider = $('div.pop-tour-slider');

  hotBtn.click(function () {
    hotSlider.show(100);
    popSlider.hide(100);
    return false
  })

  popBtn.click(function () {
    popSlider.show(100, initPopSlider);
    hotSlider.hide(100);
    return false    
  });

}