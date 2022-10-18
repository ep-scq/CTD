//12 - Faça um algoritmo que transforme uma velocidade fornecida em m/s pelo usuário para Km/h. Para tal, multiplique o valor em m/s por 3,6.
function velocidade(ms){
    let kh = 3.6
    let resultado = ms * kh
    return resultado
    
}
console.log(velocidade("20"))