import java.util.ArrayList;

public class Conteineres implements Comparable<Conteineres> {
    private int id;
    private String descricao;
    private String pais;
    private boolean marcaMateriaisPerigosos;

    public Conteineres(int id, String descricao, String pais, boolean marcaMateriaisPerigosos) {
        this.id = id;
        this.descricao = descricao;
        this.pais = pais;
        this.marcaMateriaisPerigosos = marcaMateriaisPerigosos;
    }


    //mostrá-los ordenados de acordo com o número que os identifica

    @Override
    public int compareTo(Conteineres conteiner) {

        if(this.id == conteiner.getId()) {
            return 0;
        } else if (this.id < conteiner.getId()){
            return -1;
        } else{
            return 1;
        }

    }


    public int getId() {
        return id;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getPais() {
        return pais;
    }

    public boolean isMarcaMateriaisPerigosos() {
        return marcaMateriaisPerigosos;
    }


}
