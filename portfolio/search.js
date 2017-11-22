/* Search Section */
var searchLabel = document.getElementsByClassName("search-box-label");
var searchBox = document.getElementsByClassName("search-box");
var searchIcon = document.getElementsByClassName("search-button");
var searchModalWindow = document.getElementById("openModal");
var searchQuery = document.getElementsByClassName("modal-search-query");

searchBox[0].addEventListener("click", moveSearchLabel);
searchBox[0].addEventListener("mouseover", moveSearchLabel);
searchIcon[0].addEventListener("mouseover", moveSearchLabel);
searchBox[0].addEventListener("mouseout", returnSearchLabel);


/* launch search function */
searchIcon[0].addEventListener("click", searchSite);
searchBox[0].addEventListener('keyup', function (event) {
  //check to see if the enter key was pressed
  if (event.which === 13) {
    //if so, run the searchSite function
    searchSite();
  }
});

function moveSearchLabel() {
  searchLabel[0].className = "search-box-label label-moved";
}

function returnSearchLabel() {
  searchLabel[0].className = "search-box-label";
}

function searchSite() {
  var searchText = searchBox[0].value;
  console.log("Searching for: " + searchText);
  //open the modal box and display the search string 
  searchQuery[0].innerText=searchText;
  searchModalWindow.className = "modalDialog modalDialogActive";

  searchBox[0].value = "";
}

var closeModalWindow = document.getElementsByClassName("close-search-modal");

closeModalWindow[0].addEventListener("click", function() {  
  searchModalWindow.className = "modalDialog";
});
