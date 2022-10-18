USE EMarket;

-- GROUP BY
SELECT
	ClienteID
FROM Faturas
GROUP BY
	ClienteID
ORDER BY
	ClienteID;

-- DISTINCT
SELECT
	DISTINCT
	ClienteID
FROM Faturas
ORDER BY
	ClienteID;

-- GROUP BY COM HAVING
SELECT
	ClienteID,
    COUNT(*)
FROM Faturas
GROUP BY
	ClienteID
HAVING
	COUNT(*) > 30
ORDER BY
	ClienteID;

-- DISTINCT
SELECT
	DISTINCT
	ClienteID
FROM Faturas
HAVING
	COUNT(*) > 30
ORDER BY
	ClienteID;

-- GROUP BY COM SUM. AVG E COUNT
USE musimundos;

SELECT
	*
FROM faturas;

-- CONSULTA PARA BUSCAR UM ÚNICO CLIENTE, O SOMATÓRIO DE TODAS AS SUAS FATURAS, BEM COMO A MÉDIA E A QUANTIDADE DE FATURAS QUE O MESMO POSSUI
SELECT
	id_cliente,
    SUM(valor_total) AS 'Somatório das suas faturas',
    FORMAT(AVG(valor_total), 2) AS 'Média do valor de suas faturas',
    COUNT(*) AS 'Quantidade de faturas do cliente'
FROM faturas
GROUP BY
	id_cliente
ORDER BY
	id_cliente;

-- JOINS
-- REPRESENTAÇÃO 1:1
USE filmes_db;

SELECT
	*
FROM filmes;

SELECT
	*
FROM generos;

SELECT
	f.titulo AS 'Nome do filme',
    g.nome AS 'Genero do filme'
FROM filmes f
INNER JOIN generos g ON g.id = f.genero_id;

-- REPRESENTAÇÃO 1:N
SELECT
	*
FROM series;

SELECT
	*
FROM temporadas;

SELECT
	t.titulo AS 'Titulo da temporada',
	s.titulo AS 'Nome da serie',
    t.numero AS 'Nr temporada'
FROM series AS s
INNER JOIN temporadas AS t ON t.serie_id = s.id
WHERE
	s.titulo = 'Game of Thrones';

-- REPRESENTAÇÃO N:N
SELECT
	*
FROM atores;

SELECT
	*
FROM ator_filme;

SELECT
	f.titulo AS 'Nome do filme',
    a.nome AS 'Nome do ator'
FROM filmes AS f
INNER JOIN ator_filme AS af ON af.movie_id = f.id
INNER JOIN atores AS a ON a.id = af.ator_id
ORDER BY
	a.nome;