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
