import java.util.Scanner;

public class ClassePrincipalJava {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Qual número você quer saber se é primo?");
        int numero = scanner.nextInt();
        if(Primo.ePrimo(numero)){
            System.out.println("É primo!");
        } else System.out.println("Não é primo!");
    }
}
