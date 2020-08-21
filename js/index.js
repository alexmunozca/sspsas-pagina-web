var botonInicio = document.getElementById('encabezadoInicio');
var botonSisbac = document.getElementById('botonSisbac');
var botonSismep = document.getElementById('botonSismep');
var botonHosting = document.getElementById('botonHosting');

function encabezadoInicio() {  
  location.reload()  
}
function cargarSisbac (event) {
  document.getElementById('tarjetaSisdis').style.display = 'none';
  document.getElementById('tarjetaSisbac').style.display = 'none';
  document.getElementById('tarjetaSismep').style.display = 'none';

  var link = "./sisbac/sisbac.html" 
  var iframe = document.createElement('iframe'); 
  var ancho = document.querySelector(".principal").width
  iframe.frameBorder=0; 
  iframe.width="97.5%"; 
  iframe.height="3060"; 
  iframe.id="iframeSisbac"; 
  iframe.className="iframeSisbac" 
  iframe.setAttribute("src", link); 
  document.getElementById("iframejs").appendChild(iframe);
  event.preventDefault();
}

function cargarSismep (event) {
  document.getElementById('tarjetaSisdis').style.display = 'none';
  document.getElementById('tarjetaSisbac').style.display = 'none';
  document.getElementById('tarjetaSismep').style.display = 'none';
  // document.querySelector(".principal__titulo").style.display = 'none';

  var link = "./sismep/sismep.html" 
  var iframe = document.createElement('iframe'); 
  var ancho = document.querySelector(".principal").width
//  iframe.style.position = "absolute";
  // iframe.style.top ="0";
  // iframe.style.left     = "0";
  // iframe.width          = "100%";
  // iframe.height         = "100%";  
  iframe.frameBorder=0; 
  iframe.width="97.5%"; 
  iframe.height="2250"; 
  iframe.id="iframeSismep"; 
  iframe.className="iframeSismep" 
  iframe.setAttribute("src", link); 
// iframe.onload="javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+'px';}(this));" 
//  iframe.style="height:2600;width:100%;border:none;overflow:hidden;" otra forma de dar stylo
  document.getElementById("iframejs").appendChild(iframe);
  event.preventDefault();
}
function cargarHosting (event) {
  document.getElementById('tarjetaSisdis').style.display = 'none';
  document.getElementById('tarjetaSisbac').style.display = 'none';
  document.getElementById('tarjetaSismep').style.display = 'none';
  document.getElementById('tarjetaHosting').style.display = 'none';

  var link = "./hosting/hosting.html" 
  var iframe = document.createElement('iframe'); 
  var ancho = document.querySelector(".principal").width
  iframe.frameBorder=0; 
  iframe.width="97.5%"; 
  iframe.height="1700"; 
  iframe.id="iframeHosting"; 
  iframe.className="iframeHosting" 
  iframe.setAttribute("src", link); 
  document.getElementById("iframejs").appendChild(iframe);
  event.preventDefault();
}

botonInicio.addEventListener("click", encabezadoInicio, false);
botonSismep.addEventListener("click", cargarSismep, false);
botonSisbac.addEventListener("click", cargarSisbac, false);
botonHosting.addEventListener("click", cargarHosting, false);
