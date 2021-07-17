//
// Menu Responsivo - Mobile and Tablet
//

var checkbox_menu = document.getElementById("open_menu--checkbox");
var header = document.getElementById("header");
var footer = document.getElementById("footer");
var banner = document.getElementById("banner");
var main = document.getElementById("main");

var line_1 = document.getElementById("menu-icon_1");
var line_2 = document.getElementById("menu-icon_2");
var line_3 = document.getElementById("menu-icon_3");

checkbox_menu.onclick = function () {
  if (checkbox_menu.checked) {
    header.style.transform = "translateX(0)";
    footer.style.transform = "translateX(0)";

    banner.style.opacity = "0.7";
    main.style.opacity = "0.7";

    line_1.style.transform = "translate(0px, 7px) rotate(405deg)";

    line_2.style.background = "transparent";

    line_3.style.transform = "translate(0px, -7px) rotate(-405deg)";
  } else {
    header.style.transform = "translateX(-110%)";
    footer.style.transform = "translateX(-110%)";

    banner.style.opacity = "1";
    main.style.opacity = "1";

    line_1.style.transform = "translate(0px, 0px) rotate(0deg)";

    line_2.style.background = "#2c2f3f";

    line_3.style.transform = "translate(0px, 0px) rotate(0deg)";
  }
};
