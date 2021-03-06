let bodyReference = document.querySelector('body')
let changeClassButtonRefernece = document.querySelector('#changeClassButton')

function changeTheme() {

    bodyReference.classList.toggle('dark')

    if( bodyReference.classList.contains('dark') ) {

        changeClassButtonRefernece.innerText = '☀️'

    } else {

        changeClassButtonRefernece.innerText = '🌙'

    }

}

let posts = [
    {
        titulo: "O tigre",
        texto: "O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.",
        imagem: "./imagens/tiger.jpg"
    },
    {
        titulo: "O leão",
        texto: "O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.",
        imagem: "./imagens/leon.jpg"
    },
    {
        titulo: "O leopardo",
        texto: "O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra (melanista).",
        imagem: "./imagens/leopardo.jpg"
    },
    {
        titulo: "A pantera negra",
        texto: " A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.",
        imagem: "./imagens/pantera-negra.jpg"
    },
    {
        titulo: "O jaguar",
        texto: " O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).",
        imagem: "./imagens/jaguar.jpg"
    },
    {
        titulo: "O guepardo",
        texto: "O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.",
        imagem: "./imagens/chita.jpg"
    },
    {
        titulo: "A onça-pintada",
        texto: "A onça-pintada (português brasileiro) ou jaguar (português europeu) (nome científico: Panthera onca), também conhecida como onça-preta (no caso dos indivíduos melânicos), é uma espécie de mamífero carnívoro da família dos felídeos (Felidae) encontrada nas Américas. É o terceiro maior felino do mundo, após o tigre e o leão, e o maior do continente americano. Apesar da semelhança com o leopardo (Panthera pardus), a onça-pintada é evolutivamente mais próxima do leão (Panthera leo).",
        imagem: "./imagens/onça-pintada.jpg"
    },
    {
        titulo: "A jaguatirica",
        texto: "A jaguatirica ou ocelote é um mamífero carnívoro da família dos felídeos e gênero Leopardus. São reconhecidas 10 subespécies, e o gato-maracajá é a espécie mais próxima da jaguatirica. Ocorre desde o sul dos Estados Unidos até o norte da Argentina, mas já foi extinta em algumas regiões de sua distribuição geográfica.",
        imagem: "./imagens/jaguatirica.jpg"
    },
]

let mainContent = document.querySelector('#mainContent')

for (let post of posts) {
    mainContent.innerHTML += `
    <div class="item">
        <img src="${post.imagem}">
        <h2>${post.titulo}</h2>
        <p>${post.texto}</p>
    </div>
    `
}
