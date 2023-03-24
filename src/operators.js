function somar(num1, num2) {
  return Number(num1) + Number(num2);
}

function subtrair(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  return num1 / num2;
}

function fatorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  fatorial
};