var text = document.getElementById("toggle-text");
var overview = document.getElementById("overview");
var structure = document.getElementById("structure");
var surface = document.getElementById("surface");
var mercuryImage = document.getElementById("mercury-image");
var mainImageContainer = document.getElementById("main-image-container");

var mercuryGeologyImg = new Image(50, 50);
mercuryGeologyImg.src = "assets/geology-mercury.png";


/* Hamburger mobile menu */ 
function hamburgerMenu(){
  var menu = document.getElementById("menu");
  var hamburgerIcon = document.getElementById("hamburger-icon");
  menu.classList.toggle("toggle-menu");
  hamburgerIcon.classList.toggle("half-opacity");
}



/* Current working text switcher, but will try to change to radio buttons instead */ 

function overviewText(){
  text.innerHTML = 'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun&#8217;s planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.<span>Source: <a href="https://en.wikipedia.org/wiki/Mercury_(planet)">Wikipedia</a></span>';
  mercuryImage.src = "assets/planet-mercury.svg";
  // overview.classList.toggle("planet-button-switcher");
}

function internalStructure(){
  text.innerHTML = 'Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet&#8217;s density is the second highest in the Solar System at 5.427 g/cm3, only slightly less than Earth&#8217;s density.<span>Source: <a href="https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure">Wikipedia</a></span>';  
  mercuryImage.src = "assets/planet-mercury-internal.svg";
  // structure.classList.toggle("planet-button-switcher");
}

function surfaceGeologyText(){
  text.innerHTML = 'Mercury&#8217;s surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars&#8217;s or the Moon&#8217;s.<span>Source: <a href="https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology">Wikipedia</a></span>';  
  mainImageContainer.appendChild(mercuryGeologyImg);
  // surface.classList.toggle("planet-button-switcher");
}

