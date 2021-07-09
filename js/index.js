// Anchor links

var $doc = $("html, body");
$(".navbar_list--link").click(function () {
  $doc.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
  return false;
});

//
//
// Open and Close menu - Mobile and Tablet

var checkbox_menu = document.getElementById("open_menu--checkbox");
var header = document.getElementById("header");
var footer = document.getElementById("footer");

checkbox_menu.onclick = function () {
  if (checkbox_menu.checked) {
    header.style.transform = "translateX(0)";
    footer.style.transform = "translateX(0)";
  } else {
    header.style.transform = "translateX(-110%)";
    footer.style.transform = "translateX(-110%)";
  }
};
