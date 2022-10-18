# Elissandro Pereira Maciel Turma09 PartTime
*** Settings ***
Library         SeleniumLibrary
Resource        ./Hurb.resource
Test Setup      Abrir o site do Hurb
Test Teardown   Close Browser

*** Test Cases ***

Processo de reserva de pacote de viagem Orlando
  Clicar em Permitir todos os cookies
  Selecionar a opção Pacotes
  Buscar por alguma cidade turística
  Selecionar um pacote de viagem
  Clicar em Escolher pacote
  Validar as informações da Configuração da viagem
  Selecionar a opção Boleto parcelado
  Preencher os dados de pagamento
  Marcar o checkbox condições de termos de uso
  Validar a informação sobre cancelamento grátis

Processo de reserva de pacote de viagem Portugal
  Clicar em Permitir todos os cookies
  Selecionar a opção Pacotes
  #Inicio dos Itens a ser mudados
  Buscar por alguma cidade turística 2
  Selecionar um pacote de viagem 2
  Clicar em Escolher pacote 2
  Validar as informações da Configuração da viagem 2
  #Fim dos Itens a ser mudados
  Selecionar a opção Boleto parcelado
  Preencher os dados de pagamento
  Marcar o checkbox condições de termos de uso
  Validar a informação sobre cancelamento grátis

Processo de reserva de pacote de viagem Maldivas
  Clicar em Permitir todos os cookies
  Selecionar a opção Pacotes
  #Inicio dos Itens a ser mudados
  Buscar por alguma cidade turística 3
  Selecionar um pacote de viagem 3
  Clicar em Escolher pacote 3
  Validar as informações da Configuração da viagem 3
  #Fim dos Itens a ser mudados
  Selecionar a opção Boleto parcelado
  Preencher os dados de pagamento
  Marcar o checkbox condições de termos de uso
  Validar a informação sobre cancelamento grátis

Processo de reserva de pacote de viagem Espanha
  Clicar em Permitir todos os cookies
  Selecionar a opção Pacotes
  #Inicio dos Itens a ser mudados
  Buscar por alguma cidade turística 4
  Selecionar um pacote de viagem 4
  Clicar em Escolher pacote 4
  Validar as informações da Configuração da viagem 4
  #Fim dos Itens a ser mudados
  Selecionar a opção Boleto parcelado
  Preencher os dados de pagamento
  Marcar o checkbox condições de termos de uso
  Validar a informação sobre cancelamento grátis

  