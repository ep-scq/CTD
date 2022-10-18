// Lucas Bernardo, Dário Olah, Elissandro Maciel, Elivelton Alves, Leandro Carmo

public class Main {
    public static void main(String[] args) {
        Conteineres con1 = new Conteineres(01,"xxx","Desconhecido",true);
        Conteineres con2 = new Conteineres(02,"xxx","China",false);
        Conteineres con3 = new Conteineres(03,"xxx","Brasil",true);
        Conteineres con4 = new Conteineres(04,"xxx","Desconhecido",false);
        Conteineres con5 = new Conteineres(05,"xxx","Desconhecido",true);
        Conteineres con6 = new Conteineres(06,"xxx","EUA",true);
        Conteineres con7 = new Conteineres(07,"xxx","Desconhecido",true);


        Porto porto = new Porto("Porto 1");

        porto.addConteiner(con1);
        porto.addConteiner(con2);
        porto.addConteiner(con3);
        porto.addConteiner(con4);
        porto.addConteiner(con5);
        porto.addConteiner(con6);
        porto.addConteiner(con7);



        porto.mostrarConteiners();
        porto.quantidadeConteineresPerigososDesconhecido();
    }
}
