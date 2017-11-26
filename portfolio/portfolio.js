/* Hamburger Navigation */
var hamburgerIcon = document.getElementsByClassName("hamburger-icon");
var hamburgerMenu = document.getElementsByClassName("narrow-dropdown-menu");
var hamburgerLinks = document.getElementsByClassName("hamburger-section-link");

hamburgerIcon[0].addEventListener("click", function () {
  hamburgerMenu[0].classList.toggle("hamburger-menu-displayed");
});

for (var i=0; i<hamburgerLinks.length; i++) {
  hamburgerLinks[i].addEventListener("click", function () {
    hamburgerMenu[0].classList.toggle("hamburger-menu-displayed");
  });
}

/* Main site navigation */
var headerSections = document.getElementsByClassName("section-link");

for (var i=0; i<headerSections.length;i++) {
  headerSections[i].addEventListener("click", openSection);
}

function openSection() {
  for (var i=0; i< headerSections.length; i++) {
    if (headerSections[i]===this) {
      this.className = "section-link active";
    }
    else {
      headerSections[i].className = "section-link";
    }
  }
}

/* projects accordion navigation */
var accordion = (function(window) {
  var accordion = {};

  var menuLinks = document.getElementsByClassName("ac-label");
  for (i=0; i<menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", toggleSection);
  }

  function toggleSection() {
    var menuHeader = this;
    if (menuHeader.classList.contains("selected")){
      menuHeader.className = "ac-label";
      menuHeader.nextElementSibling.className = "project-content";
    }
    else {
      menuHeader.className = "ac-label selected";
      menuHeader.nextElementSibling.className = "project-content active";
    }
  }

  return accordion;
})(window)