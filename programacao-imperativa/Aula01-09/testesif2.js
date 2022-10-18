let idade = 19;
let acesso = '';
if (idade < 16){
    acesso = 'Acesso proibido';
}else if (idade >= 16 && idade <= 18){
    acesso = 'Acesso liberado somente com acompanhante maior de idade';
}else {
    acesso = 'Acesso liberado'
}
console.log(acesso)
