import java.time.LocalDate;

public abstract class Obra {
    protected Integer id;
    protected String endereco;
    protected LocalDate dataInicio;
    protected LocalDate previsaoTermino;
    protected LocalDate dataTermino;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public LocalDate getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(LocalDate dataInicio) {
        this.dataInicio = dataInicio;
    }

    public LocalDate getPrevisaoTermino() {
        return previsaoTermino;
    }

    public void setPrevisaoTermino(LocalDate previsaoTermino) {
        this.previsaoTermino = previsaoTermino;
    }

    public LocalDate getDataTermino() {
        return dataTermino;
    }

    public void setDataTermino(LocalDate dataTermino) {
        this.dataTermino = dataTermino;
    }

    public Obra(Integer id, String endereco, LocalDate dataInicio, LocalDate previsaoTermino, LocalDate dataTermino) {
        this.id = id;
        this.endereco = endereco;
        this.dataInicio = dataInicio;
        this.previsaoTermino = previsaoTermino;
        this.dataTermino = dataTermino;
    }
}
