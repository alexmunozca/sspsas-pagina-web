// selector
var menu = document.querySelector('.encabezado__menu__hamburguesa');

// method
function toggleMenu (event) {
//  this.classList.toggle('is-active');
  document.querySelector( ".encabezado__lista" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);
