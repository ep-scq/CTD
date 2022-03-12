/* 
this.Alunos1 = console.log(Ezio Roberto Lorenzetti)
this.Alunos2 = console.log(Renato Franco Pina)
this.Alunos3 = console.log(Filipe Campos Fontes)
this.Alunos4 = console.log(Elisandro Maciel)
this.Alunos5 = console.log(Allan Cardoso)
this.Alunos6 = console.log(Louise Nascimento)
this.Turma = console.log(2 Noite)
this.Professor = console.log(Lucas Feitosa)

Function premiação(alunos[i]) { 
    Ferias e aprovação, kkkkkkkkkk
}

*/


/* Passo 1
Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números).
Crie um construtor para ele e importe-o como o módulo aluno. */

/* Passo 2
Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. */


// Objeto aluno



let aluno = {
    Aluno:        
        function Aluno(_nome, _qFaltas, _notas, _Media, _faltas) {
        this.nome = _nome;
        this.qtDeFaltas = _qFaltas;
        this.notas = _notas;        
        this.calcMed = function(){
            let soma = 0;
            for (let i = 0; i < this.notas.length; i++){
                soma += this.notas[i]
            }
            const media = soma/this.notas.length;
            return media.toFixed(2);
        }   
        this.faltas = function(){
            let Falta = this.qtDeFaltas + 1;
            return Falta;
        }
    }
}
module.exports = aluno;


// Construção de um alunos via função construtora

let aluno1 = new aluno.Aluno('Renato Pina', 1, [3,6,8], this.calcMed, this.faltas)
let aluno2 = new aluno.Aluno('Ezio Lorenzetti', 3, [7,6,9], this.calcMed, this.faltas)
let aluno3 = new aluno.Aluno('Filipe Campos', 2, [8,5,9], this.calcMed, this.faltas)
let aluno4 = new aluno.Aluno('Louise Nascimento', 4, [3,4,9], this.calcMed, this.faltas)
let aluno5 = new aluno.Aluno('Allan Cardoso', 4, [9,5,9], this.calcMed, this.faltas)
let aluno6 = new aluno.Aluno('Elissandro Maciel', 1, [8,4,8], this.calcMed, this.faltas)

aluno.listaDeAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6]


console.log(aluno1)
console.log('A média do aluno ' + aluno1.nome + ' é: ' + aluno1.calcMed())
console.log('As faltas do aluno ' + aluno1.nome + ' eram: ' + aluno1.qtDeFaltas + ' Agora são: ' + aluno1.faltas())
console.log('')

console.log('')
console.log(aluno2)
console.log('A média do aluno ' + aluno2.nome + ' é: ' + aluno2.calcMed())
console.log('As faltas do aluno ' + aluno2.nome + ' eram: ' + aluno2.qtDeFaltas + ' Agora são: ' + aluno2.faltas())
console.log('')

console.log('')
console.log(aluno3)
console.log('A média do aluno ' + aluno3.nome + ' é: ' + aluno3.calcMed())
console.log('As faltas do aluno ' + aluno3.nome + ' eram: ' + aluno3.qtDeFaltas + ' Agora são: ' + aluno3.faltas())
console.log('')

console.log('')
console.log(aluno4)
console.log('A média do aluno ' + aluno4.nome + ' é: ' + aluno4.calcMed())
console.log('As faltas do aluno ' + aluno4.nome + ' eram: ' + aluno4.qtDeFaltas + ' Agora são: ' + aluno4.faltas())
console.log('')

console.log('')
console.log(aluno5)
console.log('A média do aluno ' + aluno5.nome + ' é: ' + aluno5.calcMed())
console.log('As faltas do aluno ' + aluno5.nome + ' eram: ' + aluno5.qtDeFaltas + ' Agora são: ' + aluno5.faltas())

console.log('')
console.log(aluno6)
console.log('A média do aluno ' + aluno6.nome + ' é: ' + aluno6.calcMed())
console.log('As faltas do aluno ' + aluno6.nome + ' eram: ' + aluno6.qtDeFaltas + ' Agora são: ' + aluno6.faltas())
