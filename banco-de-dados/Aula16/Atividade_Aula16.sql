USE `emarket`;

-- Grupo 3: Elissandro, Gustavo, Iago, Louise

-- 1) Faça uma consulta sobre o faturamento do e-market. Inclua as seguintes informações:
-- ID da fatura/ data da fatura /nome da empresa de correio (O id da empresa consta da tabela faturas no campo FormaEnvio)
-- nome do cliente/ categoria do produto vendido/ nome do produto(Você chega ao produto consultando os detalhes da fatura)
-- preço unitário/ quantidade

-- SELECT faturas.FaturaId, faturas.DataFatura, correios.Empresa `Empresa de Envio`, clientes.Empresa `Nome do Cliente`, categorias.CategoriaNome, produtos.ProdutoNome, detalhefatura.PrecoUnitario, detalhefatura.Quantidade
-- FROM faturas
-- INNER JOIN clientes
-- ON clientes.ClienteID = faturas.ClienteID
-- INNER JOIN correios
-- ON correios.CorreioID = faturas.FormaEnvio
-- INNER JOIN detalhefatura
-- ON detalhefatura.FaturaID = faturas.FaturaId
-- INNER JOIN produtos
-- ON produtos.ProdutoID = detalhefatura.ProdutoID
-- INNER JOIN categorias
-- ON categorias.CategoriaID = produtos.CategoriaID;

-- ---------------------------------------------------------------------------------------------------------------

-- 2) Relatórios II parte II - INNER, LEFT e RIGHT JOIN

-- 2.1) Liste todas as categorias junto com informações sobre seus produtos. 
-- Incluir todas as categorias, mesmo que não tenham produtos.

-- SELECT categorias.CategoriaNome, produtos.ProdutoNome
-- FROM categorias
-- LEFT JOIN produtos
-- ON categorias.CategoriaID = produtos.CategoriaID;

-- 2.2) Liste as informações de contato de clientes que nunca compraram no emarket.

-- SELECT clientes.contato, clientes.Empresa 
-- FROM faturas
-- RIGHT JOIN clientes
-- ON clientes.ClienteID = faturas.ClienteID
-- WHERE faturas.ClienteID IS NULL;

-- 2.3) Faça uma lista de produtos. Para cada um, indique seu nome, categoria e as informações de 
-- contato de seu fornecedor. Lembre-se que podem existir produtos para os quais o fornecedor não foi indicado.

-- SELECT produtos.ProdutoNome, categorias.CategoriaNome, provedores.Contato
-- FROM produtos
-- LEFT JOIN categorias
-- ON produtos.CategoriaID = categorias.CategoriaID
-- LEFT JOIN provedores
-- ON provedores.ProvedorID = produtos.ProvedorID;

-- 2.4) Para cada categoria, liste o preço unitário médio de seus produtos

-- SELECT  categorias.CategoriaNome, FORMAT(AVG(produtos.PrecoUnitario),2)
-- FROM categorias 
-- INNER JOIN produtos
-- ON categorias.CategoriaID = produtos.CategoriaID
-- GROUP BY categorias.CategoriaNome;

-- 2.5) Para cada cliente, indique a última nota fiscal de compra.
-- Inclua clientes que nunca compraram no e-market.

-- SELECT clientes.Empresa `Nome do Cliente`, faturas.FaturaId `N° Nota Fiscal`
-- FROM clientes
-- LEFT JOIN faturas
-- ON faturas.ClienteID = clientes.ClienteID;

-- 2.6) Todas as faturas têm uma empresa de correio associada (envio). 
-- Gere uma lista com todas as empresas de correio e o número de faturas correspondentes. 
-- Execute a consulta usando RIGHT JOIN.

SELECT correios.Empresa `Empresa de Envio`, faturas.FaturaId `N° da Fatura`
FROM faturas
RIGHT JOIN correios
ON correios.CorreioID = faturas.FormaEnvio
ORDER BY `Empresa de Envio`;










