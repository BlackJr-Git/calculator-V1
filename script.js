// { calculate } import './calculator';

// TODO: Faire la manipulation du DOM dans ce fichier

const input = document.getElementById("input");
const calcul = document.getElementById("calcul");
const btnReset = document.getElementById("reset");
const btnClear = document.getElementById("clear");
const btnPlusOuMoins = document.getElementById("plusoumoins");
const btnPercentage = document.getElementById("percentage");
const btnDivideBy = document.getElementById("divideby");
const btnTimes = document.getElementById("times");
const btnMinus = document.getElementById("minus");
const btnPlus = document.getElementById("plus");
const btnEquals = document.getElementById("equals");
const numpad = document.querySelectorAll(".numpad");

let firstOperand;
let SecondOperand;
let operationSign = "";
let displayed = "";

// const numPad = [...numpad]
function getBtnValue(event) {
  input.value = event.target.innerText;

  switch (event.target.innerText) {
    case "1":
      if (!calcul.innerText == '') {
        calcul.innerText = "";
        displayed = ''
        displayed = displayed + "1";
      } else{
        displayed = displayed + "1";
      }
      break;

    case "2":
      displayed = displayed + "2";
      break;
    case "3":
      displayed = displayed + "3";
      break;
    case "4":
      displayed = displayed + "4";
      break;
    case "5":
      displayed = displayed + "5";
      break;
    case "6":
      displayed = displayed + "6";
      break;
    case "7":
      displayed = displayed + "7";
      break;
    case "8":
      displayed = displayed + "8";
      break;
    case "9":
      displayed = displayed + "9";
      break;
    case "0":
      if (displayed === "") {
        displayed = displayed + "0";
      } else if (displayed > 0 || displayed.includes(".")) {
        displayed = displayed + "0";
      }
      break;
    case ".":
      if (displayed.includes(".") || displayed === "") {
      } else {
        displayed = displayed + ".";
      }
      break;
  }
  input.value = displayed;
}

input.addEventListener("keydown", function (event) {
  event.preventDefault();
});

// iterateur qui permet de recuperer la valeur de la touche appuyer
numpad.forEach((number) => {
  number.addEventListener("click", getBtnValue);
});

// function and selector for Reset
function reset() {
  location.reload();
}

btnReset.addEventListener("click", reset);

// function and selector for clear
function clearInput() {
  input.value = "";
  displayed = "";
}

btnClear.addEventListener("click", clearInput);

// function Addition
function plus(event) {
  event.preventDefault();

  if (displayed) {
    // firstOperand = input.value;
    operationSign = "+";
    calcul.innerText = calcul.innerText + " " + input.value + " +";
    clearInput();
  } else {
    clearInput();
  }
}

btnPlus.addEventListener("click", plus);

// fonction soustraction
function minus(event) {
  event.preventDefault();

  if (displayed) {
    // firstOperand = input.value;
    calcul.innerText = calcul.innerText + " " + input.value + " -";
    operationSign = "-";
    clearInput();
  } else {
    clearInput();
  }
}

btnMinus.addEventListener("click", minus);

// fonction division
function division(event) {
  event.preventDefault();

  if (displayed) {
    // firstOperand = input.value;
    calcul.innerText = calcul.innerText + " " + input.value + " /";
    operationSign = "/";
    clearInput();
  } else {
    clearInput();
  }
}
btnDivideBy.addEventListener("click", division);

// fonction multiplication
function times(event) {
  event.preventDefault();

  if (displayed) {
    // firstOperand = input.value;
    calcul.innerText = calcul.innerText + " " + input.value + " *";
    operationSign = "*";
    // console.log(firstOperand);
    clearInput();
  } else {
    clearInput();
  }
}

btnTimes.addEventListener("click", times);

// fonction plusminus
function plusMinus() {
  if (displayed) {
    if (input.value.includes("-")) {
      input.value = displayed;
    } else {
      input.value = "-" + displayed;
    }
  }
}

btnPlusOuMoins.addEventListener("click", plusMinus);

// fonction pourcentage
function percentage(event) {
  event.preventDefault();
  calcul.innerText = input.value + "%";
  input.value = parseInt(input.value) / 100;
}

btnPercentage.addEventListener("click", percentage);
console.log(displayed);

// fonction Equals
function equals(event) {
  event.preventDefault();

  if (calcul.innerText.includes("=") || input.value === "") {
    // calcul.innerText = '';
    // calcul.innerText = input.value;
  } else {
    SecondOperand = input.value;
    calcul.innerText = calcul.innerText + " " + input.value;
    console.log(SecondOperand);

    input.value = eval(calcul.innerText);
    
    if (input.value === "Infinity") {
      input.value = "Erreur";
    }
    calcul.innerText = calcul.innerText + " " + "=";

    //if(operationSign === '+'){
    //  input.value = parseInt(firstOperand) + parseInt(SecondOperand)
    //}else if(operationSign === '-') {
    //  input.value = parseInt(firstOperand) - parseInt(SecondOperand)
    //}else if(operationSign === '*') {
    //  input.value = parseInt(firstOperand) * parseInt(SecondOperand)
    //}else if(operationSign === '/') {
    //  input.value = parseInt(firstOperand) / parseInt(SecondOperand)
    //}
  }
  
}

btnEquals.addEventListener("click", equals);
