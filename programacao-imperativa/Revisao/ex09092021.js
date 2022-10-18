/* 16. Escreva um programa para gerar o invertido de um número com três algarismos 
(exemplo: o invertido de 498 é 894). */

// Usamos o número como string, para facilitar o exercício
let num = "498565793";
let numInvertido = "";

// Estrutura "básica" do for
for (let i = 0; i < num.length; i++) {

}

// Nosso for, que itera pela string de forma invertida
for (let i = num.length - 1; i >= 0; i = i - 1) {
    numInvertido = numInvertido + num[i];
}

// Hack do for "fácil"
/* for (let char of num) {
    console.log(char);
} */

console.log(numInvertido);