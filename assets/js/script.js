
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
 * This function hides or displays images in the gallery depending upon the checkboxes selected
 */


function gallerySort() {

  /** displays all images */
  let i = 0;
  let images = document.getElementsByClassName("galleryThumb");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "block";
  }

  /** clears images with unselected boxes */
  if ("2018checkbox" !== checked) {
    let a = 0;
    let checkbox2018 = document.getElementsByClassName("LCC2018");
    for (a = 0; a <checkbox2018.length; i++) {
      checkbox2018[a].style.display = "hidden";
    }
  }
  if ("2019checkbox" !== checked) {
    let b = 0;
    let checkbox2019 = document.getElementsByClassName("LCC2019");
    for (b = 0; b <checkbox2019.length; i++) {
      checkbox2019[b].style.display = "hidden";
    }
  }
  if ("2021checkbox" !== checked) {
    let c = 0;
    let checkbox2021 = document.getElementsByClassName("LCC2021");
    for (c = 0; c <checkbox2021.length; i++) {
      checkbox2021[c].style.display = "hidden";
    }
  }  
  if ("landscapecheckbox" !== checked) {
    let d = 0;
    let landscape = document.getElementsByClassName("landscape");
    for (d = 0; d <landscape.length; i++) {
      landscape[d].style.display = "hidden";
    }
  }
  if ("portraitcheckbox" !== checked) {
    let e = 0;
    let portrait = document.getElementsByClassName("portrait");
    for (e = 0; e <portrait.length; i++) {
      portrait[e].style.display = "hidden";
    }
  }
}