
/* Projects Section for narrow screen in Accordion */

/* Projects Accordion Navigation */
var menuLinks = document.getElementsByClassName("narrow-ac-label");
for (i=0; i<menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", toggleSection);
}

function toggleSection() {
  var menuHeader = this;
  if (menuHeader.classList.value === "narrow-ac-label selected") {
    menuHeader.className = "narrow-ac-label";
    menuHeader.nextElementSibling.className = "narrow-project-content";
  }
  else {
    menuHeader.className = "narrow-ac-label selected";
    menuHeader.nextElementSibling.className = "narrow-project-content active";
  }
}

/* Project Carousel Functionality- Narrow View */

var dots = document.getElementsByClassName("narrow-dot");

for (i=0; i<dots.length; i++) {
  dots[i].addEventListener("click", function() {
    var dot = this;
    var dotNumber = parseInt(this.getAttribute("data-dotnum"));
    var dotContainer = this.parentNode;
    var dots = dotContainer.getElementsByClassName("narrow-dot");
    var container = dotContainer.parentNode;
    var pages = container.getElementsByClassName("narrow-carousel-page");

    for (var i=0; i<dots.length; i++) {
      if (i===dotNumber) {
        dots[i].className = "narrow-dot active";
        pages[i].className = "narrow-carousel-page fade narrow-carousel-page-selected";
      }
      else {
        dots[i].className = "narrow-dot";
        pages[i].className = "narrow-carousel-page fade";
      }
    }

  });
}

var previousArrows = document.getElementsByClassName("narrow-prev");
var nextArrows = document.getElementsByClassName("narrow-next");

for (i=0; i<nextArrows.length; i++) {
  nextArrows[i].addEventListener("click", function() {
    var nextButton = this;
    var container=this.parentNode.parentNode;   
    var pages = container.getElementsByClassName("narrow-carousel-page");
    var pageCount = pages.length;
    var dots = container.getElementsByClassName("narrow-dot");
    var activeDots = container.getElementsByClassName("active");
    var currentPageNum = parseInt(activeDots[0].getAttribute("data-dotnum")); 

    
    var nextPageNum = currentPageNum === pageCount - 1 ? 0 : currentPageNum + 1; 

    for (var i=0; i<pageCount; i++) {
      if (i===nextPageNum) {
        dots[i].className = "narrow-dot active";
        pages[i].className = "narrow-carousel-page fade narrow-carousel-page-selected";
      }
      else {
        dots[i].className = "narrow-dot";
        pages[i].className = "narrow-carousel-page fade";
      }
    }
  });
  previousArrows[i].addEventListener("click", function() {
    var prevButton = this;
    var container=this.parentNode.parentNode;   
    var pages = container.getElementsByClassName("narrow-carousel-page");
    var pageCount = pages.length;
    var dots = container.getElementsByClassName("narrow-dot");
    var activeDots = container.getElementsByClassName("active");
    var currentPageNum = parseInt(activeDots[0].getAttribute("data-dotnum")); 

    var nextPageNum = currentPageNum === 0 ? pageCount - 1 : currentPageNum - 1;

    for (var i=0; i<pageCount; i++) {
      if (i===nextPageNum) {
        dots[i].className = "narrow-dot active";
        pages[i].className = "narrow-carousel-page fade narrow-carousel-page-selected";
      }
      else {
        dots[i].className = "narrow-dot";
        pages[i].className = "narrow-carousel-page fade";
      }
    }
  });
}