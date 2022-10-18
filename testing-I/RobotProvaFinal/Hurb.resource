*** Variables ***
${SITE}                     http://hurb.com/br
${NAVEGADOR}                Firefox
${BOTAO_COOKIES}            css=#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll
${PACOTES}                  css=#__next > div.Header_Header__U2EuB > div.h-1v38t0d > div > div > div.h-rwgu8t > div > div > button:nth-child(2)
${CAMPO_DESTINO}            css=#destination-input
${DESTINO}                  Orlando
${PESQUISAR}                css=.h-50dhft
${PACOTE}                   css=.Packages_PackageCard__PhHJm:nth-child(1) .h-6zedh8
${ESCOLHER_PACOTE}          css=.h-3t22h6
${SELECIONAR_PACOTE}        css=#LGPKG-1387181-3035349
${BOTAO_PROXIMO}            css=.h-1yuatql
${SELECIONAR_DIARIA}        css=.h-cqz66k:nth-child(1) .h-1y6jkyf
${BOTAO_IR_PAGAMENTO}       css=.h-1yuatql
${DATA_INICIO}              01 Mar 2024
${DATA_FIM}                 30 Nov 2024
${BOLETO_PARCELADO}         css=#ui-id-1
${CAMPO_NOME}               css=.bill__holder
${NOME}                     Elissandro Maciel
${CAMPO_CELULAR}            css=.col-lg-6 .creditcard__phone
${CELULAR}                  11990000000
${CAMPO_CPF}                css=.bill_cpf
${CPF}                      705.127.670-09
${TERMOS_DE_USO}            css=.cancellation-policy__section > #cancellation-policy
${CANCELAMENTO_GRATIS}      Cancelamento Grátis!
${DESTINO2}                 Portugal
${PACOTE2}                  css=.Packages_PackageCard__PhHJm:nth-child(1) .h-6zedh8
${ESCOLHER_PACOTE2}         css=.h-3t22h6
${SELECIONAR_PACOTE2}       css=#LGPKG-1095551-2723924
${DATA_INICIO2}             15 Set 2022
${DATA_FIM2}                30 Nov 2022
${DESTINO3}                 Maldivas
${PACOTE3}                  css=.Packages_PackageCard__PhHJm:nth-child(1) .h-6zedh8
${ESCOLHER_PACOTE3}         css=.h-3t22h6
${SELECIONAR_PACOTE3}       css=#LGPKG-1091929-2713106
${DATA_INICIO3}             01 Mar 2023
${DATA_FIM3}                30 Nov 2023
${DESTINO4}                 Espanha
${PACOTE4}                  css=.Packages_PackageCard__PhHJm:nth-child(2) .h-6zedh8
${ESCOLHER_PACOTE4}         css=.h-3t22h6
${SELECIONAR_PACOTE4}       css=#LGPKG-1384984-3032847
${DATA_INICIO4}             01 Mar 2024
${DATA_FIM4}                30 Nov 2024



*** Keywords ***
Abrir o site do Hurb
  Open Browser                      ${SITE}     ${NAVEGADOR}
  Maximize Browser Window

Clicar em Permitir todos os cookies
  Sleep                             5
  Wait and Click                    ${BOTAO_COOKIES}

Selecionar a opção Pacotes
  Wait and Click                    ${PACOTES}

Buscar por alguma cidade turística
  Input Text                        ${CAMPO_DESTINO}        ${DESTINO}
  Sleep                             10
  Wait and Click                    ${PESQUISAR}
  
Selecionar um pacote de viagem
  Wait and Click                    ${PACOTE}

Clicar em Escolher pacote
  Switch Window                     NEW
  Wait and Click                    ${ESCOLHER_PACOTE}
  Wait and Click                    ${SELECIONAR_PACOTE}
  Wait and Click                    ${BOTAO_PROXIMO}
  Wait and Click                    ${SELECIONAR_DIARIA}
  Wait and Click                    ${BOTAO_PROXIMO}
  Wait and Click                    ${BOTAO_IR_PAGAMENTO}

Validar as informações da Configuração da viagem
  Sleep                             10
  Page Should Contain               ${DATA_INICIO}
  Page Should Contain               ${DATA_FIM}

Selecionar a opção Boleto parcelado
  #Sleep           10
  Wait and Click                    ${BOLETO_PARCELADO}

Preencher os dados de pagamento
  Input Text                        ${CAMPO_NOME}           ${NOME}
  Input Text                        ${CAMPO_CELULAR}        ${CELULAR}
  Input Text                        ${CAMPO_CPF}            ${CPF}

Marcar o checkbox condições de termos de uso
  Sleep                             10
  Select Checkbox                   ${TERMOS_DE_USO}

Validar a informação sobre cancelamento grátis
  Page Should Contain               ${CANCELAMENTO_GRATIS}

#-------------------------------------------------

Buscar por alguma cidade turística 2
  Input Text                        ${CAMPO_DESTINO}         ${DESTINO2}
  Sleep                             10
  Wait and Click                    ${PESQUISAR}
  
Selecionar um pacote de viagem 2
  Wait and Click                    ${PACOTE2}

Clicar em Escolher pacote 2
  Switch Window                     NEW
  Wait and Click                    ${ESCOLHER_PACOTE2}
  Wait and Click                    ${SELECIONAR_PACOTE2}
  Wait and Click                    ${BOTAO_PROXIMO}
  Wait and Click                    ${SELECIONAR_DIARIA}
  Wait and Click                    ${BOTAO_PROXIMO}
  Wait and Click                    ${BOTAO_IR_PAGAMENTO}

Validar as informações da Configuração da viagem 2
  Sleep                             10
  Page Should Contain               ${DATA_INICIO2}
  Page Should Contain               ${DATA_FIM2}

#-------------------------------------------------

Buscar por alguma cidade turística 3
  Input Text                        ${CAMPO_DESTINO}         ${DESTINO3}
  Sleep                             10
  Wait and Click                    ${PESQUISAR}
  
Selecionar um pacote de viagem 3
  Wait and Click                    ${PACOTE3}

Clicar em Escolher pacote 3
  Switch Window                     NEW
  Wait and Click                    ${ESCOLHER_PACOTE3}
  Wait and Click                    ${SELECIONAR_PACOTE3}
  Wait and Click                    ${BOTAO_PROXIMO}
  Wait and Click                    ${SELECIONAR_DIARIA}
  Wait and Click                    ${BOTAO_PROXIMO}
  Wait and Click                    ${BOTAO_IR_PAGAMENTO}

Validar as informações da Configuração da viagem 3
  Sleep                             10
  Page Should Contain               ${DATA_INICIO3}
  Page Should Contain               ${DATA_FIM3}

#-------------------------------------------------

Buscar por alguma cidade turística 4
  Input Text                        ${CAMPO_DESTINO}         ${DESTINO4}
  Sleep                             10
  Wait and Click                    ${PESQUISAR}
  
Selecionar um pacote de viagem 4
  Wait and Click                    ${PACOTE4}

Clicar em Escolher pacote 4
  Switch Window                     NEW
  Wait and Click                    ${ESCOLHER_PACOTE4}
  Wait and Click                    ${SELECIONAR_PACOTE4}
  Wait and Click                    ${BOTAO_PROXIMO}
  Wait and Click                    ${SELECIONAR_DIARIA}
  Wait and Click                    ${BOTAO_PROXIMO}
  Wait and Click                    ${BOTAO_IR_PAGAMENTO}

Validar as informações da Configuração da viagem 4
  Sleep                             10
  Page Should Contain               ${DATA_INICIO4}
  Page Should Contain               ${DATA_FIM4}

#-------------------------------------------------

Wait and Click
  [Arguments]                       ${ELEMENTO}
  Wait Until Element is Visible     ${ELEMENTO}
  Click Element                     ${ELEMENTO}