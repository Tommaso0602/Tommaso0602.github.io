let theme = true
function CambiaTema(){
    if(theme){
        document.getElementById("bg").style.backgroundColor = "#1E2935"
        document.getElementsById("majoscritta").style.color = "magenta"
        theme = false
    }else{
        document.getElementById("bg").style.backgroundColor = "magenta"
        document.getElementById("majoscritta").style.backgroundColor = "Black"
        theme = true
    }
}
function NavBar() {
    var x = document.getElementById("myTopnav");
    x.classList.toggle("responsive")
  }

//Temi
const storageKey = 'theme-preference'

const getColorPreference = () => {
  if (localStorage.getItem(storageKey))
    return localStorage.getItem(storageKey)
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}
const setPreference = () => {
    localStorage.setItem(storageKey, theme.value)
    reflectPreference()
}

const reflectPreference = () => {
document.firstElementChild
    .setAttribute('data-theme', theme.value)

document
    .querySelector('#theme-toggle')
    ?.setAttribute('aria-label', theme.value)
}






let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}










