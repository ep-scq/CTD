-- Grupo 03: Elissandro Maciel, Evandro Luiz Mariano, Lucas Mota Barbosa, Gabriel Francisco, Iago Mendes, Allan Medeiros.

use emarket;

-- Clientes

-- 1. Crie uma View com os seguintes dados do cliente: Id, contato, Fax e o telefone.
select clientes.ClienteID, clientes.Contato, clientes.Fax, clientes.Telefone from clientes;
create view vw_clientes as (
select clientes.ClienteID, clientes.Contato, clientes.Fax, clientes.Telefone from clientes
);

-- 2. Liste os números de telefone dos clientes que não possuem fax.
-- Faça isso de duas maneiras diferentes:
-- a. Consultando a tabela clientes
select clientes.ClienteID, clientes.Contato, clientes.Fax, clientes.Telefone from clientes where clientes.Fax = '';
-- b. Consultando a view do cliente
select * from vw_clientes where vw_clientes.Fax = '';

-- Fornecedores
-- 1. Crie uma view com os seguintes dados do fornecedor: Id, contato, empresa e endereço. Para o endereço, pegue o endereço, cidade, código postal e país.

select provedores.ProvedorID, provedores.Contato, provedores.Empresa, CONCAT(Endereco, ", ", Cidade, ", ", CodigoPostal, ", ", Pais ) AS ENDERECO
from provedores;
create view vw_provedores as (
select provedores.ProvedorID, provedores.Contato, provedores.Empresa, CONCAT(Endereco, ", ", Cidade, ", ", CodigoPostal, ", ", Pais ) AS ENDERECO
from provedores
);

-- 2. Liste os fornecedores que moram na Avenida das Americanas, no Brasil. Faça de duas formas diferentes:
-- a. Consultando a tabela de fornecedores
select provedores.ProvedorID, provedores.Contato, provedores.Empresa, CONCAT(Endereco, ", ", Cidade, ", ", CodigoPostal, ", ", Pais ) AS ENDERECO
from provedores where Endereco like '%Americanas%';
-- b. Consultando a view do fornecedor
select * from vw_provedores where Endereco like '%Americanas%';

