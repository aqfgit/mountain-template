const button = document.querySelector(".page-nav__toggler");
const menuList = document.querySelector(".page-nav__menu");
const pageNav = document.querySelector(".page-header__page-nav");
const pageTitle = document.querySelector(".page-header__title");

button.addEventListener(
  "click",
  function(event) {
    const menuIcon = document.querySelector(".page-nav__toggler-icon");
    menuList.classList.toggle("page-nav__menu--open");
    menuIcon.classList.toggle("page-nav__toggler-icon--active");
    pageNav.classList.toggle("page-header__page-nav--extended");
    button.setAttribute(
      "aria-expanded",
      String(menuList.classList.contains("page-nav__menu--open"))
    );
  },
  false
);

if (pageTitle) {
  window.addEventListener("scroll", function() {
    if (window.scrollY > pageTitle.offsetTop + pageTitle.offsetHeight - 160) {
      if (!pageNav.classList.contains("page-header__page-nav--floating")) {
        pageNav.classList.toggle("page-header__page-nav--floating");
      }
    } else {
      if (pageNav.classList.contains("page-header__page-nav--floating")) {
        pageNav.classList.toggle("page-header__page-nav--floating");
      }
    }
  });

  window.addEventListener("DOMContentLoaded", function() {
    if (window.scrollY > pageTitle.offsetTop + pageTitle.offsetHeight - 160) {
      if (!pageNav.classList.contains("page-header__page-nav--floating")) {
        pageNav.classList.toggle("page-header__page-nav--floating");
      }
    } else {
      if (pageNav.classList.contains("page-header__page-nav--floating")) {
        pageNav.classList.toggle("page-header__page-nav--floating");
      }
    }
  });
}
