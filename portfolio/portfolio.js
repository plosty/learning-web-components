(function(window) {
  var headerSections = document.getElementsByClassName("section-link");

  for (var i=0; i<headerSections.length;i++) {
    headerSections[i].addEventListener("click", openSection);
  }

  function openSection() {
    // scroll to related section header
  }

})()