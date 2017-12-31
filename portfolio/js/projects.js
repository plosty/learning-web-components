(function(window) {
 
 /* Projects Section */
  var projectTabs = document.getElementsByClassName("component-list-item");
  var projects = document.getElementsByClassName("component-display");
  var slides = document.getElementsByClassName("carousel-page-selected");  
  var dotsContainers = document.getElementsByClassName("dots-container");
  var dots = document.getElementsByClassName("dot");
  var selectedDots = document.getElementsByClassName("dot-selected");
  var prev = document.getElementsByClassName("prev");
  var next = document.getElementsByClassName("next");
  var slideIndex = 1;
  showSlides(slideIndex);

  for (var i=0; i<projectTabs.length;i++) {
    projectTabs[i].addEventListener("click", openProject);
  }

  for (var i=0; i<prev.length; i++) {
    prev[i].addEventListener("click", previousSlide);
    next[i].addEventListener("click", nextSlide);
  }

  for (var i=0; i<dots.length; i++) {
    dots[i].addEventListener("click", openSlide);
  }

  function openProject() {
    for (var p = 0; p<projectTabs.length; p++) {
      if(projectTabs[p]===this) { // inside the project to be activated
        projectTabs[p].className = "component-list-item selected-component";
        projects[p].className = "component-display selected-component";
        // update pages so they get picked up by the carousel
        var carouselPages = projects[p].getElementsByClassName("carousel-page");
        for (var j=0; j<carouselPages.length; j++) {
          carouselPages[j].className = "carousel-page fade carousel-page-selected";
        }
        // set the dots to selected
        var dotContainer = dotsContainers[p];
        var changeDotSet = dotContainer.getElementsByClassName("dot");
        for (var i=0; i<changeDotSet.length; i++) {
          if (i===0) {
            changeDotSet[i].className="dot dot-selected active";
          }
          else {
            changeDotSet[i].className="dot dot-selected";
          }
        }
      } 
      else { // project needs to be closed off
        projectTabs[p].className = "component-list-item";
        projects[p].className = "component-display";
        // update pages so they get don't get picked up by the carousel
        var carouselPages = projects[p].getElementsByClassName("carousel-page");
        for (var j=0; j<carouselPages.length; j++) {
          carouselPages[j].className = "carousel-page fade";
        }
        // set the dots to unselected
        var dotContainer = dotsContainers[p];
        var changeDotSet = dotContainer.getElementsByClassName("dot");
        for (var i=0; i<changeDotSet.length; i++) {
          changeDotSet[i].className="dot";
        }
      }
    }    
    refreshSlides();
  }  
  
  function refreshSlides() {
    slideIndex = 1;
    showSlides(slideIndex);
  }
  
  function previousSlide() {
    slideIndex -= 1;
    showSlides(slideIndex);
  }
  
  function nextSlide() {
    slideIndex += 1;
    showSlides(slideIndex);
  }

  function openSlide() {
    console.log("data-dotnum: " + this.getAttribute("data-dotnum"));
    slideIndex = parseInt(this.getAttribute("data-dotnum"));
    showSlides(slideIndex);
  }
  
  function showSlides(n) {
    var i;
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < selectedDots.length; i++) {
      selectedDots[i].className = selectedDots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    selectedDots[slideIndex-1].className += " active";
  }

})()