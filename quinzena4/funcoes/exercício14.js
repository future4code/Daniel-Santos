// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// minhaFuncao(2)
// minhaFuncao(10)

// 1a. Será impresso no console o produto de 2 multiplicado por 5;

// 1b. Nada seria impresso no console, já que a função não foi invocada em algum tipo de variável, e nem mesmo em parenteses foi colocado algum outro tipo de varíavel tbm.


// Exercício 2

// let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)

// 2a. O Console irá imprimir os nomes Darvas e Caio, pois o Loop dentro da função diz para terminar a rotina quando o 
// i for menor ou igual a 2, ou seja , na index 0 do array, ele equivale ao turno 1, e no index 1 do array, ele equivale ao turno 2;

// 2b. Seriam impressos os nomes Amanda e Caio, já que a função invocada está chamando o array arrayDeNomes


// Exercício 3

// const metodo = (array) => {
//     let arrayFinal = [];
  
//     for (let x of array) {
//       if (x % 2 === 0) {
//           arrayFinal.push(x * x)
//       }
//     }
  
//     return arrayFinal;
//   }

  

// A função acima quando invocada, deve receber um número que obedeça a condição expressa de que este dividido pelo contador 


//exercício 4a.

// const sobreEu  = function dados() {
//     console.log ("Eu sou Daniel, tenho 30 anos, moro em São Bernardo do Campo e sou Analista Financeiro!" )
    
// }

// sobreEu()

// //b.

// let sobrePessoal = function info(nome, idade, cidade, estudante) {

    

//     const infoPessoais = "Eu sou "+nome+", tenho "+Number(idade)+" anos, moro em "+cidade+" e "+Boolean(estudante)

//     console.log(infoPessoais)
// }

// sobrePessoal("Daniel", 30, "SBC", "não sou estudante")



// // 5

// //a.

// // function produto(numero1, numero2) {
    
// //     let soma = numero1 + numero2

// //     return soma
    
// // }


// // let calculo = produto (2, 5)

// // console.log(calculo)

// //b.

// function menorMaior(algarismo1, algarismo2) {

//     let romano1 = algarismo1

//     let romano2 = algarismo2

//      if (romano1 >= romano2) { return "Maior"
        
//     } else {
//        return "Menor"
//     }
    
// }


// let calculo = menorMaior(3,2)

// console.log(calculo)


// //c.

// function oiMundo(mensagem) {

    

//     for (index = 0; index < 10; index++ ){

//         console.log(mensagem)
//     }



// }


// let texto = oiMundo("Hello World")

// // console.log(texto)


// //6


// //a.

// const numbers = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]


// const contar = (array) => {

// let arrays = array.length

// return arrays

// }


// let quantidade = contar(numbers)

// console.log(quantidade)


// //b.

// const imparPar = (digito) => {

//     const digit = digito / 2;

//     if(digit % 2 === 0 ) { return "Par"
//     }
    
//     else{
//         return "Ímpar"
//     }


// }


// let evenOdd = imparPar(3)

// console.log(evenOdd)


// // c.

// let novoArray = []

// function pares() {

    

//     for (let index = 0; index < numbers.length ; index ++) {

//         if( numbers[index] % 2 === 0) {  return numbers[index]

//         }
        
//     }
    
// }

// let apenasPares = pares(numbers)

// console.log(apenasPares)


