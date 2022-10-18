import java.util.HashMap;

public class ArvoreFactory {
    private static HashMap<String, Arvore> floresta = new HashMap<>();

    public static Arvore obterArvore(String cor){
        Arvore arvore = floresta.get(cor);
        if(arvore == null){
            arvore = new Arvore(cor);
            floresta.put(cor, arvore);
            System.out.println(">> Plantando um exemplar " + arvore);
            return arvore;
        }
        System.out.println("Replantando " + arvore);
        return arvore;
    }

    public static HashMap<String, Arvore> getFloresta() {
        return floresta;
    }
}
