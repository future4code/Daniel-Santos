/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
//1.

const boasVindas = alert("Bem vindos ao jogo de Blackjack")



//2 3 4 5.

const confirme = confirm("Quer inciar uma nova rodada?")

let jogadorHumano = []

let jogadorRobo = []

if (confirme) {
   let jogadorH1 = comprarCarta()
   let jogadorH2 = comprarCarta()
   let jogadorRB1 = comprarCarta()
   let jogadorRB2 = comprarCarta()
   jogadorHumano.push(jogadorH1,jogadorH2)
   jogadorRobo.push(jogadorRB1,jogadorRB2) 
   console.log(jogadorHumano,jogadorRobo)   
}else if (confirme === false){
   console.log("Fim de Jogo!")
}  



//6 7.

let somaHumano = jogadorHumano[0].valor + jogadorHumano[1].valor

let somaRobo = jogadorRobo[0].valor + jogadorRobo[1].valor

if(somaHumano > somaRobo) {
   console.log("Jogador Humano - ","cartas:",jogadorHumano[0].texto,jogadorHumano[1].texto," - pontuação ",somaHumano)
   console.log("Jogador Humano Venceu!")
}else if ( somaHumano < somaRobo){
   console.log("Jogado Robô - ","cartas:",jogadorRobo[0].texto,jogadorRobo[1].texto," - pontuação ",somaHumano)
   console.log("Jogador Robô Venceu!")

}else {
   console.log("Jogador Humano - ","cartas:",jogadorHumano[0].texto,jogadorHumano[1].texto," - pontuação ",somaHumano)
   console.log("Jogado Robô - ","cartas:",jogadorRobo[0].texto,jogadorRobo[1].texto," - pontuação ",somaHumano)
   console.log("Empate!")
}

//

const confirme2 = confirm("Deseja continuar o jogo?")

let jogadorHuman = [0]

let jogadorRoboto = [0]

let novaCarta = 0

let novaCarta1 = 0

let novaCarta2 = 0

let pontos = 0

let pontosH = pontos

let pontosR = pontos

let index1 = 0



if(confirme2){
   let human1 = comprarCarta()
   let human2 = comprarCarta()
   let roboto1 = comprarCarta()
   let roboto2 = comprarCarta()
   jogadorHuman.push(human1,human2)
   jogadorRoboto.push(roboto1,roboto2)
   let mensagemHumano = ("Suas cartas são "+jogadorHuman.map(i => i.texto))
   let mensagemRoboto = ("A carta revelada do Robô é "+jogadorRoboto.map(i => i.texto ))
   let mensagemMaisCartas = ("Deseja comprar mais uma carta?")
   pontosH= (jogadorHuman.reduce((acumulado, numero) => acumulado + numero))
   novaCarta = confirm(mensagemHumano+mensagemRoboto+"\n"+mensagemMaisCartas)
}  if (novaCarta === true || novaCarta1 === true || pontosH < 21 ) {
   for(index = 0; index <= 1; index++){
      let human3 = comprarCarta()
      jogadorHuman.push(human3)
      mensagemHumano = ("Suas cartas são "+jogadorHuman.map(i => i.texto))
      mensagemRoboto = ("A carta revelada do Robô é "+jogadorRoboto.map(i => i.texto ))
      mensagemMaisCartas = ("Deseja comprar mais uma carta?")
      pontosH = (jogadorHuman.reduce((acumulado, n) => acumulado + n.valor))
      novaCarta1 = confirm(mensagemHumano+mensagemRoboto+"\n"+mensagemMaisCartas)
         if( novaCarta1 === false || novaCarta1 === true || novaCarta === false || pontosH >= Number(21) || pontosH == Number(21)) { 
            for(index = 0; index <= 2; index++){
               roboto3 = comprarCarta()
               jogadorRoboto.push(roboto3)
               let mensagemH = ("Suas cartas são "+jogadorHuman.map(i => i.texto))
               let mensagemR = ("Apontuação do computador é "+jogadorRoboto.map(i => i.texto ))
               mensagemMaisCartas = ("Deseja comprar mais uma carta?")
               pontosR = (jogadorRoboto.reduce((acumulado, n) => acumulado + n.valor))
               novaCarta2 = confirm(mensagemHumano+mensagemRoboto+"\n"+mensagemMaisCartas)
               if( novaCarta1 === false || novaCarta2 === false || pontosR >= Number(21) || pontosR ==Number(21)) {
               } else if ( pontosH > pontosR) {
                 let aviso = alert(mensagemH+"."+" Sua pontuação é "+pontosH+"\n"+mensagemR+"A pontuação do computador é "+pontosR+"."+"\n"+ "O humano é o vencedor!")
               } else if ( pontosH < pontosR) {
                  let aviso = alert(mensagemH+"."+" Sua pontuação é "+pontosH+"\n"+mensagemR+"A pontuação do computador é "+pontosR+"."+"\n"+ "O Robô é o vencedor!")  
               } else if ( pontosH = pontosR) {
                  let aviso = alert(mensagemH+"."+" Sua pontuação é "+pontosH+"\n"+mensagemR+"A pontuação do computador é "+pontosR+"."+"\n"+ "Empate!")
               }  
               
            }
         
         }
      
      
   }
}






