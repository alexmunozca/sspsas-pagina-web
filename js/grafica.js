var slideIndex = 0;
mostrarGaleria();

function mostrarGaleria() {
var i;
var slides = document.getElementsByClassName("galeria__list");
var dots = document.getElementsByClassName("galeria__imagenes");

for (i = 0; i < slides.length; i++) {
   slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {
   slideIndex = 1
}    
for (i = 0; i < dots.length; i++) {
   dots[i].className = dots[i].className.replace(" galeria--active", "");
}
   slides[slideIndex-1].style.display = "block";  
   setTimeout(mostrarGaleria, 2000); 
}

function abrirSubmenu() {
   var ancho = document.querySelector("#subMenus").style.height
   if (ancho=="160px"){
      document.getElementById("primerSubmenu").style.marginTop = "0px";
      document.getElementById("subMenus").style.height = "0";
      // document.getElementById('subMenus').style.display = 'none';
   } else {
      // document.getElementById('subMenus').style.display = 'block';
      document.getElementById("primerSubmenu").style.marginTop = "30px";
      document.getElementById("subMenus").style.height = "160px";
   }
}
function cerrarSubmenu() {
   document.getElementById("subMenus").style.height = "0";
}
