/*
1º Checkpoint de Programação Imperativa
Turma 02 Noite
Grupo 2:
Elivelton Alves
Filipe Campos
Elissandro Maciel
Fabiana Yumi Sato Kayanoki
Rafael Vilela
Davi Aponus
*/

function menuMicroondas(tempo, choice){ //

    //Variaveis do tempo de cada produto;
    const pipoca = 10;
    const macarrao = 8;
    const carne = 15;
    const feijao = 12;
    const brigadeiro = 8;

    //Variavel do tipo de produto escolhido;
    let produtos = 'pipoca'; 'macarrao'; 'carne'; 'feijao'; 'brigadeiro';

    //Mecanica do produto escolhido;

   /*==================================================================================== 
    Para quebrar este codigo ativar o IF abaixo se quer que funcione deixe como esta
    =====================================================================================*/ 
    
   // if(choice != produtos){
   //     return "Prato inexistente"
   // }
    

    //Mecanica do tempo escolhido;

    if ((tempo >= pipoca && tempo < pipoca*2 && choice == 'pipoca') || (tempo >= macarrao && tempo < macarrao*2 && choice == 'macarrao') || (tempo >= carne && tempo < carne*2 && choice == 'carne') || (tempo >= feijao && tempo < feijao*2 && choice == 'feijao') || (tempo >= brigadeiro && tempo < brigadeiro*2 && choice == 'brigadeiro')){
        return "Prato pronto, bom apetite!!!";
    }

    else if ((tempo < pipoca && choice == 'pipoca') || (tempo < macarrao && choice == 'macarrao') || (tempo < carne && choice == 'carne') || (tempo < feijao && choice == 'feijao') || (tempo < brigadeiro && choice == 'brigadeiro')){
        return "Tempo Insuficiente";
    }

    else if  ((tempo >= pipoca*2 && tempo < pipoca*3 && choice == 'pipoca') || (tempo >= macarrao*2 && tempo < macarrao*3 && choice == 'macarrao') || (tempo >= carne*2 && tempo < carne*3 && choice == 'carne') || (tempo >= feijao*2 && tempo < feijao*3 && choice == 'feijao') || (tempo >= brigadeiro*2 && tempo < brigadeiro*3 && choice == 'brigadeiro')){
        return "Comida queimou";
    }

    else  if  ((tempo >= pipoca*3 && choice == 'pipoca') || (tempo >= macarrao*3 && choice == 'macarrao') || (tempo >= carne*3 && choice == 'carne') || (tempo >= feijao*3 && choice == 'feijao') || (tempo >= brigadeiro*3 && choice == 'brigadeiro')){
        return "Kabumm";

    }

    else
    return "Prato inexistente !!!";
}

/* ========================================================================================================
 Para testar os detalhes do Menu 
  =========================================================================================================*/
  
  // pipoca = deve retornar: "Prato pronto, bom apetite!!!" (tempo maior que 10 e menor que 20); "Tempo Insuficiente" (tempo menor que 10); "Comida queimou" (tempo maior que 20 e menor que 30); "Kabumm" (tempo maior que 30)
  console.log(menuMicroondas(10, 'pipoca'))
  console.log(menuMicroondas(9, 'pipoca'))
  console.log(menuMicroondas(20, 'pipoca'))
  console.log(menuMicroondas(30, 'pipoca'))

  // macarrao = deve retornar: "Prato pronto, bom apetite!!!" (tempo maior que 8 e menor que 16); "Tempo Insuficiente" (tempo menor que 8); "Comida queimou" (tempo maior que 16 e menor que 24); "Kabumm" (tempo maior que 24)
  console.log(menuMicroondas(10, 'macarrao'))
  console.log(menuMicroondas(5, 'macarrao'))
  console.log(menuMicroondas(20, 'macarrao'))
  console.log(menuMicroondas(25, 'macarrao'))

  // carne = deve retornar: "Prato pronto, bom apetite!!!" (tempo maior que 15 e menor que 30); "Tempo Insuficiente" (tempo menor que 15); "Comida queimou" (tempo maior que 30 e menor que 45); "Kabumm" (tempo maior que 45)
  console.log(menuMicroondas(20, 'carne'))
  console.log(menuMicroondas(10, 'carne'))
  console.log(menuMicroondas(35, 'carne'))
  console.log(menuMicroondas(50, 'carne'))

  // feijao = deve retornar: "Prato pronto, bom apetite!!!" (tempo maior que 12 e menor que 24); "Tempo Insuficiente" (tempo menor que 12); "Comida queimou" (tempo maior que 24 e menor que 36); "Kabumm" (tempo maior que 36)
  console.log(menuMicroondas(14, 'feijao'))
  console.log(menuMicroondas(10, 'feijao'))
  console.log(menuMicroondas(26, 'feijao'))
  console.log(menuMicroondas(38, 'feijao'))

  // brigadeiro = deve retornar: "Prato pronto, bom apetite!!!"(tempo maior que 8 e menor que 16); "Tempo Insuficiente" (tempo menor que 8); "Comida queimou"(tempo maior que 16 e menor que 24); "Kabumm" (tempo maior que 24)
  console.log(menuMicroondas(10, 'brigadeiro'))
  console.log(menuMicroondas(6, 'brigadeiro'))
  console.log(menuMicroondas(18, 'brigadeiro'))
  console.log(menuMicroondas(26, 'brigadeiro'))

  // prato inexistente
  console.log(menuMicroondas(5, 'pao'))


    


