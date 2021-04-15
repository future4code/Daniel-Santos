


//1.

const boasVindas = alert("Bem vindos ao jogo de Blackjack")
console.log("Bem vindos ao jogo de Blackjack")



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
} else {
   console.log("Acabou o Jogo!")
}  



//6 7.

let somaHumano = jogadorHumano[0].valor + jogadorHumano[1].valor

let somaRobo = jogadorRobo[0].valor + jogadorRobo[1].valor

console.log("Jogador Humano - ","cartas:",jogadorHumano[0].texto,jogadorHumano[1].texto," - pontuação ",somaHumano)
console.log("Jogador Robô - ","cartas:",jogadorRobo[0].texto,jogadorRobo[1].texto," - pontuação ",somaRobo)

if(somaHumano > somaRobo) {
   console.log("Jogador Humano Venceu!")
}else if ( somaHumano < somaRobo){
   console.log("Jogador Robô Venceu!")

}else  {
   console.log("Empate!")
}

console.log("Fim de Jogo")








