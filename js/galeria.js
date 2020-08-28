var slideIndex = 0;
showSlides();

function showSlides() {
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
   setTimeout(showSlides, 2000); 
}
