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














