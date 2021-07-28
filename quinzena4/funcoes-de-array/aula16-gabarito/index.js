let result = []

for(let i=0; i < 200; i++){
    if(i % 2 === 0 ){
        result.push(i/2)
    } else {
        result.push(i)
    }
}

console.log(result)

let results = []

for (let i=0; i< 200; i++) {
    for(let j = 0; j < i ; j++){
    if(i % 2 ===0 ){
        results.push(i/2)
    } else {
        results.push(i)
    }
}}

console.log(results)

let resultz = []

for (let i=0; i< 200; i++) {
    for(let j = 0; j < i ; j*= 2 ){
    if(i % 2 ===0 ){
        resultz.push(i/2)
    } else {
        resultz.push(i)
    }
}}

console.log(resultz)

// 1 => Todos os trechos são voltados para inserir número em um array vazio.
// E tudo ocorre através de um loop.

// 2 => O primeiro código inseri os números de 199 elementos no array dividindo sempre todo index do array por dois
// e aquele que possuir resto 0 é inserido no array dividido por 2, o segundo imprime no array 19900 elementos,
//seguindo a mesma lógica básica do primeiro código, porém inserindo  o número vezes ao que ele representa greficamente (ex. [3,3,3,4,4,4,4])
// Já o terceiro código não funciona pois o loop do For não aceita dentro de sua fórmula o incrementos no indice que diferentes do sinal de adição ou subtração.

// código 3; código 1; código 2 .... Cógido 3 pois de ínicio já apresenta erro que logo o navegador identifica e para de rodar;
// Código 1 pois insere menos indices no array e não possui um loop dentro de outro loop como o código 2 que faz uso disso para imprimir
// mais indices no array.