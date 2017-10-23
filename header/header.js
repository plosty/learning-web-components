var header = (function(window) {  
  var header = {};

  var departmentLinks = document.getElementsByClassName("section");
  for (i=0; i<departmentLinks.length; i++) {
    departmentLinks[i].addEventListener("click", openContent);
  }

  function openContent() {
    // node = li within menubar 
    var headerNode = this;
    var departmentLinks = document.getElementsByClassName("section");
    for (i=0; i<departmentLinks.length; i++) {     
      if (departmentLinks[i]===headerNode) { 
        headerNode.nextSibling.nextSibling.className=("content");     
        headerNode.className=("section selected");
        headerNode.childNodes[0].className=("selected");
      }
      else {
        departmentLinks[i].className=("section");
        departmentLinks[i].childNodes[0].className = "";
        departmentLinks[i].nextSibling.nextSibling.className=("content hidden");
      }
    }
  }
  return header;
})(window)