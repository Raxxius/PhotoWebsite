
var slideIndex = 0;
showIndexSlides();

/**
 * This is the index slideshow for the Index page, this function takes five random images from the galleries and displays them 
 */

function showIndexSlides() {

  let i = 0;
  let slides = document.getElementsByClassName("indexSlideImg");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showIndexSlides, 5000); // Change image every 5 seconds
}