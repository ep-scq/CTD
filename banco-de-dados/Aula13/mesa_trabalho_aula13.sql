-- Grupo 4: Elissandro Maciel, Janaina de Souza, Guilherme Mello, Anderson A Souza, Murilo Silva

use musimundos;

-- 1.MAX
SELECT MAX(valor_total)
from faturas
WHERE cidade_cobranca = 'OSLO';

-- 2. MIN
SELECT MIN(valor_total)
from faturas;

-- 3. AVG
SELECT FORMAT(AVG(valor_total),2)
from faturas
WHERE pais_cobranca = 'CANADA';

-- 4.COUNT
SELECT COUNT(id)
from faturas
WHERE pais_cobranca = 'CANADA';

-- 5.SUM
SELECT SUM(valor_total)
from faturas;

-- 6. media id,data e valor

SELECT id,data_fatura,valor_total
from faturas
WHERE valor_total < (SELECT AVG(valor_total) FROM faturas);

-- 7. MAX
SELECT MAX(data_nascimento)
FROM empregados;

-- 8. MIN
SELECT MIN(data_nascimento)
FROM empregados;

-- 9. DATE_FORMAT
SELECT 
date_format(data_nascimento, '%d/%M/%Y')
from empregados;

-- 10. COUNT cancoes
SELECT COUNT(id)
from cancoes
WHERE compositor = 'AC/DC';

-- 11. AVG
SELECT AVG(duracao_milisegundos)
from cancoes;

-- 12. AVG AC/DC
SELECT AVG(bytes)
from cancoes
WHERE compositor = 'AC/DC';

-- 13. SELECT qtdd CoUNT
SELECT COUNT(*)
FROM clientes
WHERE cidade = 'São Paulo';

-- 14. SELECT qtdd CoUNT
SELECT COUNT(*)
from clientes
WHERE cidade = 'Paris';

-- 15. SELECT COUNT Like
SELECT COUNT(*) 
FROM CLIENTES
WHERE EMAIL LIKE '%@YAHOO%';


