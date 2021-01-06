var imagenIndex = 1;
mostrarImagen(imagenIndex);

// Next/previous controls
function controlImagen(n) {
   mostrarImagen(imagenIndex += n);
}

function imagenActual(n) {
   mostrarImagen(imagenIndex = n);
}

function mostrarImagen(n) {
   var i;
   var slides = document.getElementsByClassName("exposicion__lista");
   var dots = document.getElementsByClassName("puntos");
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
      dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[imagenIndex - 1].style.display = "block";
   dots[imagenIndex - 1].className += " active";
}