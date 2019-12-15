$(window).load(function () {

  initMainSlider();
  initScroll();
  initSandwich();
  initSubMenu();

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

  $(".flexslider").flexslider({
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
    menu = $(".head-nav"),
    menuTopPos = sandwich.position().top + sandwich.height();


  sandwich.click(function () {
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