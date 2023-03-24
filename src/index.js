const calculadora = require("./operators");
const validate = require("validate.js");

var num1 = 10;
var num2 = 5;
var numFat = 6;

function verifyNumbers() {
  if (!validate.isNumber(num1) || !validate.isNumber(num2) || !validate.isNumber(numFat)) {
    console.log("Valores não são do tipo Number");
    return false;
  }
  return true;
}

var isNumbers = verifyNumbers();

if(isNumbers) {
    let soma = calculadora.somar(num1, num2);
    let subtracao = calculadora.subtrair(num1, num2);
    let multiplicacao = calculadora.multiplicar(num1, num2);
    let divisao = calculadora.dividir(num1, num2);
    let fatorial = calculadora.fatorial(numFat);

    console.log(`Numeros: ${num1} e ${num2}`)
    console.log("---------------\n")

    console.log(`Soma: ${soma}`)
    console.log(`Subtração: ${subtracao}`)
    console.log(`Multiplicação: ${multiplicacao}`)
    console.log(`Divisão: ${divisao}`)
    console.log(`Fatorial de ${numFat}: ${fatorial}`)
}

