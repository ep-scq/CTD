import java.util.Scanner;

public class ClassePrincipalJava {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Qual n�mero voc� quer saber se � primo?");
        int numero = scanner.nextInt();
        if(Primo.ePrimo(numero)){
            System.out.println("� primo!");
        } else System.out.println("N�o � primo!");
    }
}
