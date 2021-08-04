
// Exercício 1

const crescente = (numero) => {
  if (numero >= 0) {
    crescente(numero - 1);
    console.log(numero);
  }
};




