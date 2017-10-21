var header = (function(window) {  
  var header = {};

  var departmentLinks = document.getElementsByClassName("section");
  for (i=0; i<departmentLinks.length; i++) {
    departmentLinks[i].addEventListener("click", openContent);
  }

  function openContent() {
    var headerNode = this;
    var departmentLinks = document.getElementsByClassName("section");
    for (i=0; i<departmentLinks.length; i++) {     
      if (departmentLinks[i]===headerNode) {      
        headerNode.className=("section selected");
        headerNode.nextSibling.nextSibling.className=("content");
      }
      else {
        departmentLinks[i].className=("section");
        departmentLinks[i].nextSibling.nextSibling.className=("content hidden");
      }
    }
  }
  return header;
})(window)