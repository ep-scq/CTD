*** Variables ***
${SITE}               https://www.saucedemo.com
${NAVEGADOR}          Chrome
${CAMPO_USUARIO}      css=#user-name
${USUARIO}            standard_user
${CAMPO_SENHA}        css=#password
${SENHA}              secret_sauce
${BOTAO_LOGIN}        css=#login-button
${ADICIONAR_PRODUTO}  css=#add-to-cart-sauce-labs-backpack
${CARRINHO}           css=#shopping_cart_container > a
${BOTAO_CHECKOUT}     xpath=//*[@id="checkout"]
${CAMPO_NOME}         css=#first-name
${NOME}               Elissandro
${CAMPO_SOBRENOME}    css=#last-name
${SOBRENOME}          Maciel
${CAMPO_CEP}          css=#postal-code
${CEP}                123456
${BOTAO_CONTINUE}     css=#continue
${BOTAO_FINISH}       css=#finish
${TEXTO_MENSAGEM}     THANK YOU FOR YOUR ORDER
${USUARIO_QUEBRADO}   problem_user



*** Keywords ***
Acessar o site
#sempre dois espaços entre os comandos
  Open Browser     ${SITE}          ${NAVEGADOR}
  Maximize Browser Window

Fazer o login na loja
  Input Text       ${CAMPO_USUARIO}  ${USUARIO}
  Input Text       ${CAMPO_SENHA}    ${SENHA}
  Wait and Click   ${BOTAO_LOGIN}

Adicionar um produto no carrinho
  Wait and Click   ${ADICIONAR_PRODUTO}

Acessar o carrinho
  Wait and Click   ${CARRINHO}

Clicar em 'Checkout'
  Wait and Click   ${BOTAO_CHECKOUT}

Preencher dados do cliente
  Wait and Input Text  ${CAMPO_NOME}        ${NOME}
  Wait and Input Text  ${CAMPO_SOBRENOME}   ${SOBRENOME}
  Wait and Input Text  ${CAMPO_CEP}         ${CEP}
  Wait and Click       ${BOTAO_CONTINUE}

Clicar em 'Finish'
  Wait and Click       ${BOTAO_FINISH}
  Page Should Contain  ${TEXTO_MENSAGEM}


Fazer login na loja com um usuário quebrado
  Input Text       ${CAMPO_USUARIO}  ${USUARIO_QUEBRADO}
  Input Text       ${CAMPO_SENHA}    ${SENHA}
  Wait and Click   ${BOTAO_LOGIN}



Wait and Click
  [Arguments]                    ${ELEMENTO}
  Wait Until Element is Visible  ${ELEMENTO}
  Click Element                  ${ELEMENTO}

Wait and Input Text
  [Arguments]                    ${CAMPO}  ${TEXTO}
  Wait Until Element is Visible  ${CAMPO}
  Input Text                     ${CAMPO}  ${TEXTO}
