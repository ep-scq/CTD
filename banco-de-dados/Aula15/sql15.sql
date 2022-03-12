use odonto_dh;

-- Precisamos inserir mais 3 vendedores, sendo eles:
insert into TB_VENDEDOR (ID_VENDEDOR, NOME, ENDERECO, TELEFONE, CELULAR, EMAIL, CNPJ, NR_CONTRATO, DATA_INICIO_CONTRATO, DATA_FIM_CONTRATO, DATA_ENTRADA_SISTEMA, STATUS, DATA_INATIVACAO) values (default, 'Corretora só love', 'Rua Claudinho e Bochecha 555', null, null, null, null, '05.0872056.80', null, null, '2021-01-01', 'ATIVO', null),
(default, 'BR Corretora', 'Rua da Patria 01', null, null, null, null, '05.0872056.81', null, null, '2021-01-02', 'ATIVO', null),
(default, 'Corretora BDBD (Banco de dados - Best discipline)', 'Rua BD 666', null, null, null, null, '05.0872056.82', null, null, '2021-01-03', 'ATIVO', null);

-- Quando a base foi construída, foi nos passado apenas 3 planos, porém, a DH está
-- disponibilizando mais 2, sendo eles:
insert into TB_PLANO (ID_PLANO, NOME_PLANO, DESCRICAO_PLANO, DATA_CRIACAO_PLANO, VALOR_PLANO) VALUES (default, 'Plano Integral Dental', 'Plano cobertura limitada, podendo ser utilizado fora do país', '2021-03-01', 75),
(default, 'Plano Integral Dental II MAX', 'Plano cobertura ilimitada, podendo ser utilizado fora do país', '2021-03-01', 99.99);

-- Os associados Massimiliano Valenta e Jocko Blannin mudaram para o novo plano
-- que criamos, o Plano Integral Dental, altere o planos dos mesmos na base,
-- lembrando de que, devemos armazenar também o histórico da alteração deste plano
update TB_ASSOCIADO set ID_PLANO_ATUAL = 4 where ID_ASSOCIADO in (36,41);
INSERT INTO TB_HISTORICO_ASSOCIADO_PLANO(ID_HISTORICO_ASSOCIADO_PLANO, ID_ASSOCIADO, ID_PLANO, DATA_INICIO_VIGENCIA, DATA_FIM_VIGENCIA)
VALUES (default, 36, (SELECT ID_PLANO_ATUAL FROM TB_ASSOCIADO WHERE ID_ASSOCIADO = 36),
(SELECT DATA_ENTRADA_SISTEMA FROM TB_ASSOCIADO WHERE ID_ASSOCIADO = 36), '2022-12-01'),
(default, 41, (SELECT ID_PLANO_ATUAL FROM TB_ASSOCIADO WHERE ID_ASSOCIADO = 41),
(SELECT DATA_ENTRADA_SISTEMA FROM TB_ASSOCIADO WHERE ID_ASSOCIADO = 41), '2022-12-01');

-- A associada Jessika Eilhersen mudou para o novo plano que criamos, o Plano
-- Integral Dental II MAX. Realize as alterações na base, da mesma forma como foi
-- feita no tópico anterior.
INSERT INTO TB_HISTORICO_ASSOCIADO_PLANO(ID_HISTORICO_ASSOCIADO_PLANO, ID_ASSOCIADO, ID_PLANO, DATA_INICIO_VIGENCIA, DATA_FIM_VIGENCIA)
VALUES (default, 129, (SELECT ID_PLANO_ATUAL FROM TB_ASSOCIADO WHERE ID_ASSOCIADO = 129),
(SELECT DATA_ENTRADA_SISTEMA FROM TB_ASSOCIADO WHERE ID_ASSOCIADO = 129), '2021-11-24');
update TB_ASSOCIADO set ID_PLANO_ATUAL = 5 where ID_ASSOCIADO = 129;
INSERT INTO TB_HISTORICO_ASSOCIADO_PLANO(ID_HISTORICO_ASSOCIADO_PLANO, ID_ASSOCIADO, ID_PLANO, DATA_INICIO_VIGENCIA, DATA_FIM_VIGENCIA)
VALUES (default, 129, (SELECT ID_PLANO_ATUAL FROM TB_ASSOCIADO WHERE ID_ASSOCIADO = 129),
(SELECT DATA_ENTRADA_SISTEMA FROM TB_ASSOCIADO WHERE ID_ASSOCIADO = 129), '2022-11-24');

-- Houve uma falha catastrófica no sistema de vendas no ambiente de testes, e fomos
-- informados que existe a possibilidade de associados terem entrado em nossa base
-- de dados de forma duplicada. Verifique se possuímos associados neste cenário e se
-- sim, remova somente à duplicata ou às duplicatas (demonstre o script de verificação
-- de como você encontrou as duplicatas, bem como o de remoção, caso elas
-- existam).
select * from tb_associado where CPF = (select CPF from tb_associado group by CPF having count(*) > 1)
