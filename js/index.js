var botonInicio = document.getElementById('encabezadoInicio');
var mnuInicio = document.getElementById('menuInicio');
var botonSisdis = document.getElementById('botonSisdis');
var botonSisbac = document.getElementById('botonSisbac');
var botonSisbai = document.getElementById('botonSisbai');
var botonSismep = document.getElementById('botonSismep');
var botonHosting = document.getElementById('botonHosting');
var botonNosotros = document.getElementById('botonNosotros');
var botonContactenos = document.getElementById('botonContactenos');
var botonClientes = document.getElementById('botonClientes');
var botonClientes1 = document.getElementById('botonClientes1');

function encabezadoInicio() {  
  location.reload()  
}
function menuInicio() {  
  location.reload()  
}
function cargarSisdis (event) {
  borrarProductos()
  mostrarProductos("./sisdis/sisdis.html", "3800", "iframeSisdis")
}
function cargarSisbac (event) {
  borrarProductos()
  mostrarProductos("./sisbac/sisbac.html", "3150", "iframeSisbac")
}
function cargarSisbai (event) {
  borrarProductos()
  mostrarProductos("./sisbai/sisbai.html", "3150", "iframeSisbai")
}
function cargarSismep (event) {
  borrarProductos()
  mostrarProductos("./sismep/sismep.html", "2450", "iframeSismep")
}
function cargarHosting (event) {
  borrarProductos()
  mostrarProductos("./hosting/hosting.html" , "1800", "iframeHosting")
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
  mostrarProductos("./html/contactenos.html", "700", "iframeContactenos")
}

function cargarClientes (event) {
	varIframe = document.getElementById("iframePrincipal");	
	if (varIframe){
		padre = varIframe.parentNode;
		padre.removeChild(varIframe);
  } 
  mostrarProductos("./html/clientes.html", "1100", "iframeClientes")
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
  // e.preventDefault();
}

function borrarProductos(){
	varIframe = document.getElementById("iframePrincipal");	
	if (varIframe){
		padre = varIframe.parentNode;
		padre.removeChild(varIframe);
  }
  // var iframe_element = window.frames['iframe_name']; 
  // iframe_element.document.open(); 
  // iframe_element.document.close();
}

function ocultarProductos() {  
  document.getElementById('tarjetaSisdis').style.display = 'none';
  document.getElementById('tarjetaSisbac').style.display = 'none';
  document.getElementById('tarjetaSisbai').style.display = 'none';
  document.getElementById('tarjetaSismep').style.display = 'none';
  document.getElementById('tarjetaHosting').style.display = 'none';
}


botonInicio.addEventListener("click", encabezadoInicio, false);
mnuInicio.addEventListener("click", menuInicio, false);
botonSisdis.addEventListener("click", cargarSisdis, false);
botonSisbac.addEventListener("click", cargarSisbac, false);
botonSisbai.addEventListener("click", cargarSisbai, false);
botonSismep.addEventListener("click", cargarSismep, false);
botonHosting.addEventListener("click", cargarHosting, false);
botonNosotros.addEventListener("click", cargarNosotros, false);
botonContactenos.addEventListener("click", cargarContactenos, false);
botonClientes.addEventListener("click", cargarClientes, false);
botonClientes1.addEventListener("click", cargarClientes, false);
