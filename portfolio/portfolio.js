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

