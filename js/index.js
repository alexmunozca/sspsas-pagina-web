var botonInicio = document.getElementById('encabezadoInicio');
var mnuInicio = document.getElementById('menuInicio');
var botonSisdis = document.getElementById('botonSisdis');
var botonSisbac = document.getElementById('botonSisbac');
var botonSismep = document.getElementById('botonSismep');
var botonHosting = document.getElementById('botonHosting');
var botonNosotros = document.getElementById('botonNosotros');
var botonContactenos = document.getElementById('botonContactenos');

function encabezadoInicio() {  
  location.reload()  
}
function menuInicio() {  
  location.reload()  
}
function cargarSisdis (event) {
  mostrarProductos("./sisdis/sisdis.html", "3650", "iframeSisdis")
}
function cargarSisbac (event) {
  mostrarProductos("./sisbac/sisbac.html", "3150", "iframeSisbac")
}
function cargarSismep (event) {
  mostrarProductos("./sismep/sismep.html", "2450", "iframeSismep")
}
function cargarHosting (event) {
  mostrarProductos("./hosting/hosting.html" , "1650", "iframeNosotros")
}
function cargarNosotros (event) {
	varIframe = document.getElementById("iframePrincipal");	
	if (varIframe){
		padre = varIframe.parentNode;
		padre.removeChild(varIframe);
  } 
  mostrarProductos("./html/nosotros.html", "1100", "iframeNosotros")
}

function cargarContactenos (event) {
	varIframe = document.getElementById("iframePrincipal");	
	if (varIframe){
		padre = varIframe.parentNode;
		padre.removeChild(varIframe);
  } 
  // var varIframe = document.getElementById('iframePrincipal');
  // if (varIframe!=null){
  //   if(varIframe.className!='iframeContactenos'){
  //     document.getElementById('iframePrincipal').style.display = 'none';
  //   }
  // }
  mostrarProductos("./html/contactenos.html", "650", "iframeContactenos")
}

function mostrarProductos(eLink, eHeight, eClassname) {
  ocultarProductos();
  var link = eLink 
  var iframe = document.createElement('iframe'); 
  var ancho = document.querySelector(".principal").width
  iframe.frameBorder=0; 
  iframe.width="97.5%"; 
  iframe.height=eHeight; 
  iframe.id="iframePrincipal"; 
  iframe.className=eClassname; 
  iframe.setAttribute("src", link); 
  document.getElementById("iframejs").appendChild(iframe);
  event.preventDefault();
}

function ocultarProductos() {  
  document.getElementById('tarjetaSisdis').style.display = 'none';
  document.getElementById('tarjetaSisbac').style.display = 'none';
  document.getElementById('tarjetaSismep').style.display = 'none';
  document.getElementById('tarjetaHosting').style.display = 'none';
}


botonInicio.addEventListener("click", encabezadoInicio, false);
mnuInicio.addEventListener("click", menuInicio, false);
botonSisdis.addEventListener("click", cargarSisdis, false);
botonSisbac.addEventListener("click", cargarSisbac, false);
botonSismep.addEventListener("click", cargarSismep, false);
botonHosting.addEventListener("click", cargarHosting, false);
botonNosotros.addEventListener("click", cargarNosotros, false);
botonContactenos.addEventListener("click", cargarContactenos, false);
