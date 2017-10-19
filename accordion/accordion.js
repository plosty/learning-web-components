var accordion = (function(window) {  
  var accordion = {};

  var menuLinks = document.getElementsByClassName("ac-label");
  for (i=0; i<menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", openSection);
  }

  function openSection() {
    this.previousSibling.checked = "true";
  }

  return accordion;
})(window)