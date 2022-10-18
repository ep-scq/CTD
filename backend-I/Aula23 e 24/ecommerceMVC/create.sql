CREATE TABLE IF NOT EXISTS produto (
  id int auto_increment primary key,
  nomeProduto varchar(255),
  valor numeric(15,2),
  fornecedor varchar(255),
  lote varchar(255),
  categoria varchar(255)
);
