
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

/**
 * This function hides or displays images in the gallery depending upon the checkboxes selected in the gallery
 */

 function displayNoneLoop() {
  let GalleryVar = document.getElementsByClassName(arguments[0]);
  let a = 0;
  for (a = 0; a < GalleryVar.length; a++) {
      GalleryVar[a].style.display ="none";
  }
}

function GalleryDisplay() {

let i = 0;
let images = document.getElementsByClassName("galleryThumb");
for (i = 0; i < images.length; i++) {
images[i].style.display = "block";
}
checkboxloop("checkbox2018", "LCC2018")
checkboxloop("checkbox2019", "LCC2019")
checkboxloop("checkbox2021", "LCC2021")
checkboxloop("portraitcheckbox", "portrait")
checkboxloop("landscapecheckbox", "landscape")
}

function checkboxloop() {
let checkbox2018 = document.getElementById(arguments[0]);
if (checkbox2018.checked !== true) {
  displayNoneLoop(arguments[1]);
  }
}

