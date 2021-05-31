const anoNascimento = prompt("Seu ano de Nascimento")

const votaNaoVota = (idade, anoAtual) => {
    
    const voto = anoAtual - idade >= 16 ? alert("Você pode votar") : alert("Você não pode votar")
 
    return voto
      
 }
 
 
 

 
votaNaoVota(anoNascimento, 2021)