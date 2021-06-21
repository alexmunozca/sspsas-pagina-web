var imagenIndex = 1;
var slideIndex = 0;
//Obtener el nombre de la pagina actual
var rutaAbsoluta = self.location.href;   
var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
var rutaRelativa = rutaAbsoluta.substring(posicionUltimaBarra + "/".length , rutaAbsoluta.length);
//
if (rutaRelativa==='pantallas.html') {
   mostrarImagen(imagenIndex);
}else {
   presentarImagen();
}
function controlImagen(n) {
   mostrarImagen(imagenIndex += n);
}
function imagenActual(n) {
   mostrarImagen(imagenIndex = n);
}

function mostrarImagen(n) {
   var i;
   var slides = document.getElementsByClassName("exposicion__lista");
   var dots = document.getElementsByClassName("puntos__lista");
   if (n > slides.length) {
      imagenIndex = 1
   }
   if (n < 1) {
      imagenIndex = slides.length
   }
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" puntos__active", "");
   }
   slides[imagenIndex - 1].style.display = "block";
   dots[imagenIndex - 1].className += " puntos__active";
}

function presentarImagen() {
   var i;
   var slides = document.getElementsByClassName("exhibicion__lista");
   var dots = document.getElementsByClassName("exhibicion__columna__imagen");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
   }
   slideIndex++;
   if (slideIndex > slides.length) {slideIndex = 1}    
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
   setTimeout(presentarImagen, 1500);
 }