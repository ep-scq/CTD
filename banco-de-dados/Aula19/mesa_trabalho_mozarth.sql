-- Ezio Lorenzetti, Guilherme Mello, Louise Nascimento, Mozarth Spier

-- 1

DELIMITER $$

CREATE PROCEDURE sp_get_nome_sobrenome()

BEGIN

	SELECT CONCAT(Sobrenome, ", ", Nome)
    FROM empregados
    ORDER BY 1 ASC;

END $$

CALL sp_get_nome_sobrenome();

-- 2

DELIMITER $$

CREATE PROCEDURE sp_get_empregados_cidade(IN nome_cidade VARCHAR(15))

BEGIN

	SELECT CONCAT(Sobrenome, ", ", Nome)
    FROM empregados
    WHERE Cidade = nome_cidade
    ORDER BY 1 ASC;

END $$

CALL sp_get_empregados_cidade('Seattle');

-- 3

DELIMITER $$

CREATE PROCEDURE sp_get_num_clientes_pais(IN nome_pais VARCHAR(15))

BEGIN

	SELECT Pais, COUNT(*) AS "Numero de clientes"
    FROM clientes
    WHERE Pais = nome_pais;

END $$

CALL sp_get_num_clientes_pais('Portugal');

-- 4

DELIMITER $$

CREATE PROCEDURE sp_get_produto_por_estoque(IN estoque INT)

BEGIN

	SELECT p.ProdutoNome, p.UnidadesEstoque, c.CategoriaNome 
    FROM produtos p
    INNER JOIN categorias c USING(CategoriaID)
    WHERE p.UnidadesEstoque < estoque;

END $$

CALL sp_get_produto_por_estoque(10);
CALL sp_get_produto_por_estoque(1);

-- 5

DELIMITER $$

CREATE PROCEDURE sp_get_cliente_por_desconto(IN porcentagem_desconto DOUBLE)

BEGIN

	SELECT p.ProdutoNome, c.Empresa 
    FROM detalhefatura df
    INNER JOIN produtos p USING(ProdutoID)
    INNER JOIN faturas f USING(FaturaID)
    INNER JOIN clientes c USING(ClienteID)
    WHERE df.Desconto >= porcentagem_desconto;

END $$

CALL sp_get_cliente_por_desconto(0.1);