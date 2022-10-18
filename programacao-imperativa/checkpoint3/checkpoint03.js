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



/* Passo 3
Crie o método que permite adicionar alunos à lista do curso, ou seja, 
quando chamamos nosso método em nosso objeto curso, deverá adicionar 
um aluno a mais na propriedade lista de estudantes do objeto curso. */


/* Passo 4
Crie o método que permite adicionar alunos à lista do curso, ou seja, 
quando chamamos nosso método em nosso objeto curso, deverá adicionar um 
aluno a mais na propriedade lista de estudantes do objeto curso.
*/

// Require do objeto aluno + objeto curso com adição de novo participante

let alunos = require('./aluno/aluno')


let curso = {
    nomeCurso: 'Certified Tech Developer - DH',
    notaAprova: 7,
    faltasMax: 4,
    listaAlunos: alunos.listaDeAlunos,
    addAluno: function(){
        let novoAluno = new alunos.Aluno('Tião Macalé', 3,[8,10,8], this.calcMed,this.faltas)
            this.listaAlunos.push(novoAluno)
    }, 
    aprovacaoAluno: function(aluno){

        if(alunos.listaDeAlunos[aluno].calcMed() >= curso.notaAprova && alunos.listaDeAlunos[aluno].qtDeFaltas < curso.faltasMax){
            
            console.log('aprovação: ' + true);

        } else if (alunos.listaDeAlunos[aluno].calcMed() >= (curso.notaAprova * 1.1) && alunos.listaDeAlunos[aluno].qtDeFaltas == curso.faltasMax){
            
            console.log(true);

        } else { 
            
            console.log(false);
            
        }
    },
    aprovacaoAlunos: function(){

        for (let i = 0; i < alunos.listaDeAlunos.length; i++){

            if(alunos.listaDeAlunos[i].calcMed() >= curso.notaAprova && alunos.listaDeAlunos[i].qtDeFaltas < curso.faltasMax){
                
                console.log('O Aluno ' + alunos.listaDeAlunos[i].nome + ' foi APROVADO com a média ' + alunos.listaDeAlunos[i].calcMed() + ' com ' + alunos.listaDeAlunos[i].qtDeFaltas + ' faltas: ' + true);

            } else if (alunos.listaDeAlunos[i].calcMed() >= (curso.notaAprova * 1.1) && alunos.listaDeAlunos[i].qtDeFaltas == curso.faltasMax){
                
                console.log('O Aluno ' + alunos.listaDeAlunos[i].nome + ' foi APROVADO com a média ' + alunos.listaDeAlunos[i].calcMed() + ' com ' + alunos.listaDeAlunos[i].qtDeFaltas + ' faltas: ' + true);

            } else { 
                
                console.log('O Aluno ' + alunos.listaDeAlunos[i].nome + ' NÃO foi APROVADO com a média ' + alunos.listaDeAlunos[i].calcMed() + ' com ' + alunos.listaDeAlunos[i].qtDeFaltas + ' faltas: ' + false);

            }
        }
    }
}

curso.addAluno();


console.log(alunos.listaDeAlunos[0])
console.log(alunos.listaDeAlunos[0].calcMed())
console.log(alunos.listaDeAlunos[0].qtDeFaltas)
curso.aprovacaoAluno(0)
console.log('')

console.log('')
console.log(alunos.listaDeAlunos[1])
console.log(alunos.listaDeAlunos[1].calcMed())
console.log(alunos.listaDeAlunos[1].qtDeFaltas)
curso.aprovacaoAluno(1)
console.log('')

console.log('')
console.log(alunos.listaDeAlunos[2])
console.log(alunos.listaDeAlunos[2].calcMed())
console.log(alunos.listaDeAlunos[2].qtDeFaltas)
curso.aprovacaoAluno(2)
console.log('')

console.log('')
console.log(alunos.listaDeAlunos[3])
console.log(alunos.listaDeAlunos[3].calcMed())
console.log(alunos.listaDeAlunos[3].qtDeFaltas)
curso.aprovacaoAluno(3)
console.log('')

console.log('')
console.log(alunos.listaDeAlunos[4])
console.log(alunos.listaDeAlunos[4].calcMed())
console.log(alunos.listaDeAlunos[4].qtDeFaltas)
curso.aprovacaoAluno(4)
console.log('')

console.log('')
console.log(alunos.listaDeAlunos[5])
console.log(alunos.listaDeAlunos[5].calcMed())
console.log(alunos.listaDeAlunos[5].qtDeFaltas)
curso.aprovacaoAluno(5)


curso.aprovacaoAlunos()