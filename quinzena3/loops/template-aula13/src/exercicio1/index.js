
// Exercício 1

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// o código acima que determina que o indexador/variável "i" irá rodar em loop, e ao final de cada loop irá adicinar a si mesma, uma vez si própria, ou seja 1, 

//e para cada vez que isto acontecer será adicionado mais um 1 à variável i , até chegar ao número 4, onde irá parar;

// para cada vez que isto acontecer, a variável valor terá adicionada à ela um número correspondente ao valor que i recebe ao final de cada ciclo;


// Exercício 2

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// // a. O console irá imprimir apenas os número maiores que 18;

// // b. 

// Exercício 3

//a.

// let arrayOriginal= [100, 200, 300, 400, 500]

// console.log(arrayOriginal)

//b.

// let arrayOriginal= [100, 200, 300, 400, 500]

// let arraydiv= arrayOriginal.map(x => x / 10)

// console.log(arraydiv)

// c.

// let arrayOriginal= [100, 333, 300, 147, 500]

// let arrayPar= []

// for (index = 0; index < arrayOriginal.length; index++ ) {
// 	if(arrayOriginal[index] % 2 === 0 ) {
// 		arrayPar.push(arrayOriginal[index])
// 	}
// }

// console.log(arrayPar)

//d.

const arrayOriginal = [1,2,3,4,5,6,7,8,9,10]

const arrayStrings = []

for(index=0; index < arrayOriginal.length; index++) {
	const string ='o elemento do index ' + index + " é " + arrayOriginal[index]
	arrayStrings.push(string);
}

console.log("Array de Strings: ", arrayStrings)

//e.

let maiorNumero = arrayOriginal[0]

let menorNumero = arrayOriginal[0]

for (index=0; index < arrayOriginal.length; index++) {
	if( arrayOriginal[index] > maiorNumero) {
		maiorNumero = arrayOriginal[index]
	} else if ( arrayOriginal[index] < menorNumero ) {
		menorNumero = arrayOriginal [index]
	}

}

console.log(" O maior número é " + maiorNumero + " e o menor número é " + menorNumero )







