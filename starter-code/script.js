var text = document.getElementById("toggle-text");
var overview = document.getElementById("overview");
var structure = document.getElementById("structure");
var surface = document.getElementById("surface");


function overviewText(){
  text.innerHTML = 'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun&#8217;s planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.<span></span> Source: <a href="https://en.wikipedia.org/wiki/Mercury_(planet)">Wikipedia</a>';
  // overview.classList.toggle("planet-button-switcher");
}

function internalStructureText(){
  text.innerHTML = 'Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet&#8217;s density is the second highest in the Solar System at 5.427 g/cm3, only slightly less than Earth&#8217;s density.<span></span> Source: <a href="https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure">Wikipedia</a>';  
  // structure.classList.toggle("planet-button-switcher");
}

function surfaceGeologyText(){
  text.innerHTML = 'Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.<span></span> Source: <a href="https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology">Wikipedia</a>';  
  // surface.classList.toggle("planet-button-switcher");
}

function hamburgerMenu(){
  var menu = document.getElementById("menu");
  var hamburgerIcon = document.getElementById("hamburger-icon");
  menu.classList.toggle("toggle-menu");
  hamburgerIcon.classList.toggle("half-opacity");
}


