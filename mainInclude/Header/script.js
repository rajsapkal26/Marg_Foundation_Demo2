
var scrolling = 0;
navbar = document.getElementById("main_nav_fix");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollTopOne = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > scrolling) {
    navbar.style.top = "-200px";
    navbar.style.transition = "all ease 1s";
  } else {
    navbar.style.transition = "all ease 1s";
    navbar.style.top = "0px";
  }
  scrolling = scrollTop;
  if (scrollTopOne === 0) {
    navbar.style.backdropFilter = "none";
  } else {
    navbar.style.backdropFilter = "saturate(180%) blur(50px)";
  }
});



let add = document.getElementById('toggleIcon');

document.getElementsByClassName('homeOne').addEventListener('mouse')