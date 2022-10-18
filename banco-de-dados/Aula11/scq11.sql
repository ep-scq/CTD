SELECT PAIS, COUNT(ID) FROM CLIENTES group by PAIS;
SELECT id_genero, count(id) FROM CANCOES group by id_genero;
select sum(valor_total) from faturas;
SELECT id_album, avg(duracao_milisegundos) FROM cancoes group by id_album;
select * from cancoes order by bytes asc;
select id_cliente, sum(valor_total)from faturas group by id_cliente having sum(valor_total) > 45;