import somar from './somar.js'

let primeiroNumero = converterNumero(prompt('Insira o primeiro numero'))
let segundoNumero = converterNumero(prompt('Insira o segundo numero'))

function converterNumero(numero) {

    return parseInt(numero)

}

console.log( somar(primeiroNumero, segundoNumero) )