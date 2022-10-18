Exercício cachorrinhos:


    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("Qual o nome do cachorrinho??");
        String nomeCachorrinho = scanner.nextLine();
        System.out.println("Quantos quilos de alimento são necessários???");
        Float quantidade = scanner.nextFloat();

        int quantidadeMinimaNecessaria = quantosPacotes(quantidade, scanner);
        System.out.println("O nome do cachorrinho é " + nomeCachorrinho + " a quantidade minima para ele de pacotes é " + quantidadeMinimaNecessaria);
    }

    public static int quantosPacotes(Float quantidade, Scanner scanner) {
        int pacotes = 0;
        float quilos = 0;

        while (quantidade > quilos) {
            System.out.println("Digite o peso do pacote:");
            float aux = scanner.nextFloat();

            quilos = quilos + aux;
            pacotes = pacotes + 1;

        }

        return pacotes;
    }