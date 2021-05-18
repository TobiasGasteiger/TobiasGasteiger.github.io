//Navbar
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

//Slides
var activeSlide = new Array(3);
var slideId = ["malerSlides","harzSlides", "dekoSlides", "sonstigeSlides"];

showSlides(0, 0);
showSlides(0, 1);
showSlides(0, 2);
showSlides(0, 3);

function showSlides(slidenummer, slidename)  {
  var i;
  var slides = document.getElementsByClassName(slideId[slidename]);

  if (slidenummer > slides.length-1) {slidenummer = 0}
  if (slidenummer < 0) {slidenummer = slides.length-1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    document.getElementById(slideId[slidename] + "dot" + i).className = "dot"; 
  }
  document.getElementById(slideId[slidename] + "dot" + slidenummer).className += " active";
  slides[slidenummer].style.display = "block";
  activeSlide[slidename]= slidenummer;
}

function plusSlides(n, slidename) {
  showSlides(activeSlide[slidename]+n, slidename);
}

