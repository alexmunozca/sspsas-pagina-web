// Get the modal
var modal = document.getElementsByClassName("brochure__modal")[0];
// Get the image and insert it inside the modal - use its "alt" text as a caption

var img = document.getElementsByClassName("brochure__imagen");
var modalImagen = document.getElementsByClassName("brochure__modal__imagen")[0];
var modalTexto = document.getElementsByClassName("brochure__modal__texto")[0];

for (var i=0; i<img.length; i++){
   img[i].onclick = function(){
      debugger;
      modal.style.display = "block";
      modal.style.top = this.offsetTop+'px';
      // modal.style.color = "green";
      modalImagen.src = this.src;
      modalTexto.innerHTML = this.alt;
   }
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("brochure__modal__close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
   modal.style.display = "none";
}