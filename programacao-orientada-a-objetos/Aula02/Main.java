import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("1. Qual n�mero voc� quer saber se � primo?");
        int numero = scanner.nextInt();
        if(Primo.ePrimo(numero)){
            System.out.println("� primo!");
        } else System.out.println("N�o � primo!");

        System.out.println("\n2. Insira 3 n�meros para comparar. Primeiro:");
        Integer numA = scanner.nextInt();
        System.out.println("Segundo: ");
        Integer numB = scanner.nextInt();
        System.out.println("Terceiro: ");
        Integer numC = scanner.nextInt();

        Integer resultado = ComparaNumeros.comparaNumeros(numA, numB, numC);

        if(resultado == 0) {
            System.out.println("Os n�meros s�o iguais.");
        } else System.out.println("O maior n�mero � " + resultado + ".");
    }

    public class Primo {
        static boolean ePrimo(int num) {
            for (int i = 2; i < num / 2; i++) {
                if (num % i == 0) {
                    return false;
                }
            }
            return true;
        }

        static int comparaNumeros(int numA, int numB, int numC) {
            int[] numbers = {numA, numB, numC};
            int length = numbers.length;
            int aux;

            if (numA == numB && numB == numC) {
                return 0;
            } else {
                for (int i = 0; i < length; i++) {
                    for (int j = i + 1; j < length; j++) {
                        if (numbers[i] > numbers[j]) {
                            aux = numbers[i];
                            numbers[i] = numbers[j];
                            numbers[j] = aux;
                        }
                    }
                }
                return numbers[length - 1];
            }
        }
    }
}
