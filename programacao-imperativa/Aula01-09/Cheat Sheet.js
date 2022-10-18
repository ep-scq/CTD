/* ==========================
ATRIBUIÇÃO
========================== */

// O operador "=" serve para atribuir o valor 40 a uma variável chamada "idade"

let idade = 40

/* ==========================
ARITMÉTICOS
========================== */

// Nos permitem fazer operações matemáticas

10 + 15 //---> Soma
10 - 15 //---> Subtração
10 * 15 //---> Multiplicação
10 / 15 //---> Divisão
15++    //---> Incremento de um em um: 15 + 1
15--    //---> Decremento de um em um: 15 - 1
15 % 5  //---> Módulo. O resto obtido da divisão de 15 por 5: 0
15 % 2  //---> Módulo. O resto obtido da divisão de 15 por 2: 1

/* ==========================
COMPARAÇÃO SIMPLES
========================== */

10 == 15  // Igualdade --> false
10 != 15  // Desigualdade --> true

/* ==========================
COMPARAÇÃO ESTRITA
========================== */

10 === "10"  // Igualdade estrita (número e string) --> false
10 !== 15  // Desigualdade estrita --> true

/* ==========================
COMPARAÇÃO CONTINUAÇÃO (OUTROS EXEMPLOS)
========================== */

15 > 15  // Maior que --> false
15 >= 15  // Maior ou igual a --> true
10 < 15  // Menor que --> true
10 <= 15  // Menor ou igual a --> true

/* ==========================
OPERADORES RELACIONAIS
========================== */

/* ==========================
LÓGICOS
========================== */

// Permitem combinar valores booleanos, o resultado também retorna um booleano.
// Existem três operadores e (and), ou (or), negação (not).

// AND (&&) → todos os valores devem ser avaliados como true (verdadeiro) para que o resultado seja verdadeiro.

(10 > 15) && (10 != 20)  // false
// false        true        false

(12 % 4 == 0) && (12 != 24)  // true
//  true            true        true


// OR ( || ) → ao menos um valor deve ser avaliado como true para que o resultado seja true.

(10 > 15) || (10 != 20)  // true
// false        true        true

(12 % 5 == 0) && (12 != 12)  // false
//  false           false       false


// NOT ( ! ) → nega a condição. Se era true, será false e vice-versa.

!false  // true
!(20 > 15)  // false

// Assim como os operadores de comparação, os operadores lógicos sempre retornarão um booleano, ou seja, true ou false, como resultado.
