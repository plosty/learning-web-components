(function(window) {
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

  /* Projects section */
  var projectTabs = document.getElementsByClassName("component-list-item");
  var projects = document.getElementsByClassName("component-display");

  for (var i=0; i<projectTabs.length;i++) {
    projectTabs[i].addEventListener("click", openProject);
  }

  function openProject() {
    for (var p = 0; p<projectTabs.length; p++) {
      if(projectTabs[p]===this) {
        projectTabs[p].className = "component-list-item selected-component";
        projects[p].className = "component-display selected-component";
        // update pages so they get picked up by the carousel
        var carouselPages = projects[p].getElementsByClassName("carousel-page");
        for (var j=0; j<carouselPages.length; j++) {
          carouselPages[j].className = "carousel-page fade carousel-page-selected";
        }
        // set the dots to unselected
      } 
      else {
        projectTabs[p].className = "component-list-item";
        projects[p].className = "component-display";
        // update pages so they get don't get picked up by the carousel
        var carouselPages = projects[p].getElementsByClassName("carousel-page");
        for (var j=0; j<carouselPages.length; j++) {
          carouselPages[j].className = "carousel-page fade";
        }
        // set the dots to unselected
      }
    }    
  }

  var slideIndex = 1;
  showSlides(slideIndex);
  
  function refreshSlides() {
    slideIndex = 1;
    showSlides(slideIndex);
  }
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-page-selected");
    var dots = document.getElementsByClassName("dot-selected");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    console.log("slides.length: " + slides.length);
    console.log("dots.length: " + dots.length);
  }


})()