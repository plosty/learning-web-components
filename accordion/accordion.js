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
      menuHeader.nextElementSibling.className = "content";
    }
    else {
      menuHeader.className = "ac-label selected";
      menuHeader.nextElementSibling.className = "content active";
    }
  }

  return accordion;
})(window)
