//7 - Solicitar a idade de uma pessoa em dias e informar na tela a idade em anos, meses e dias.
function idade(dias) {
    let anos = Math.trunc(dias / 365)
    let restoAnos = dias % 365
    let meses = Math.trunc(restoAnos / 30)
    let diasRest = restoAnos % 30
    console.log(anos, meses, diasRest)
}
idade(15120)