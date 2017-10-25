(function(window) {  

  var tabs = document.getElementsByClassName("tab");

  for (i=0; i<tabs.length; i++) {
    tabs[i].addEventListener("click", openContent);
  }

  function openContent() {
    var tabNum = parseInt(this.id);
    var contentSections = document.getElementsByClassName("content");
    for (i=0; i<tabs.length; i++) {   
      if (i === tabNum) {      
        this.className=("tab active");
        contentSections[i].className="content";
      }
      else {
        tabs[i].className=("tab");
        contentSections[i].className=("content hidden");
      }
    }
  }
})()