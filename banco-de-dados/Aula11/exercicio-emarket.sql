-- Consultas Queries ML Parte I
-- Categorias e produtos
select * from categorias;
select CategoriaNome, Descricao from categorias;
select * from produtos;
select * from produtos where Descontinuado = 1;
select * from produtos where ProvedorID = 8;
select * from produtos where PrecoUnitario between 10 and 22;
select * from produtos where UnidadesEstoque < NivelReabastecimento;
select * from produtos where UnidadesEstoque < NivelReabastecimento and UnidadesPedidas = 0;

-- Clientes
select Empresa, Contato, Titulo, Pais from clientes order by Pais;
select * from clientes where Titulo = 'Owner';
select * from clientes where Contato like 'c%';

-- Faturas
select * from faturas order by DataFatura asc;
select * from faturas where PaisEnvio = 'USA' and FormaEnvio <> 3;
select * from faturas where ClienteID like '%GOURL%';
select * from faturas where EmpregadoID in (2, 3, 5, 8, 9);

-- Queries I - Parte II
-- Produtos
select * from produtos order by PrecoUnitario desc;
select * from produtos order by PrecoUnitario desc limit 5;
select * from produtos order by UnidadesEstoque desc limit 10;

-- Detalhe Fatura
select FaturaId, ProdutoID, Quantidade from detalhefatura;
select FaturaId, ProdutoID, Quantidade from detalhefatura order by Quantidade desc;
select FaturaId, ProdutoID, Quantidade from detalhefatura where Quantidade between 50 and 100;
select FaturaId as 'Numero da Fatura', ProdutoID as 'Produto', precounitario * quantidade as 'Total' from detalhefatura;

-- Extras
select * from clientes where pais = 'Brazil' or pais = 'Mexico' or Titulo like 'Sales%';
select * from clientes where Empresa like 'a%';
select Cidade, Contato as 'Nome e Sobrenome', Titulo as 'Cargo' from clientes where Cidade = 'Madrid';
select * from faturas where FaturaId between 10000 and 10500;
select * from faturas where FaturaId between 10000 and 10500 or ClienteID like 'B%';
select * from faturas where CidadeEnvio = 'Vancouver' or FormaEnvio = 3;
select * from empregados where sobrenome = 'Buchanan';
Select * from faturas where EmpregadoID = 5;