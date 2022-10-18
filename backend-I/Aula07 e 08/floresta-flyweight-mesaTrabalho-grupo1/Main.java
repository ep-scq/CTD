public class Main {
    private static final String cores[] = {"azul", "verde", "vermelho"};

    public static void main(String[] args) {

        for(int i = 0; i < 1000; i++){
            ArvoreFactory.obterArvore(corAleatoria());
        }
//        ArvoreFactory.obterArvore("azul");
//        ArvoreFactory.obterArvore("verde");
//        ArvoreFactory.obterArvore("azul");
//        ArvoreFactory.obterArvore("vermelho");
//        ArvoreFactory.obterArvore("verde");
//        ArvoreFactory.obterArvore("azul");

        System.out.println(ArvoreFactory.getFloresta().size());

        Runtime runtime = Runtime.getRuntime();
        System.out.println("Memória utilizada: "
                + (runtime.totalMemory() - runtime.freeMemory()) / (1024 * 1024));
    }
    private static String corAleatoria(){
        return cores[(int) (Math.random()*cores.length)];
    }
}
