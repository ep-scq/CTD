*** Settings ***
#sempre vai dois espaços entre os comandos
Library         SeleniumLibrary
Resource        ./elissandro.resource
Test Teardown   Close Browser

*** Test Case ***
Processo de compra da loja Swag Labs
#sempre vai dois espaços antes dos comandos abaixo
  Acessar o site
  Fazer o login na loja
  Adicionar um produto no carrinho
  Acessar o carrinho
  Clicar em 'Checkout'
  Preencher dados do cliente
  Clicar em 'Finish'

Fazer login na loja com um usuário quebrado
  Acessar o site
  Fazer login na loja com um usuário quebrado
