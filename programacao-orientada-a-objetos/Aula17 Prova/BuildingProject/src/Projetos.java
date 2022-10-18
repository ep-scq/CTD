public class Projetos {
    private Integer id;
    private String nome;
    private String cidadeProjeto;
    private Obra obra;
    private String status;

    public Projetos(Integer id, String nome, String cidadeProjeto, Obra obra, String status) {
        this.id = id;
        this.nome = nome;
        this.cidadeProjeto = cidadeProjeto;
        this.obra = obra;
        this.status = status;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCidadeProjeto() {
        return cidadeProjeto;
    }

    public void setCidadeProjeto(String cidadeProjeto) {
        this.cidadeProjeto = cidadeProjeto;
    }

    public Obra getObra() {
        return obra;
    }

    public void setObra(Obra obra) {
        this.obra = obra;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
