/*
Grupo 2
Turma 2 Noite

Elivelton Alves
Filipe Campos
Elissandro Maciel
Fabiana Yumi
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

    if ((choice == 'pipoca' && tempo < pipoca*2 && tempo >= pipoca) || (tempo < macarrao*2 && choice == 'macarrao' && tempo >= macarrao) || (tempo < carne*2 && choice == 'carne' && tempo >= carne) || (tempo < feijao*2 && choice == 'feijao' && tempo >= feijao) || (tempo < brigadeiro*2 && choice == 'brigadeiro' && tempo >= brigadeiro)){
        return "Prato pronto, bom apetite!!!";
    }

    else if ((choice == 'pipoca' && tempo < pipoca) || (tempo < macarrao && choice == 'macarrao') || (tempo < carne && choice == 'carne') || (tempo < feijao && choice == 'feijao') || (tempo < brigadeiro && choice == 'brigadeiro')){
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
 Para testar preencher neste painel digital ultra hi-tech abaixo os detalhes do seu Menu que vamos preparar
  =========================================================================================================*/

console.log(menuMicroondas(10,'pipoca'))