/* ============================================================
   CONFIGURACIÓN DE MONTATUPC: lo único que tienes que tocar
   ============================================================
   Cuando tengáis las cuentas, escribe los códigos entre las comillas.
   - amazonTag: tu ID de afiliado de Amazon. Termina en -21. Ejemplo: "montatupc-21"
   - goatcounter: el nombre de tu contador de GoatCounter. Si tu panel es
     https://montatupc.goatcounter.com, escribe "montatupc". Solo lo ves tú.
   - ebayCampid: tu Campaign ID de eBay Partner Network (10 números). Es opcional:
     sin él, los enlaces de segunda mano a eBay funcionan igual, pero no cobras.
   - titular, nif, domicilio y correo: los datos de tu padre o tu madre para el aviso legal.
     Salen en las páginas "Aviso legal" y "Privacidad". Mientras estén vacíos,
     esas páginas lo marcan en amarillo para que no se te olvide.
*/
window.MONTATUPC_CONFIG = {
  amazonTag: "montatupc0c-21",
  ebayCampid: "5339257002",
  goatcounter: "",
  titular: "Maria Paz Lamban Aranda",   // 
  nif: "25483616F",       // su DNI, con la letra
  domicilio: "", // opcional: si lo dejas vacío no sale (mira el LEEME)
  correo: "montatupc.web@gmail.com",    // un correo de contacto
  fecha: "noviembre de 2026",  // cámbialo cuando revises los precios
  // Aviso de ofertas que no tienen fecha fija (Prime Day, Fiesta de Ofertas Prime...). Black Friday, Navidad, Reyes,
  // rebajas y vuelta al cole salen solos. Ejemplo: oferta: {texto: "Prime Day: mira el precio de hoy en Amazon.", desde: "2027-07-08", hasta: "2027-07-11"}
  oferta: null
};

/* No hace falta tocar nada de aquí para abajo */
// Pone los datos del aviso legal donde toca
(function(){
  function fill(){var C=window.MONTATUPC_CONFIG;document.querySelectorAll("[data-cfg]").forEach(function(e){var v=C[e.getAttribute("data-cfg")];
    if(v){e.textContent=v;e.classList.remove("fill");if(e.tagName==="A")e.href="mailto:"+v;}});
    document.querySelectorAll("[data-seg]").forEach(function(s){if(C.titular&&!C[s.getAttribute("data-seg")])s.remove();});
    var aff=!!(C.amazonTag||C.ebayCampid);document.querySelectorAll(aff?"[data-noaff]":"[data-aff]").forEach(function(e){e.remove();});document.querySelectorAll("[data-noaff]").forEach(function(e){e.hidden=false;});
    if(C.amazonTag)document.querySelectorAll("a[data-amz]").forEach(function(a){a.href+=(a.href.indexOf("?")<0?"?":"&")+"tag="+encodeURIComponent(C.amazonTag);});
    if(!aff&&!C.titular)document.querySelectorAll("[data-titular]").forEach(function(e){e.remove();});}
  if(document.readyState!=="loading") fill(); else document.addEventListener("DOMContentLoaded",fill);
})();
// Cada página se abre siempre arriba del todo (salvo los enlaces a una sección)
try{ if("scrollRestoration" in history) history.scrollRestoration="manual"; }catch(e){}
(function(){
  function top(){ if(!location.hash||location.hash.indexOf("#pc-")===0) { document.documentElement.scrollTop=0; document.body&&(document.body.scrollTop=0); } }
  if(document.readyState!=="loading") top(); else document.addEventListener("DOMContentLoaded",top);
  window.addEventListener("pageshow",top);
})();
(function(){
  var g=window.MONTATUPC_CONFIG.goatcounter;
  if(!g) return;
  var s=document.createElement("script");
  s.async=true; s.src="https://gc.zgo.at/count.js";
  s.setAttribute("data-goatcounter","https://"+g+".goatcounter.com/count");
  document.head.appendChild(s);
})();
