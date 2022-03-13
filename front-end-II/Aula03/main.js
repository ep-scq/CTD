import {
    somar,
    subtrair,
    multiplicar,
    dividir
} from './operacoes.js'

calc()


function calc() {
    let conta = prompt('Digite o tipo de conta que deseja: ( +, -, * ou / )');

    let num1 = parseFloat(prompt('primeiro numero: '));
    let num2 = parseFloat(prompt('segundo numero: '));

    if (conta === '+') {
        alert('Resultado da soma: ' + somar(num1, num2))
        calc()
    } else if (conta === '-') {
        alert('Resultado da subtração: ' + subtrair(num1, num2))
        calc()
    } else if (conta === '*') {
        alert('Resultado da multplicação: ' + multiplicar(num1, num2))
        calc()
    } else if (conta === '/') {
        alert('Resultado da divisão: ' + dividir(num1, num2))
        calc()
    }

}