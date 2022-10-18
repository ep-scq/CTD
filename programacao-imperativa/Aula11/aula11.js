let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella", "Vingadores"]
let desenhos = ["One Peace", "Naruto", "Dragon Ball"]
/* function convertirAMayusculas(array){
    array[0] = array[0].toUpperCase()
    array[1] = array[1].toUpperCase()
    array[2] = array[2].toUpperCase()
    array[3] = array[3].toUpperCase()
    array[4] = array[4].toUpperCase()
    return array
  }
  console.log(convertirAMayusculas(peliculas)) */

function converteMaiusculo(lista){
    for (let i=0; i < lista.length; i++){
       lista[i] = lista[i].toUpperCase()
    }
    return lista
}
//console.log(converteMaiusculo(peliculas))
converteMaiusculo(peliculas)
/* function pasajeDeElementos(array1, array2) { 
    array1.push(array2.pop().toUpperCase()) 
    array1.push(array2.pop().toUpperCase()) 
    array1.push(array2.pop().toUpperCase()) 
    return array1
   }
console.log(pasajeDeElementos(peliculas, desenhos)) */

function passagemElementos(lista1, lista2){
    let tamanhoLista2 = lista2.length
    for (let i=0; i<tamanhoLista2; i++){
    lista1.push(lista2.pop().toUpperCase()) 
    }
        return lista1
}
console.log(passagemElementos(peliculas, desenhos))

