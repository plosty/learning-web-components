(function(window) {  
  var headerSections = document.getElementsByClassName("section");
  var contentSections = document.getElementsByClassName("content");
  
  for (i=0; i<headerSections.length; i++) {
    headerSections[i].addEventListener("click", openContent);
  }

  function openContent() {
    // node = li within menubar 
    var headerNum = parseInt(this.id);
    for (i=0; i<contentSections.length; i++) {     
      if (headerNum===i) { 
        this.className=("section selected");     
        contentSections[i].className=("content");
      }
      else {
        headerSections[i].className=("section");
        contentSections[i].className=("content hidden");
      }
    }
  }
})()