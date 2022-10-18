import java.util.ArrayList;
import java.util.Collections;

public class Porto {
    private String nome;

    public Porto(String nome) {
        this.nome = nome;
    }


    //mostrá-los ordenados de acordo com o número que os identifica

    private ArrayList<Conteineres> listaDeConteiners = new ArrayList<>();

    public void addConteiner(Conteineres conteiner) {
        this.listaDeConteiners.add(conteiner);
    }

    public void mostrarConteiners(){

        Collections.sort(this.listaDeConteiners);

        for (Conteineres conteiner : this.listaDeConteiners) {
            System.out.println("Conteiner de ID nº " + conteiner.getId() + '\n');
        }
    }

    public void quantidadeConteineresPerigososDesconhecido(){
        int quantidade = 0;
        for (Conteineres conteiner : this.listaDeConteiners) {
            if (conteiner.isMarcaMateriaisPerigosos() && ( conteiner.getPais()=="Desconhecido" )) {
                quantidade++;
            }
        }
        System.out.println(" A quantidade de conteineres perigosos de origem Desconhecida é: " + quantidade);
    }
}
