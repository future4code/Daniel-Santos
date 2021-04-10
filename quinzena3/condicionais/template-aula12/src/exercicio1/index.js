const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {             // Persunta se o resto da divisão da variável por 2 é igual a zero.
  console.log("Passou no teste.") // Se o resto for igual a zero, o sistem irá imprimir "Passou no Teste"; No caso esta resposta será impressa apenas se for inputado um númeor de grnadeza Par.
} else {
  console.log("Não passou no teste.") // Se o resto não for igual a zero, o sistem irá imprimir "Não Passou no Teste"; Neste caso o console irá imprimir esta resposta toda vez que o número for ímpar.

}

