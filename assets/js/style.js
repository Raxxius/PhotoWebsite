
var slideIndex = 0;
showIndexSlides();

function showIndexSlides() {

  let i = 0;
  let slides = document.getElementsByClassName("indexSlideImg");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showIndexSlides, 500); // Change image every 2 seconds
}