import cipher from './cipher.js';
let btncifrar = document.getElementById("btncifrar");
if (btncifrar) btncifrar.addEventListener("click", fncifrar);
function fncifrar() {
  let mensaje = document.getElementById("cifrar").value;
  let desplazamiento = parseInt(document.getElementById("desplazamiento").value);
  let mensajeCifrado = cipher.encode(desplazamiento, mensaje);
  //console.log(mensaje, desplazamiento);
  console.log(mensajeCifrado);
  document.getElementById("cifrado").innerHTML = mensajeCifrado;

}
let btndescifrar = document.getElementById("btndescifrar");
if (btndescifrar) btndescifrar.addEventListener("click", fndescifrar);
function fndescifrar() {
  let mensaje = document.getElementById("descifrar").value;
  let desplazamiento = parseInt(document.getElementById("desplazamiento").value);
  let mensajeDescifrado = cipher.decode(desplazamiento, mensaje);
  //console.log(mensaje,desplazamiento);
  //alert("mensaje, desplazamiento");
  console.log(mensajeDescifrado);
  document.getElementById("descifrado").innerHTML = mensajeDescifrado;


}











