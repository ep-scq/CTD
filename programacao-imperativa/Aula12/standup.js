/* 
Grupo 4:
- Daniel Marques do Nascimento
- Elissandro Maciel
- Filipe Campos Fontes
- José Lucas Souza Suares
- Maiara Martinelli
*/

const alice = [23, 69, 32]
const bob = [12, 67, 43]

function encontrarGanhador(a, b) {
  let pontosA = 0
  let pontosB = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      pontosA++
    } else if (b[i] > a[i]) {
      pontosB++
    } else {
      continue
    }
  }
  let ganhador = 0
  if (pontosA > pontosB) {
    ganhador = 'Alice'
  } else if (pontosB > pontosA) {
    ganhador = 'Bob'
  } else {
    ganhador = 'Empatou :P'
  }
  return ganhador
}
console.log('o vencedor é: ' + encontrarGanhador(alice, bob))

