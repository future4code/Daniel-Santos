
// Exercício 1

const pegaAntecessor = (num) => {
    return num - 1
  }

  test('Verifica se pegaAntecessor retorna o número antecessor', () => {
    expect(pegaAntecessor(1)).toBe(0)
    expect(pegaAntecessor(2)).toBe(1)
    expect(pegaAntecessor(0)).toBe(-1)
    expect(pegaAntecessor(100)).toBe(99)
    expect(pegaAntecessor(-100)).toBe(-101)
    expect(pegaAntecessor(5)).toBe(4)
  })



// Exercício 2

const Idade = (anos, meses, dias) => {
 
 const year = anos * 365

 const month = meses * 30

 return year + month + dias

}


test("Verifica se Idade retorna a idade corretamente em dias apenas", () => {

 expect(Idade(0,0,1)).toBe(1)
 expect(Idade(0,1,0)).toBe(30)
 expect(Idade(1,0,0)).toBe(365)
 expect(Idade(1,1,1)).toBe(396)

})

//Ex 3

 const retornaValor = (number) => {

    if (number > 10 ) {
        return true
    } else {
        return false
    }
 }


 test("Verifica se retornaValor, traz valores  maiores que 10 como true ", () => {

 expect(retornaValor(1)).toBe(false)
 expect(retornaValor(2)).toBe(false)
 expect(retornaValor(3)).toBe(false)
 expect(retornaValor(-1)).toBe(false)
 expect(retornaValor(10)).toBe(true)
 expect(retornaValor(100)).toBe(true)
 expect(retornaValor(1000)).toBe(true)

})

//Ex 4

 const apple = (unit) => {

    if(unit < 6 ) {
        return unit * 1,3
    } else if ( unit >= 12 ) {
        return unit * 1 
    } else {
        return unit * 1,3
    }
 }


 test('cVerifica se apple calcula o perço das maçãs corretamente', () => {
    expect(calculaPrecoMacas(1)).toBe(1.3)
    expect(calculaPrecoMacas(2)).toBe(2.6)
    expect(calculaPrecoMacas(10)).toBe(13)
    expect(calculaPrecoMacas(20)).toBe(20)
    expect(calculaPrecoMacas(100000)).toBe(100000)
 })

 //Ex 5

 const canVote = (birth, calendar,) => {
   
  const age = calendar - birth
  
  return age >= 16

}

test("Verifica se canVote, retorna idade corretamente", () => {

    expect(canVote(0,10)).toBe(false)
    expect(canVote(0,2)).toBe(false)
    expect(canVote(2000,2016)).toBe(true)
    expect(canVote(1985,2021)).toBe(true)
    
   })

// ex 6 

 const triangulo = (a, b ,c ) => {

    if(a > b + c ) {
        return false
    }

    if(b > a + c ) {
        return false
    }

    if(c > b + a ) {
        return false
    }

    return true
 }
 test("Verifica se é triangulo", () => {

    expect(triangulo(0,0,0)).toBe(false)
    expect(canVote(0,2,1)).toBe(false)
    expect(canVote(3,4,5)).toBe(true)
    expect(canVote(7,8,9)).toBe(true)
   })


// ex 7 

 const aposentar = (birth, currentYear) => {

    const age = currentYear - birth

    const workAge = currentYear - hireYear

    return age >= 65 || workAge >= 30 || (age >= 60 && workAge >= 25)

 }
 

 test('verifica se aposentar retorna a tempo de contribuição corretor', () => {
    expect(verificaAposentadoria(1990, 2006)).toBe(false)
    expect(verificaAposentadoria(1985, 2014)).toBe(false)
    expect(verificaAposentadoria(1930, 1950)).toBe(true)
    expect(verificaAposentadoria(1940, 1970)).toBe(true)
  })
