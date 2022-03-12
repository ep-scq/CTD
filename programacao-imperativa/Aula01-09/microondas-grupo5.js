/*
GRUPO Sala 5 
Alunos: Eduardo Seiji Sakamoto; 
        Anderson Ferreira N Dos Santos; 
        Murilo Alex Aparecido da Silva; 
        Thiago Perez Funari; 
        Daniel Marques do Nascimento      
*/

function tempoComida(comida) {
  let tempo = 0
  switch (comida) {
    case 'pipoca':
      tempo = 10
      break
    case 'macarrao':
      tempo = 8
      break
    case 'carne':
      tempo = 15
      break
    case 'feijao':
      tempo = 12
      break
    case 'brigadeiro':
      tempo = 8
      break
    default:
      return 'Prato inexistente....'
  }
  return tempo
}

function microondas(comida, tempo) {
  let tempoPadrao = tempoComida(comida)
  if (tempo < tempoPadrao) {
    console.log('Tempo insuficiente')
  } else if (tempo == tempoPadrao || tempo < 2 * tempoPadrao) {
    console.log('Prato pronto, bom apetite!!!')
  } else if (tempo >= 2 * tempoPadrao && tempo < 3 * tempoPadrao) {
    console.log('Comida queimou')
  } else if (tempo >= 3 * tempoPadrao) {
    console.log('kabummm')
  } else {
    console.log('Prato inexistente..')
  }
  console.log('Pi Pi Piii!!!')
}

microondas('feijao', 24)
