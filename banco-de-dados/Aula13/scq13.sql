-- Referência de Tabelas #1 - Faça uma consulta no banco de dados onde mostre todos os registros
-- que contenham músicas com seus gêneros, E que o compositor seja Willie Dixon, E que tenham o gênero Blues.
-- A 2ª música encontrada foi: Pretty Baby
select nome, id_generos, compositor from cancoes where compositor = 'Willie Dixon';
select distinct cancoes.nome, cancoes.id_genero, generos.nome, cancoes.compositor from cancoes
inner join generos on cancoes.id_genero = generos.id where cancoes.compositor = 'Willie Dixon';

-- Joins #1 - Faça uma consulta ao nosso banco de dados que nos retorna as únicas músicas
-- que possuem gênero rock. Qual é a música que aparece em quarto lugar? Restless and Wild
select distinct cancoes.nome, cancoes.id_genero, generos.nome, compositor from cancoes
inner join generos on cancoes.id_genero = generos.id where generos.nome = 'Rock';

-- Joins #2 -Faça uma consulta ao nosso banco de dados que nos traga o título do álbum e o
-- autor, para saber se o que estamos vendendo está correto.Qual o título do álbum que aparece
-- na posição número 10? Audioslave
select albuns.titulo, albuns.id_artista, artistas.nome from albuns
inner join artistas on albuns.id_artista = artistas.id;

-- Joins #3 - Faça uma consulta que retorne o nome das músicas e o tipo de arquivo
-- "MPEG audio file". Qual o nome da músca que aparece na posição número 4? Inject The Venom
select cancoes.nome, cancoes.id_tipo_de_arquivo, tipos_de_arquivo.nome from cancoes
inner join tipos_de_arquivo on cancoes.id_tipo_de_arquivo = tipos_de_arquivo.id
where tipos_de_arquivo.nome = 'MPEG audio file';

-- Distinct #1 - Faça uma consulta na tabela empregados.
-- O cargo que aparece na 3a. posição é: Sales Support Agent
select distinct titulo from empregados;

-- Distinct #2 - Ranking cancoes: Faça uma consulta com o nome de todas as músicas
-- que estão em uma lista de reprodução, e o nome da lista de reprodução a que pertencem.
-- Observação! Tenhamos cuidado para não repetir os nomes das músicas.Para esta consulta,
-- teremos que usar informações das tabelas cancoes, cancoes_playlists e playlists.
-- O título da música na 5a. posição é:
select distinct cancoes.nome, playlists.nome from cancoes
inner join cancoes_playlists on cancoes.id = cancoes_playlists.id_cancao
inner join playlists on playlists.nome = cancoes_playlists.id_playlist;