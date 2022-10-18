-- RESPOSTAS

-- Precisamos inserir mais 3 vendedores, sendo eles:
-- Corretora só love
-- BR Corretora
-- Corretora BDBD (Banco de dados - Best discipline)

INSERT INTO TB_VENDEDOR(NOME, ENDERECO, TELEFONE, CELULAR, EMAIL, CNPJ, NR_CONTRATO, DATA_INICIO_CONTRATO, DATA_FIM_CONTRATO, DATA_ENTRADA_SISTEMA, STATUS, DATA_INATIVACAO)
VALUES
('Corretora só love', 'Rua só love', '(11)5547-0987', '(11)2598-3333', 'teste@teste', '00.000.00/0000-00', '05.00000.00', NOW(), '2022-01-01', NOW(), 'ATIVO', NULL),
('BR Corretora', 'Rua sem nome', '(11)5547-0987', '(11)2598-3333', 'teste@teste', '00.000.00/0000-00', '05.00000.00', NOW(), '2022-01-01', NOW(), 'ATIVO', NULL),
('Corretora BDBD (Banco de dados - Best discipline)', 'Rua 123', '(11)5547-0987', '(11)2598-3333', 'teste@teste','00.000.00/0000-00', '05.00000.00', NOW(), '2022-01-01', NOW(), 'ATIVO', NULL);

-- Quando a base foi construída, foi nos passado apenas 3 planos, porém, a DH está disponibilizando mais 2, sendo eles:
-- Plano Integral Dental, que é um plano de cobertura limitada, podendo ser utilizado fora do país, com valor de 75,00
-- Plano Integral Dental II MAX , que é um plano de cobertura ilimitada, podendo ser utilizado fora do país, com valor de 99,99

insert into TB_PLANO (NOME_PLANO, DESCRICAO_PLANO, DATA_CRIACAO_PLANO, VALOR_PLANO) 
VALUES 
('Plano Integral Dental', 'Plano de cobertura limitada, podendo ser utilizado fora do país', NOW(), 75),
('Plano Integral Dental II MAX', 'Plano de cobertura ilimitada, podendo ser utilizado fora do país', NOW(), 99.99);

-- Os associados Massimiliano Valenta e Jocko Blannin mudaram para o novo plano que criamos, o Plano Integral Dental, altere o planos dos mesmos na base, lembrando de que, devemos armazenar também o histórico da alteração deste plano

INSERT INTO TB_HISTORICO_ASSOCIADO_PLANO(ID_ASSOCIADO, ID_PLANO, DATA_INICIO_VIGENCIA, DATA_FIM_VIGENCIA)
VALUES
((SELECT ID_ASSOCIADO FROM TB_ASSOCIADO WHERE NOME_COMPLETO = 'Massimiliano Valenta'), (SELECT ID_PLANO_ATUAL FROM TB_ASSOCIADO WHERE NOME_COMPLETO = 'Massimiliano Valenta'), NOW(), '2022-01-01'),
((SELECT ID_ASSOCIADO FROM TB_ASSOCIADO WHERE NOME_COMPLETO = 'Jocko Blannin'), (SELECT ID_PLANO_ATUAL FROM TB_ASSOCIADO WHERE NOME_COMPLETO = 'Jocko Blannin'), NOW(), '2022-01-01');

UPDATE 
	TB_ASSOCIADO
SET
	ID_PLANO_ATUAL = (SELECT ID_PLANO FROM TB_PLANO WHERE NOME_PLANO = 'Plano Integral Dental')
WHERE
	NOME_COMPLETO IN ('Massimiliano Valenta', 'Jocko Blannin');

-- A associada Jessika Eilhersen mudou para o novo plano que criamos, o Plano Integral Dental II MAX. Realize as alterações na base.
INSERT INTO TB_HISTORICO_ASSOCIADO_PLANO(ID_ASSOCIADO, ID_PLANO, DATA_INICIO_VIGENCIA, DATA_FIM_VIGENCIA)
VALUES
((SELECT ID_ASSOCIADO FROM TB_ASSOCIADO WHERE NOME_COMPLETO = 'Jessika Eilhersen'), (SELECT ID_PLANO_ATUAL FROM TB_ASSOCIADO WHERE NOME_COMPLETO = 'Massimiliano Valenta'), NOW(), '2022-01-01');

UPDATE 
	TB_ASSOCIADO
SET
	ID_PLANO_ATUAL = (SELECT ID_PLANO FROM TB_PLANO WHERE NOME_PLANO = 'Plano Integral Dental II MAX')
WHERE
	NOME_COMPLETO IN ('Jessika Eilhersen');

-- Houve uma falha catastrófica no sistema de vendas e fomos informados que existe a possibilidade de associados terem entrado em nossa base de dados de forma duplicada. Verifique se não possuímos associados duplicados e se sim, remova somente à duplicata ou às duplicatas (demonstre o script de verificação das duplicatas, bem como o de remoção).
SELECT
	COD_CARTEIRINHA, 
    NOME_COMPLETO, 
    RG, 
    CPF, 
    ENDERECO, 
    DATA_ENTRADA_SISTEMA, 
    STATUS, 
    DATA_INATIVACAO, 
    ID_PLANO_ATUAL, 
    ID_CATEGORIA
FROM TB_ASSOCIADO
GROUP BY
	COD_CARTEIRINHA, 
    NOME_COMPLETO, 
    RG, 
    CPF, 
    ENDERECO, 
    DATA_ENTRADA_SISTEMA, 
    STATUS, 
    DATA_INATIVACAO, 
    ID_PLANO_ATUAL, 
    ID_CATEGORIA
HAVING
	COUNT(*) > 1;

SELECT
	*
FROM TB_ASSOCIADO
WHERE
	COD_CARTEIRINHA = '9022480847.74';
    
DELETE
	FROM TB_ASSOCIADO
WHERE
	ID_ASSOCIADO = 300;

-- Temos alguns associados que estão na tabela de histórico dos planos com a data de fim da vigência anterior à data de início da vigência, monte uma consulta que demonstre essa informação, bem como, corrija os que estão com este erro.
SELECT
	*
FROM TB_HISTORICO_ASSOCIADO_PLANO
WHERE
	DATA_FIM_VIGENCIA < DATA_INICIO_VIGENCIA;

UPDATE
	TB_HISTORICO_ASSOCIADO_PLANO
SET
	DATA_FIM_VIGENCIA = '2027-01-01'
WHERE
	ID_ASSOCIADO IN (4,8);

-- Temos associados com mais de 2 números de telefone? Se sim, nos mostre a
-- consulta responsável por confirmar esta solicitação.
SELECT
	A.NOME_COMPLETO,
    COUNT(*)
FROM TB_ASSOCIADO A
INNER JOIN TB_ASSOCIADO_TELEFONE AF ON AF.ID_ASSOCIADO = A.ID_ASSOCIADO
GROUP BY
	A.NOME_COMPLETO
HAVING
	COUNT(*) > 2;

-- Foi solicitado para o estagiário mudar o nome do associado Lorette Windibank para Lorette Windibank Jr. O mesmo me mandou este script, consegue me dizer se isto está correto? Caso negativo, consegue corrigir?
-- Não esta correto. Executando o script da maneira como passada, ele iria atualizar a tabela TB_ASSOCIADO inteira.
UPDATE
	TB_ASSOCIADO
SET
	NOME_COMPLETO = 'Lorette Windibank Jr'
WHERE
	NOME_COMPLETO = 'Lorette Windibank';

-- Verificamos que os associados Massimiliano Valenta, Jocko Blannin e Jessika Eilhersen estão sem vínculo com contrato nenhum. Insira o contrato dos mesmos, lembrando que, a data de início do contrato deve ser inferior à data de fim do contrato, a DH disponibiliza por padrão um contrato de 2 anos na primeira assinatura. Insira cada um deles nos 3 vendedores novos que criamos.
insert into TB_ASSOCIADO_CONTRATO (ID_ASSOCIADO, ID_VENDEDOR, DATA_INICIO_CONTRATO, DATA_FIM_CONTRATO) 
values 
((SELECT ID_ASSOCIADO FROM TB_ASSOCIADO WHERE NOME_COMPLETO = 'Massimiliano Valenta'), (SELECT ID_VENDEDOR FROM TB_VENDEDOR WHERE NOME = 'Corretora só love'), '2020-01-04', '2022-01-05'),
((SELECT ID_ASSOCIADO FROM TB_ASSOCIADO WHERE NOME_COMPLETO = 'Jocko Blannin'), (SELECT ID_VENDEDOR FROM TB_VENDEDOR WHERE NOME = 'BR Corretora'), '2020-01-04', '2022-01-05'),
((SELECT ID_ASSOCIADO FROM TB_ASSOCIADO WHERE NOME_COMPLETO = 'Jessika Eilhersen'), (SELECT ID_VENDEDOR FROM TB_VENDEDOR WHERE NOME = 'Corretora BDBD (Banco de dados - Best discipline)'), '2020-01-04', '2022-01-05');

-- A equipe de testes nos perguntou porque não conseguem inserir mais de um contrato para o mesmo associado. Você consegue nos responder?
-- Porque esta tabela possui um UNIQUE ID_ASSOCIADO que limita apenas um único associado com um único ID dentro desta tabela

-- Verificamos que na tabela de contrato dos associados, falta a coluna que armazena o número do contrato físico, crie a instrução responsável por criar esta coluna. Vale ressaltar que é um registro que irá armazenar uma string de tamanho não variável de 20 caracteres. Aproveite para atualizar os registros existentes dentro dela, ao que compete essa informação, você pode inserir qualquer dado.
ALTER TABLE TB_ASSOCIADO_CONTRATO
ADD
	NR_CONTRATO_FISICO CHAR(20);

UPDATE
	TB_ASSOCIADO_CONTRATO
SET
	NR_CONTRATO_FISICO = '20569874156987123651';

-- Verificamos que na nossa base de dados, falta uma informação ao que compete os associados. A DH disponibiliza tipos de negociação como mensais e anuais, ou seja, seus associados podem pagar as suas faturas de acordo com o tipo de negociação atribuída. Altere a nossa base para atender essa necessidade, não esquecendo da relação que a mesma tem direto com os associados.
CREATE TABLE TB_TIPO_NEGOCIACAO(
	ID_TIPO_NEGOCIACAO INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    NOME VARCHAR(50)
);

INSERT INTO TB_TIPO_NEGOCIACAO(NOME)
VALUES
	('MENSAL'), ('ANUAL');

SELECT
	*
FROM TB_TIPO_NEGOCIACAO;

ALTER TABLE TB_ASSOCIADO
ADD ID_TIPO_NEGOCIACAO INT;

ALTER TABLE TB_ASSOCIADO
ADD CONSTRAINT FK_ASSOCIADO_TIPO_NEGOCIACAO 
FOREIGN KEY (ID_TIPO_NEGOCIACAO) 
REFERENCES TB_TIPO_NEGOCIACAO (ID_TIPO_NEGOCIACAO);

UPDATE
	TB_ASSOCIADO
SET
	ID_TIPO_NEGOCIACAO = 1;

SELECT
	*
FROM TB_ASSOCIADO;
    
-- Foi nos informado que os clientes do vendedor BlogXS possuem o tipo de negociação como anual. Sendo assim, altere o tipo de negociação deles e insira 1 fatura com 12  itens para os associados que são do mesmo, lembre-se de que, o valor total da fatura deve bater com o somatório de todos itens dela e o valor do item da fatura, deve ser exatamente igual ao valor do seu plano.
SELECT
	AC.ID_ASSOCIADO
FROM TB_ASSOCIADO_CONTRATO AC
INNER JOIN TB_VENDEDOR V ON V.ID_VENDEDOR = AC.ID_VENDEDOR
INNER JOIN TB_ASSOCIADO A ON A.ID_ASSOCIADO = AC.ID_ASSOCIADO
INNER JOIN TB_PLANO PL ON PL.ID_PLANO = A.ID_PLANO_ATUAL
WHERE
	V.NOME = 'BlogXS';

UPDATE
	TB_ASSOCIADO
SET
	ID_TIPO_NEGOCIACAO = (SELECT ID_TIPO_NEGOCIACAO FROM TB_TIPO_NEGOCIACAO WHERE NOME = 'ANUAL')
WHERE
	ID_ASSOCIADO IN (
    SELECT
		AC.ID_ASSOCIADO
	FROM TB_ASSOCIADO_CONTRATO AC
	INNER JOIN TB_VENDEDOR V ON V.ID_VENDEDOR = AC.ID_VENDEDOR
	WHERE
		V.NOME = 'BlogXS'
	);

INSERT INTO TB_FATURA (ID_ASSOCIADO, VALOR_TOTAL_FATURA, DATA_VENCIMENTO_FATURA, FATURA_QUITADA, DATA_QUITACAO_FATURA) 
VALUES (4, 0, '2023-01-01', 'NÃO', null);

SELECT
	*
FROM TB_FATURA
WHERE
	ID_ASSOCIADO = 4;

INSERT INTO TB_FATURA_ITEM(ID_FATURA, VL_ITEM_FATURA)
VALUES
	((SELECT ID_FATURA FROM TB_FATURA WHERE ID_ASSOCIADO = 4 AND DATA_VENCIMENTO_FATURA = '2023-01-01'), 50),
    ((SELECT ID_FATURA FROM TB_FATURA WHERE ID_ASSOCIADO = 4 AND DATA_VENCIMENTO_FATURA = '2023-01-01'), 50),
    ((SELECT ID_FATURA FROM TB_FATURA WHERE ID_ASSOCIADO = 4 AND DATA_VENCIMENTO_FATURA = '2023-01-01'), 50),
    ((SELECT ID_FATURA FROM TB_FATURA WHERE ID_ASSOCIADO = 4 AND DATA_VENCIMENTO_FATURA = '2023-01-01'), 50),
    ((SELECT ID_FATURA FROM TB_FATURA WHERE ID_ASSOCIADO = 4 AND DATA_VENCIMENTO_FATURA = '2023-01-01'), 50),
	((SELECT ID_FATURA FROM TB_FATURA WHERE ID_ASSOCIADO = 4 AND DATA_VENCIMENTO_FATURA = '2023-01-01'), 50),
    ((SELECT ID_FATURA FROM TB_FATURA WHERE ID_ASSOCIADO = 4 AND DATA_VENCIMENTO_FATURA = '2023-01-01'), 50),
    ((SELECT ID_FATURA FROM TB_FATURA WHERE ID_ASSOCIADO = 4 AND DATA_VENCIMENTO_FATURA = '2023-01-01'), 50),
    ((SELECT ID_FATURA FROM TB_FATURA WHERE ID_ASSOCIADO = 4 AND DATA_VENCIMENTO_FATURA = '2023-01-01'), 50),
    ((SELECT ID_FATURA FROM TB_FATURA WHERE ID_ASSOCIADO = 4 AND DATA_VENCIMENTO_FATURA = '2023-01-01'), 50),
	((SELECT ID_FATURA FROM TB_FATURA WHERE ID_ASSOCIADO = 4 AND DATA_VENCIMENTO_FATURA = '2023-01-01'), 50),
    ((SELECT ID_FATURA FROM TB_FATURA WHERE ID_ASSOCIADO = 4 AND DATA_VENCIMENTO_FATURA = '2023-01-01'), 50);

UPDATE
	TB_FATURA F
SET
	VALOR_TOTAL_FATURA = (
		SELECT
			SUM(VL_ITEM_FATURA)
		FROM TB_FATURA_ITEM
        WHERE
			ID_FATURA = F.ID_FATURA
    )
WHERE 
	ID_ASSOCIADO = 4 
AND 
	DATA_VENCIMENTO_FATURA = '2023-01-01';

-- Precisamos demonstrar que a nossa base de dados está apta para receber associados titulares e dependentes, monte uma consulta que demonstre somente associados que têm dependentes (trazer somente o código da carteirinha, nome do associado e sua categoria), na ordem de, primeiro o titular, e logo em seguida os seus dependentes, bem como, corrija o plano dos dependentes caso o mesmo não esteja no plano do titular.
SELECT
	COD_CARTEIRINHA,
    NOME_COMPLETO,
    C.NOME
FROM TB_ASSOCIADO ASSO
INNER JOIN TB_CATEGORIA C ON C.ID_CATEGORIA = ASSO.ID_CATEGORIA
WHERE
	(
		SELECT
			COUNT(*)
		FROM TB_ASSOCIADO A
        WHERE
			A.COD_CARTEIRINHA = ASSO.COD_CARTEIRINHA	
	) > 1;