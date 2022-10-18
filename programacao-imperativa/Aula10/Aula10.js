let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])

let str = "una string qualquer"
let grupoDeAmigos2 = [ [45, 89, 0],
 ["Digital", "House", true], 
 ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos2[2][grupoDeAmigos2[2].length - 1])

let imprimirInverso = [1,2,3,4,5]
imprimirInverso.reverse()
console.log(imprimirInverso)

let somarArray = [10,3,10,4]
let soma = 0
for (let x=0; x<somarArray.length; x++){
    soma += parseInt(somarArray[x]);
    console.log(soma)
}

