let slideIndex = 0;
/**
 * This function selects 5 random landscape images for the index pages slider to used.
 */

function selectIndexSlides() {
  let i = 0;
  let slideArray = ['lcc2018_1.jpg', 'lcc2018_2.jpg', 'lcc2018_5.jpg', 'lcc2018_7.jpg', 'lcc2018_8.jpg', 'lcc2018_10.jpg', 'lcc2018_11.jpg', 'lcc2018_12.jpg', 'lcc2018_13.jpg'];
  let indexSlides = [];

  for (i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * slideArray.length);
    indexSlides.push(slideArray[num]);
    slideArray.splice(num, 1);
  }

  let x = 0;
  for (x = 0; x < 5; x++) {
    let var2 = document.createElement("img");
    let var3 = `assets/images/${indexSlides[x]}`;
    var2.className += ("indexSlideImg fade");
    var2.src = var3;
    var2.style.display += "none";
    document.getElementById("indexSlideshow").appendChild(var2);
  }
  showIndexSlides();
}

/**
 * This is the index slideshow for the Index page, this function takes five random images from the galleries and displays them 
 */

function showIndexSlides() {
  let z = 0;
  let slides = document.getElementsByClassName("indexSlideImg");
  for (z = 0; z < slides.length; z++) {
    slides[z].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showIndexSlides, 5000); // Change image every 5 seconds
}



/**
 * These functions hides or displays images in the gallery.html depending upon the checkboxes selected in the gallery
 */

function displayNoneLoop() {
  let GalleryVar = document.getElementsByClassName(arguments[0]);
  let a = 0;
  for (a = 0; a < GalleryVar.length; a++) {
    GalleryVar[a].style.display = "none";
  }
}

function GalleryDisplay() {
  let i = 0;
  let images = document.getElementsByClassName("galleryThumb");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "block";
  }
  checkboxloop("checkbox2018", "LCC2018");
  checkboxloop("checkbox2019", "LCC2019");
  checkboxloop("checkbox2021", "LCC2021");
  checkboxloop("portraitcheckbox", "portrait");
  checkboxloop("landscapecheckbox", "landscape");
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