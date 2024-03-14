
var scrolling = 0;
let navbar = document.getElementById("main_nav_fix");
let navbarparent = document.getElementById('Home');

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollTopOne = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > scrolling) {
    navbar.style.top = "-200px";
    navbar.style.transition = "all ease 1s";
    
    // navbarparent.style.marginTop="-200px"
    // navbarparent.style.transition = "all ease 1s";
  } else {
    navbar.style.transition = "all ease 1s";
    navbar.style.top = "0px";

    // navbarparent.style.transition = "all ease 1s";
    // navbarparent.style.marginTop="0px";
  }

  scrolling = scrollTop;
  if (scrollTopOne === 0) {
    navbar.style.backdropFilter = "none";
  } else {
    navbar.style.backdropFilter = "saturate(180%) blur(50px)";
  }
});
