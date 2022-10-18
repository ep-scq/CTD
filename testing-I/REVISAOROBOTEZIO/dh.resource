*** Variables ***
${SITE}                     https://www.digitalhouse.com/br
${NAVEGADOR}                Chrome
${BOTAO_COOKIES}            css=/html/body/div/div/div[1]/div[1]/div[2]/div[1]/div[2]/span
${IFRAME_COOKIES}           xpath=/html/body/iframe[5]
${OUTROS_CURSOS}            xpath=//*[@id="__next"]/div/main/section/div/div[3]/div/a
${DATA_ANALYTICS}           xpath=//*[@id="__next"]/div/main/section[2]/div/div/div[3]/a/span
${CHAMADA_DATA_ANALYTICS}   voltado para qualquer pessoa que deseja ampliar suas capacidades analíticas
${DESCRICAO_CURSO}          pessoas interessadas em business intelligence
${PRECO}                    R$10.315

*** Keywords ***
Abrir o novo site da Digital House Brasil
  Open Browser      ${SITE}     ${NAVEGADOR}
  Maximize Browser Window

Clicar em “Aceitar Cookies”
  Sleep             10
  Select Frame      ${IFRAME_COOKIES} 
  Click Element     ${BOTAO_COOKIES}
  Unselect Frame

Clicar em “Ver outros cursos”
##  Execute Javascript   window.scrollTo(0,900)
  Wait and Click  ${OUTROS_CURSOS}

Selecionar o curso “Data Analytics”
  Wait and Click  ${DATA_ANALYTICS}

Verificar se o texto de chamada do curso está correta
    Page Should Contain  ${CHAMADA_DATA_ANALYTICS}

Verificar se a descrição do curso está correta
    Page Should Contain  ${DESCRICAO_CURSO}

Clicar em “Inscreva-se agora"
    Wait and Click  xpath=//*[@id="__next"]/div/main/section/div/div/div[1]/div/div[2]/div[1]/a

Clicar em “Inscreva-se”
    Wait and Click  xpath=//*[@id="0"]/div/a

Validar que o valor do curso é “R$10.315”  
    Page Should Contain  ${PRECO}

#### COMANDOS PERSONALIZADOS ####
Wait and Click
  [Arguments]                     ${ELEMENTO}
  Wait Until Element is visible   ${ELEMENTO}
  Click Element                   ${ELEMENTO}

Wait and Input Text
  [Arguments]                       ${CAMPO}  ${TEXTO}            
  Wait Until Element is visible     ${CAMPO}  
  Input Text                        ${CAMPO}  ${TEXTO}