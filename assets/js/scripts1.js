function bordeImagen() {
  var imagen = document.getElementById("imagen");
  if (imagen.style.border == "none") {
    imagen.style.border = "solid";
    imagen.style.borderColor = "red";
    imagen.style.borderWidth = "2px";
  } else {
    imagen.style.border = "none";
  }
}
