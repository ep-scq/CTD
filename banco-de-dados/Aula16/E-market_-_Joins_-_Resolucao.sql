-- JOINS
-- Faça uma consulta sobre o faturamento do e-market. Inclua as seguintes informações:
-- Id da fatura, data da fatura, nome da empresa de correio (O id da empresa consta da tabela faturas no campo FormaEnvio), 
-- nome do cliente, categoria do produto vendido, nome do produto(Você chega ao produto consultando os detalhes da fatura), preço unitário e quantidade.


SELECT f.FaturaID, DataFatura, o.Empresa as correio, Contato as cliente, CategoriaNome, ProdutoNome, d.PrecoUnitario, Quantidade
FROM faturas f
JOIN correios o ON f.formaEnvio = o.correioID
JOIN clientes l ON f.ClienteID = l.ClienteID 
JOIN detalhefatura d ON f.FaturaID = d.FaturaID
JOIN produtos p ON d.ProdutoID = p.ProdutoID
JOIN categorias c ON p.CategoriaID = c.CategoriaID
ORDER BY f.FaturaID, CategoriaNome, ProdutoNome;


-- Liste todas as categorias junto com informações sobre seus produtos. Incluir todas as categorias, mesmo que não tenham produtos.
SELECT CategoriaNome, ProdutoId, ProdutoNome, QuantidadePorUnidade, PrecoUnitario
FROM categorias
LEFT JOIN produtos
ON categorias.CategoriaID = produtos.CategoriaID;

-- Liste as informações de contato de clientes que nunca compraram no emarket.
SELECT clientes.ClienteID, Contato, Telefone
FROM clientes
LEFT JOIN faturas
ON faturas.ClienteID = clientes.ClienteID
WHERE faturas.ClienteID IS NULL;

-- Faça uma lista de produtos. Para cada um, indique seu nome, categoria e as informações de contato de seu fornecedor. Lembre-se que podem existir produtos para os quais o fornecedor não foi indicado.
SELECT produtoNome, c.CategoriaNome, f.Contato, f.Telefone
FROM produtos p
INNER JOIN categorias c ON c.CategoriaID = p.CategoriaID
LEFT JOIN fornecedores f on p.FornecedorID = f.FornecedorID;

-- Para cada categoria, liste o preço unitário médio de seus produtos.
SELECT CategoriaNome, avg(PrecoUnitario)
FROM categorias c
LEFT JOIN produtos p
ON c.CategoriaID = p.CategoriaID
GROUP BY CategoriaNome;

-- Para cada cliente, indique a última nota fiscal de compra. Inclua clientes que nunca compraram no e-market.
SELECT clientes.ClienteId,
       max(datafatura) as ultima_fatura
FROM clientes
LEFT JOIN faturas
ON faturas.ClienteID = clientes.ClienteID
GROUP BY clientes.ClienteId;

-- Todas as faturas têm uma empresa de correio associada (envio). Gere uma lista com todas as empresas de correio e o número de faturas correspondentes. Execute a consulta usando RIGHT JOIN.

SELECT empresa, count(faturaID) 
FROM faturas
RIGHT JOIN correios
ON faturas.FormaEnvio = correios.correioID
GROUP BY empresa;
