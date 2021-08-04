
// Exercício 1

const printNumbers = (numero) => {
  if (numero >= 0) {
    printNumbers(numero - 1);
    console.log(numero);
  }
};

const printNumbers = (numero) => {
  if (numero>= 0) {
    console.log(numero);
    printNumbers(numero - 1);
  }
};


