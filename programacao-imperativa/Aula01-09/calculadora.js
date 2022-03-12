console.log("Calculadora nível I")
function adicionar(x,y){
    return x + y
}

function subtracao(x,y){
    return x - y
}

function multiplicacao(x,y){
    return x * y
}

function divisao(x,y){
    return x / y
}

console.log("Calculadora nínel II")
console.log("-------------- Teste de Operações / Calculadora --------------")
console.log(adicionar(5,10))
console.log(subtracao(5,10))
console.log(multiplicacao(5,10))
console.log(divisao(5,10))
console.log(divisao(0,10))
console.log(divisao(5,0))

console.log("Calculadora nível III - Funções Extras")

// Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
console.log("1. Quadrado de um número")
function quadradoDoNumero(x){
    let power = multiplicacao(x,x)
    return power
}
console.log(quadradoDoNumero(5))

// Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
console.log("2. Média de três números")
function mediaDeTresNumeros(x,y,z){
    let media = adicionar(x,y)
    media = (media+z)/3
    return media
}
console.log(mediaDeTresNumeros(10,20,30))

// Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
console.log("3. Calculo de porcentagem")
function calculoDePorcentagem(x,y){
    return multiplicacao(x,y)/100
}
console.log(calculoDePorcentagem(300,15))

// Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
console.log("4. Gerador de porcentagem")
function geradorDePorcentagem(x,y){
    return divisao(x,y)*100
}
console.log(geradorDePorcentagem(175,250)+" %")

// Dica: Para ativar a quebra de linha automática, no VSCODE vai em /Arquivo/Preferências/Configurações/Usuário/Comumente usado/Editor: Word Wrap. Coloca em on.