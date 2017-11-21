/* Search Section */
var searchLabel = document.getElementsByClassName("search-box-label");
var searchBox = document.getElementsByClassName("search-box");
var searchIcon = document.getElementsByClassName("search-button");

searchBox[0].addEventListener("mouseover", moveSearchLabel);
searchIcon[0].addEventListener("mouseover", moveSearchLabel);
searchBox[0].addEventListener("mouseout", returnSearchLabel);

searchIcon[0].addEventListener("click", searchSite);

function moveSearchLabel() {
  searchLabel[0].className = "search-box-label label-moved";
}

function returnSearchLabel() {
  searchLabel[0].className = "search-box-label";
}

function searchSite() {
  console.log("Searching...");
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