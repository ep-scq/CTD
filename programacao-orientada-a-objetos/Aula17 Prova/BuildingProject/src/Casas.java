import java.time.LocalDate;

public class Casas extends Obra{
    private String tamanhoTerreno;
    private Integer numeroBanheiros;
    private Integer numeroQuartos;

    public Casas(Integer id, String endereco, LocalDate dataInicio, LocalDate previsaoTermino, LocalDate dataTermino, double tamanhoTerreno, Integer numeroBanheiros, Integer numeroQuartos) {
        super(id, endereco, dataInicio, previsaoTermino, dataTermino);
        this.tamanhoTerreno = tamanhoTerreno;
        this.numeroBanheiros = numeroBanheiros;
        this.numeroQuartos = numeroQuartos;
    }

    public String getTamanhoTerreno() {
        return tamanhoTerreno;
    }

    public void setTamanhoTerreno(String tamanhoTerreno) {
        this.tamanhoTerreno = tamanhoTerreno;
    }

    public Integer getNumeroBanheiros() {
        return numeroBanheiros;
    }

    public void setNumeroBanheiros(Integer numeroBanheiros) {
        this.numeroBanheiros = numeroBanheiros;
    }

    public Integer getNumeroQuartos() {
        return numeroQuartos;
    }

    public void setNumeroQuartos(Integer numeroQuartos) {
        this.numeroQuartos = numeroQuartos;
    }
}
