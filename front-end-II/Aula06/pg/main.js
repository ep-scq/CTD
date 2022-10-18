var nome = prompt("Insira seu nome")
var texto = document.createTextNode("Olá " + nome)
var p = document.createElement("p")
texto.appendChild(p)
document.body.appendChild(p)

/* erro na declaração do elemento filho. exercicio do PG */