//Exercício 1

const arrayAleatorio = [0,1,2,3,4,5,6,7,8,9,10]

function inverteArray(array) {
  
   return array.reverse()

}

inverteArray(arrayAleatorio)

//Exercício 2

const arraySortido = [1,2,3,4,5,6]


function retornaNumerosParesElevadosADois (array) {
   
   if ( array % 2 === 0) {
      return array **2
   } 
}

const arrayDeParesElevadoADois = arraySortido.map(retornaNumerosParesElevadosADois).filter(retornaNumerosParesElevadosADois)



console.log(arrayDeParesElevadoADois)



//Exercício 3

const arrayPrimario = [0,1,2,3,4,5,6,7,8,9,10,56]



function retornaNumerosPares (array) {
   
   const novoArray = []

   for (let index = 0; index < array.length; index++) {     
      
      if (array[index] % 2 === 0 ) {
         novoArray.push(array[index])
      } 
      
   }
   return novoArray
}


retornaNumerosPares(arrayPrimario )

//Exercício 4

const arraySegundo = [0,1,2,3,4,5,6,7,8,9,10,56]



function retornaMaiorNumero(array) {

   let maiorNumeroAtual = 0

   for (let index = 0; index < array.length; index++){

      if ( array[index] > maiorNumeroAtual ) {
        maiorNumeroAtual = array[index] 
        
      } 
   } 
   
   return  maiorNumeroAtual 
}




retornaMaiorNumero(arraySegundo)


//Exercício 5

const arrayTerceiro = [0,1,2,3,4,5,6,,7,8,9,10]

function retornaQuantidadeElementos (array) {  
   return array.length
}

retornaQuantidadeElementos(arrayTerceiro)

//Exercício 6

const booleano1 = Boolean(true)
const booleano2 = Boolean(false)
const booleano3 = !booleano2 
const booleano4 = !booleano3

let a = booleano1 && booleano2 && ! booleano4

function retornaExpressoesBooleanas() {

   const arrayDeRespostas = [

    booleano1 && booleano2 && ! booleano4,

    (booleano1 && booleano2) || !booleano3,

    (booleano2 || booleano3) && (booleano4 || booleano1),

    !(booleano2 && booleano3) || !(booleano1 && booleano3),

    !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3),

   ]
   return arrayDeRespostas  
}

retornaExpressoesBooleanas()




//Exercício 7 => Pensar em uma nova abordagem 



function retornaNNumerosPares(n) {

   let arrayPar = []

   for (let index = 0; n > arrayPar.length ; index++) {
   
   if(index % 2 === 0 ) {
      arrayPar.push(index)
   }

   }

   return arrayPar
}

retornaNumerosPares( 2 )

// Exercício 8

function checaTriangulo(a, b, c) {
  
   let triangulo = 0

   if( a === b && c === b) { 

      return  "Equilátero"

   } else if ( (a === b && c !== b  ) || ( a === c && b !== c )) {

      return " Isóceles"

   } else { return  "Escaleno"}

   
}

checaTriangulo(3,5,3)

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   
   let objetoDeNumeros = {
      maiorNumero : 0 ,

      maiorDivisivelPorMenor : 0 ,

      diferenca : 0 ,
   }

   if ( num1 > num2) {
      objetoDeNumeros.maiorNumero = num1
   }else { 
      objetoDeNumeros.maiorNumero = num2
   }
   
   if ( num1 % num2 === 0 ) {
      objetoDeNumeros.maiorDivisivelPorMenor = Boolean(true)
   } else { objetoDeNumeros.maiorDivisivelPorMenor = Boolean(false)}
   
   if ( ( num1 - num2 ) < 0 ) {
      objetoDeNumeros.diferenca = (num1 - num2 ) * (-1)
   } else { objetoDeNumeros.diferenca = (num1 - num2 )}

   return objetoDeNumeros
}

console.log(comparaDoisNumeros(5, 3))

// Exercício 10

arrayQuinto = [0,1,2,3,4,5,6,7,8,9,10]

function segundoMaiorEMenor(array) {
   let arraySegundoMaiorMenor = []
   let maiorNumero = 0
   let menorNumero = 0

   for ( let index; index < array.length; index++) {

   if (array[index] > maiorNumero) {
      arraySegundoMaiorMenor.push(array[index])
   }

   // if (array[index] < menorNumero) {
   //    arraySegundoMaiorMenor.push(array[index])
   // }

   }

   return arraySegundoMaiorMenor

}

console.log(segundoMaiorEMenor(arrayQuinto))

//Exercício 11

const arraySexto = [ -1,-2,-30,-10,30,20,10,50,80,100,1,2,3,4,5,6,7,8,9,10]


function ordenaArray(a,b) {
   
   return a - b 
}

console.log(arraySexto.sort(ordenaArray))

// Exercício 12

function filmeFavorito() {
  const filmeAstrodev = {
   nome: "O Diabo Veste Prada" ,
   ano: Number(2006) ,
   diretor: "David Frankel" ,
   atores: ["Maryl Strip","Anne Hathaway","Emily Blunt","Stanley Tucci"] 
  }

  return filmeAstrodev
}

filmeFavorito()

// Exercício 13

function imprimeChamada() {

   const filmeAstrodev = {
      nome: "O Diabo Veste Prada" ,
      ano: Number(2006) ,
      diretor: "David Frankel" ,
      atores: ["Maryl Strip","Anne Hathaway","Emily Blunt","Stanley Tucci"] 
     }

     return `Venha assitir ao filme ${filmeAstrodev.nome}, de ${filmeAstrodev.ano}, dirigido por ${filmeAstrodev.diretor}, 
     e estrelado por ${filmeAstrodev.atores[0]}, ${filmeAstrodev.atores[1]}, ${filmeAstrodev.atores[2]}, ${filmeAstrodev.atores[3]} `
}

imprimeChamada()

// Exercício 14

function criaRetangulo(lado1, lado2) {
   
   const retangulo = {
      largura: 0,
      altura: 0,
      perimetro: lado1 + lado2,
      area: lado1 * lado2
   }

   if (lado1 > lado2) {
      retangulo.largura = lado1
      retangulo.altura = lado2
   } else { 
      retangulo.largura = lado2
      retangulo.altura = lado1 
   }

   return retangulo
}

criaRetangulo(2,9)

// Exercício 15

const pessoa = {
   nome: "Astrodev",
   idade: 25,
   email: "astrodev@future4.com.br",
   endereco: "Rua do Futuro, 4"
}

function anonimizaPessoa(pessoa) {

   return { ...pessoa,
   nome : "Anônimo"
   }
 
}

console.log(anonimizaPessoa(pessoa))

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}