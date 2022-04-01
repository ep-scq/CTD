let cardRef = document.querySelector('.card')
let randomRef = document.querySelector('#random')

// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
let apiResult = fetch('https://randomuser.me/api/')
  .then(response => {
    return response.json()
  })
  .then(data => {
    //manipulamos a resposta
    console.log(data)
    renderizarDadosUsuario(data)
  })

function renderizarDadosUsuario(dados) {
  /* -------------------------------- Tarefa 1 -------------------------------- */
  // Aqui devem desenvolver uma função que seja exibida na tela:
  // a foto, o nome completo do usuário e o e-mail.
  // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.

  let lastName = dados.results[0].name.last
  cardRef.innerHTML = `<img src="${dados.results[0].picture.large}" >`
  cardRef.innerHTML += `<div class="nome"><b>${
    dados.results[0].name.title
  } ${lastName.toUpperCase()}, ${dados.results[0].name.first} </b></div>`
  cardRef.innerHTML += `<p>${dados.results[0].email} </p>`
}

/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.
randomRef.addEventListener('click', e => {
  e.preventDefault()
  fetch('https://randomuser.me/api/').then(response =>
    response.json().then(data => renderizarDadosUsuario(data))
  )
})