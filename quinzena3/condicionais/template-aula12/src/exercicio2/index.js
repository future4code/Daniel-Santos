let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
     // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a. o código acima, chamado de Switch Case, é utilizado quando temos um processo repetitivo e padrão;

//b. Se impresso Maçâ, o console irá retornar o nome e o Preco indicado de 2.25;

//c. Se retirarmos o Break, o preço atribuido à pera será o valor de 5 contido no default, pois o Break determina o momento do Switch para de rodar;

