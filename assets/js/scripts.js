//Funcion primer problema
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

//Funcion segundo problema
function verificarSrickers() {
  const inputNumber1 = Number(document.querySelector("#inputNumber1").value);
  const inputNumber2 = Number(document.querySelector("#inputNumber2").value);
  const inputNumber3 = Number(document.querySelector("#inputNumber3").value);
  const Total = inputNumber1 + inputNumber2 + inputNumber3;
  const mensaje = document.getElementById("mensaje2");
  if (inputNumber1 < 0 || inputNumber2 < 0 || inputNumber3 < 0) {
    mensaje.innerHTML =
      "<strong>El numero de stickers seleccionado no puede ser menos que cero</strong>";
  } else if (Total <= 10) {
    mensaje.innerHTML = "Llevas " + Total + " stickers";
  } else {
    mensaje.innerHTML = "<strong>Llevas demasiados stickers</strong>";
  }
}

//Funcion tercer problema
function verificarPassword() {
  const inputNumber1 = document.querySelector("#selector1").value;
  const inputNumber2 = document.querySelector("#selector2").value;
  const inputNumber3 = document.querySelector("#selector3").value;
  const Total = inputNumber1 + inputNumber2 + inputNumber3;
  const mensaje = document.getElementById("mensaje3");
  console.log(Total);
  if (Total === "911") {
    mensaje.innerHTML = "<strong>Password 1 Correcto</strong>";
  } else if (Total === "714") {
    mensaje.innerHTML = "<strong>Password 2 es Correcto</strong>";
  } else {
    mensaje.innerHTML = "<strong>Password Incorrecto</strong>";
  }
}
