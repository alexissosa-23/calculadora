let entradaActual = "";
let entradaPrevia = "";
let operacion = null;


function press(num) {
  var displayDiv = document.querySelector("#display");
  entradaActual += num;
  displayDiv.innerText = entradaActual;
}

function setOp(op) {
  var displayDiv = document.querySelector("#display");
  if (entradaActual === "" && displayDiv.innerText !== "") {
    entradaActual = displayDiv.innerText;
  }
  entradaPrevia = entradaActual;
  entradaActual = "";
  operacion = op;
}

function calculate() {
  var displayDiv = document.querySelector("#display");
  entradaActual = parseFloat(entradaActual);
  entradaPrevia = parseFloat(entradaPrevia);
  
  switch(operacion) {
    case '+':
        entradaActual = entradaPrevia + entradaActual;
      break;
    case '-':
        entradaActual = entradaPrevia - entradaActual;
      break;
    case '*':
        entradaActual = entradaPrevia * entradaActual;
      break;
    case '/':
      if (entradaActual === 0) {
        alert("Error de división por cero");
        entradaActual = "";
        entradaPrevia = "";
        operacion = null;
        displayDiv.innerText = "0";
        return;
      }
      entradaActual = entradaPrevia / entradaActual;
      break;
  }
  
  displayDiv.innerText = entradaActual;
  operacion = null;
  entradaPrevia = "";
}

function clr() {
  var displayDiv = document.querySelector("#display");
  entradaActual = "";
  entradaPrevia = "";
  operacion = null;
  displayDiv.innerText = "0";
}
