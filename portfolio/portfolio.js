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