-- Mesa Trabalho Aula 18 
-- Grupo 5: Janaina de Souza, Rodrigo da Silva, Elissandro Maciel, Lucas Mota, Allan Cardoso e Murilo Silva

USE EMARKET;

SELECT *
FROM EMPREGADOS;

-- Crie uma SP que liste os sobrenomes e nomes dos empregados, ordenados alfabeticamente.
-- Invoque a SP para verificar o resultado.

DELIMITER $$
CREATE PROCEDURE SP_EMPREGADOS ()
BEGIN
	SELECT CONCAT(NOME, ' ',SOBRENOME) AS 'NOME E SOBRENOME'
    FROM EMPREGADOS
	ORDER BY NOME;
END $$

CALL SP_EMPREGADOS();

-- Crie uma SP que leva o nome de uma cidade e lista os funcionários dessa cidade
-- Invoque a SP para listar os empregados de Seattle.

DELIMITER $$
CREATE PROCEDURE SP_EMPREGADO_CIDADE (IN BUSCA_CIDADE VARCHAR(30))
BEGIN
	SELECT CONCAT(NOME, ' ',SOBRENOME) AS 'NOME E SOBRENOME'
    FROM EMPREGADOS
    WHERE CIDADE = BUSCA_CIDADE;   
    
END $$

CALL SP_EMPREGADO_CIDADE ('SEATTLE');

-- Crie uma SP que recebe o nome de um país e retorne o número de clientes naquele país.
-- Invoque a SP para consultar a quantidade de clientes de Portugal.

DELIMITER $$
CREATE PROCEDURE SP_QTDD_CLIENTES_PAIS (IN BUSCA_PAIS VARCHAR(30))
BEGIN
	SELECT COUNT(CLIENTEID)
    FROM CLIENTES
    WHERE PAIS = BUSCA_PAIS;   
    
END $$

CALL SP_QTDD_CLIENTES_PAIS ('PORTUGAL');

-- Crie uma SP que receba um número e liste os produtos cujo estoque está abaixo desse número. 
-- O resultado deve mostrar o nome do produto, o Estoque atual e o nome da categoria à qual o produto pertence.
-- Liste os produtos com menos de 10 unidades no estoque;
-- Liste os produtos sem estoque.

DELIMITER $$
CREATE PROCEDURE SP_ESTOQUE (IN QTDD VARCHAR(30))
BEGIN
SELECT 
P.PRODUTONOME AS 'NOME DO PRODUTO',
P.UNIDADESESTOQUE AS 'QTDD ESTOQUE',
C.CATEGORIANOME AS 'CATEGORIA'
FROM PRODUTOS P
INNER JOIN CATEGORIAS C
ON C.CATEGORIAID = P.CATEGORIAID
WHERE P.UNIDADESESTOQUE <= QTDD;
END $$

CALL SP_ESTOQUE (0);

-- Crie uma SP que receba uma porcentagem e lista os nomes dos produtos que foram vendidos com desconto 
-- igual ou superior ao valor indicado, indicando, também,  o nome do cliente a quem foi vendido.
-- Liste as informações dos produtos que foram vendidos com um desconto superior a 10%.










