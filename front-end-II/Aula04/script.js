// Obtendo vários elementos através do nome de uma Tag
console.log('getElementsByTagName', document.getElementsByTagName('h1'))

// Obtendo vários elementos através do nome de um classe do CSS
console.log('getElementsByClassName', document.getElementsByClassName('teste'))


// Obtendo um elemento através do nome de um Id
console.log('getElementById', document.getElementById('tituloPrincipal'))

// Obtendo um elemento através do Query Selector, onde podemos obter tanto pro nome das Tags, Classes e Ids
console.log(document.querySelector('#tituloPrincipal'))

// Armazenando o valor retornado da busca pelo Id #tituloPrincipal
var tituloPrincipal = document.querySelector('#tituloPrincipal')

// Alterando propriedades do elemento tituloPrincipal
tituloPrincipal.style.color = '#202020'
tituloPrincipal.style.fontSize = '48px'