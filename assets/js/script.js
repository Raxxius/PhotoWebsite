
var slideIndex = 0;
showIndexSlides();
selectIndexSlides();

/**
 * This function selects 5 random landscape images for the index pages slider to used.
 * It uses the first array of images from the gallery and a random number generator that will select one from random and add it to the new array. 
 * The function then splices off the selected image from the array, this process is repeated 5 times to select 5 images randomly
 */

function selectIndexSlides() {
  let i = 0;
  let slideArray = ['LCC2018_1.jpg', 'LCC2018_2.jpg', 'LCC2018_5.jpg', 'LCC2018_7.jpg', 'LCC2018_8.jpg', 'LCC2018_10.jpg', 'LCC2018_11.jpg', 'LCC2018_12.jpg', 'LCC2018_13.jpg'];
  let indexSlides = [];

  for (i = 0; i < 5; i++) {
     let num = Math.floor(Math.random() * slideArray.length);
      indexSlides.push(slideArray[num]);
      slideArray.splice(num, 1)
    }
}

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
 * These functions hides or displays images in the gallery depending upon the checkboxes selected in the gallery
 */


/**
 * The Core loop - removes images that are not tagged via the checkboxloop function
 */
 function displayNoneLoop() {
  let GalleryVar = document.getElementsByClassName(arguments[0]);
  let a = 0;
  for (a = 0; a < GalleryVar.length; a++) {
      GalleryVar[a].style.display ="none";
  }
}

/**
 * This function is the heart of the loop system, it makes all images visable (style.display = "block" and then runs the check box loop for each checkbox)
 */

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

/**
 * This functions checks that the checkbox is tagged or not and if it is not tagged then runs the displayNoneLoop for the class related to the checkbox
 */

function checkboxloop() {
let checkbox2018 = document.getElementById(arguments[0]);
if (checkbox2018.checked !== true) {
  displayNoneLoop(arguments[1]);
  }
}

