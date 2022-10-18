let meuArray = ['Star Wars', true, 23]
console.log(meuArray[0])
console.log(meuArray.length)
{
let cores = ["Roxo", "Laranja", "Azul"]
cores.push("Violeta") // Retorna 4
console.log(cores)
// ["Roxo", "Laranja", "Azul", "Violeta"]
cores.push("Cinza", "Ouro") // Retorna 6
console.log(cores)
// ["Roxo", "Laranja", "Azul", "Violeta", "Cinza", "Ouro"]
}
{
let cores = ["Roxo", "Laranja", "Azul"]
let ultimaCor = cores.pop()
console.log(cores) // ["Roxo", "Laranja"]
console.log(ultimaCor) // Azul
}
{
let cores = ["Roxo", "Laranja", "Azul"]
let primeiraCor = cores.shift()
console.log(cores) // ["Laranja", "Azul"]
console.log(primeiraCor) // Roxo
}
{
let cores = ['Roxo', 'Laranja', 'Azul'];
cores.unshift('Violeta'); // Retorna 4
console.log(cores);
// ["Violeta", "Roxo", "Laranja", "Azul"]
cores.unshift('Cinza', 'Ouro') // Retorna 6
console.log(cores);
// ["Cinza", "Ouro", "Violeta", "Roxo", "Laranja", "Azul"]
}
{
let cores = ['Roxo', 'Laranja', 'Azul'];
let separadosPorVirgula = cores.join()
console.log(separadosPorVirgula)
// "Roxo,Laranja,Azul"
let separdosPorTraco = cores.join(" - ")
console.log(separdosPorTraco)
// "Roxo - Laranja - Azul"
}
{
let cores = ['Roxo', 'Laranja', 'Azul', 'Laranja'];
console.log(cores.lastIndexOf("Laranja"))
// Ele encontrou o que procurava.
// Retorna 3, que é o índice do elemento encontrado.
console.log(cores.indexOf("Abacaxi"))
// Não encontrou o que procurava. Retorno -1.
}
{
let cores = ['Roxo', 'Laranja', 'Azul'];
console.log(cores.includes("Laranja"))
// Ele encontrou o que procurava. Retorna true
console.log(cores.includes("Abacaxi"))
// Não encontrou o que procurava. Retorna false
}
