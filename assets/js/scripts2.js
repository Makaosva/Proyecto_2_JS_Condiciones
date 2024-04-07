function verificarSrickers() {
  const inputNumber1 = Number(document.querySelector("#inputNumber1").value);
  const inputNumber2 = Number(document.querySelector("#inputNumber2").value);
  const inputNumber3 = Number(document.querySelector("#inputNumber3").value);
  const Total = inputNumber1 + inputNumber2 + inputNumber3;
  const mensaje = document.getElementById("mensaje");
  if (inputNumber1 < 0 || inputNumber2 < 0 || inputNumber3 < 0) {
    mensaje.innerHTML = "<strong>El numero de stickers seleccionado no puede ser menos que cero</strong>";
  } else if (Total <= 10) {
    mensaje.innerHTML = "Llevas " + Total + " stickers";
  } else {
    mensaje.innerHTML = "<strong>Llevas demasiados stickers</strong>";
  }
}
