import java.time.LocalDate;

public class Departamentos extends Obra{
    private Double numeroAndares;
    private Double apartamentosPorAndar;
    private String arranhaCeu;

    public Departamentos(Integer id, String endereco, LocalDate dataInicio, LocalDate previsaoTermino, LocalDate dataTermino, Double numeroAndares, Double apartamentosPorAndar, String arranhaCeu) {
        super(id, endereco, dataInicio, previsaoTermino, dataTermino);
        this.numeroAndares = numeroAndares;
        this.apartamentosPorAndar = apartamentosPorAndar;
        this.arranhaCeu = arranhaCeu;
    }

    public double quantidadeApartamentos() { return numeroAndares * apartamentosPorAndar; }

    public String arranhaCeuSN() {
        if (quantidadeApartamentos() > 15){
            return "Sim";
        }
         return "Não";
    }

    public Double getNumeroAndares() {
        return numeroAndares;
    }

    public void setNumeroAndares(Double numeroAndares) {
        this.numeroAndares = numeroAndares;
    }

    public Double getApartamentosPorAndar() {
        return apartamentosPorAndar;
    }

    public void setApartamentosPorAndar(Double apartamentosPorAndar) {
        this.apartamentosPorAndar = apartamentosPorAndar;
    }

    public String  getArranhaCeu() {
        return arranhaCeu;
    }

    public void setArranhaCeu(String arranhaCeu) {
        this.arranhaCeu = arranhaCeu;
    }
}
