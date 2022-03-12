-- PROCEDURE QUE ME RETORNA UM VALOR, SOBRE UMA DETERMINADA PORCENTAGEM
DELIMITER $$
CREATE PROCEDURE GET_VALOR(
	INOUT valor VARCHAR(255),
    IN porcentagem DECIMAL(10,2)
)
BEGIN
	SET valor = CONCAT(porcentagem, '% de ', valor, ' é ', ROUND(porcentagem*valor/100, 2));
END $$

SET @valor = 2000;
SET @porcentagem = 50;
CALL GET_VALOR(@valor, @porcentagem);

SELECT @valor;