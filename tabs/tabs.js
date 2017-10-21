var tabs = (function(window) {  
  var tabs = {};

  var departmentLinks = document.getElementsByClassName("departmentLink");
  for (i=0; i<departmentLinks.length; i++) {
    departmentLinks[i].addEventListener("click", openContent);
  }

  function openContent() {
    var headerNode = this;
    var departmentLinks = document.getElementsByClassName("departmentLink");
    for (i=0; i<departmentLinks.length; i++) {     
      if (departmentLinks[i]===headerNode) {      
        headerNode.className=("departmentLink active");
        headerNode.nextSibling.nextSibling.className=("content");
      }
      else {
        departmentLinks[i].className=("departmentLink");
        departmentLinks[i].nextSibling.nextSibling.className=("content hidden");
      }
    }
  }
  return tabs;
})(window)