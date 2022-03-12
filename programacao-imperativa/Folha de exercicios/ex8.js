//8 - Dado que a fórmula para conversão de Fahrenheit para Celsius é JS = 5/9 (F – 32), leu um valor de temperatura em Fahrenheit e exibi-lo em Celsius
function celsius(fah) {
    let resultado = (5 / 9) * (fah - 32)
    return resultado //Serve para guardar o resultado para uso posterior
}
console.log(celsius(78))