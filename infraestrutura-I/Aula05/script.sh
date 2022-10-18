#!/bin/bash
a=1
for nome in $(cat lista_nomes)
do
if [ $nome = "juan" ]; then 
     echo "Encontrei na linha $a o nome: $nome"
	 curl -s https://api.genderize.io/?name=$nome | jq '.gender' | { read -r gen; echo "Sexo de $nome é: $gen"; } 
curl -s https://api.nationalize.io/?name=$nome | 
jq '.country[0].country_id' | { read -r cn; echo "País de $nome é: $cn"; }
else 
    let a=$a+1
fi
done