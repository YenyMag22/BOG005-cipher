import cipher from './cipher.js';
let btncifrar = document.getElementById("btncifrar");
if (btncifrar) btncifrar.addEventListener("click", fncifrar);
function fncifrar() {
  let mensaje = document.getElementById("cifrar").value;
  let desplazamiento = parseInt(document.getElementById("desplazamiento").value);
  console.log(mensaje, desplazamiento);
  console.log(cipher.encode(desplazamiento, mensaje));

}
let btndecifrar = document.getElementById("btndecifrar");
if (btndecifrar) btndecifrar.addEventListener("click", fndecifrar);
function fndecifrar() {
  let mensaje = document.getElementById("decifrar").value;
  let desplazamiento = document.getElementById("desplazamiento").value;
  alert("mensaje, desplazamiento");

}













