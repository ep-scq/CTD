-- 1. A partir dos dados dos clientes, eu desejo os 10 primeiros registros da seguinte forma:
SELECT
	CONCAT(primeiro_nome,' ', ultimo_nome) AS NOME,
    ativo AS 'STATUS',
    data_criacao AS 'DATA DE ENTRADA',
    loja_id AS 'ID DA LOJA',
    EN.endereco AS 'ENDEREÇO 1',
    EN.endereco2 AS 'ENDEREÇO 2',
    EN.telefone AS TELEFONE,
    EN.cep AS CEP,
    CID.cidade AS CIDADE,
    P.pais AS PAIS
    FROM CLIENTE CL
    INNER JOIN endereco EN ON CL.endereco_id = EN.endereco_id
    INNER JOIN cidade CID ON CID.cidade_id = EN.cidade_id
    INNER JOIN pais P ON P.pais_id = CID.pais_id
    LIMIT 10;
    
-- 2. Eu desejo saber quantos clientes estão sem endereço
SELECT COUNT(*)
FROM cliente WHERE endereco_id = '';

-- 3. Eu desejo saber os filmes alugados a partir de um cliente informado pelo ID, organizados
-- em ordem de data de aluguel, da seguinte forma:
SELECT
CL.cliente_id AS 'ID do Cliente',
CONCAT(CL.primeiro_nome,' ', CL.ultimo_nome) AS NOME,
FIL.titulo AS 'NOME DO FILME ALUGADO',
FIL.descricao AS 'DESCRIÇÃO DO FILME ALUGADO',
IDI.nome AS IDIOMA,
FIL.classificacao AS 'CLASSIFICAÇÃO',
DATE_FORMAT(AL.data_de_aluguel, '%d/%m/%Y') AS 'DATA DE ALUGUEL',
DATE_FORMAT(AL.data_de_devolucao, '%d/%m/%Y') AS 'DATA DE DEVOLUÇÃO',
CONCAT(FUN.primeiro_nome, ' ', FUN.ultimo_nome) AS 'FUNCIONARIO'
FROM aluguel AL
INNER JOIN cliente CL ON CL.cliente_id = AL.cliente_id
INNER JOIN inventario INV ON INV.inventario_id = AL.inventario_id
INNER JOIN filme FIL ON FIL.filme_id = INV.filme_id
INNER JOIN idioma IDI ON IDI.idioma_id = FIL.idioma_id
INNER JOIN funcionario fun ON al.funcionario_id = fun.funcionario_id
WHERE CL.cliente_id = 2
ORDER BY AL.data_de_aluguel;

-- 4. Eu desejo saber a partir de um cliente informado pelo ID, quantos filmes eles tem
-- alugados da seguinte forma:
SELECT
CL.cliente_id AS 'ID do Cliente',
CONCAT(CL.primeiro_nome,' ', CL.ultimo_nome) AS NOME,
COUNT(*) AS 'QUANTIDADE DE ALUGUEIS'
FROM aluguel AL
INNER JOIN cliente CL ON CL.cliente_id = AL.cliente_id
WHERE CL.cliente_id = 2;

-- 5. Eu desejo saber, quem são os clientes que estão no meu TOP 10, ou seja, os clientes
-- que tem mais filmes alugados, em ordem decrescente, da seguinte forma:
select 
	cl.cliente_ID AS 'ID DO CLIENTE', 
    CONCAT(cl.primeiro_nome, ' ', cl.ultimo_nome) AS 'NOME',
    COUNT(*) AS 'QUANTIDADE DE FILMES'
FROM aluguel al
INNER JOIN cliente cl ON al.cliente_id = cl.cliente_id
GROUP BY cl.cliente_id
ORDER BY COUNT(*) DESC
LIMIT 10;

-- 6. Eu desejo saber a partir de um filme informado pelo ID, quais são os atores que atuam no
-- mesmo da seguinte forma:
SELECT
FL.filme_id AS 'ID DO FILME',
FL.titulo AS 'NOME DO FILME',
FL.descricao AS 'DESCRIÇÃO',
FL.ano_de_lancamento AS 'ANO DE LANÇAMENTO',
IDI.nome AS IDIOMA,
CONCAT(A.primeiro_nome,' ', A.ultimo_nome) AS ATOR
FROM filme_ator FA
INNER JOIN filme FL ON FA.filme_id = FL.filme_id
INNER JOIN ator A ON A.ator_id = FA.ator_id
INNER JOIN idioma IDI ON IDI.idioma_id = FL.idioma_id;

select 
	fa.ator_ID AS 'ID DO ATOR', 
    CONCAT(a.primeiro_nome, ' ', a.ultimo_nome) AS 'NOME',
    COUNT(*) AS 'quantidade filmes'
FROM filme_ator fa
INNER JOIN ator a ON a.ator_id = fa.ator_id
INNER JOIN filme fil ON fa.filme_id = fil.filme_id
GROUP BY FA.ATOR_ID;

