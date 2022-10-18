import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Servico {
    private Integer id;
    private Cliente cliente;
    private LocalDate dataEntrada;
    private List<Equipamento> equipamentos = new ArrayList<>();
    private Double valorTaxaServico;

    public Servico(Integer id, Cliente cliente, LocalDate dataEntrada, Double valorTaxaServico) {
        if (id < 0) {
            throw new RuntimeException("Número de ID inválido");
        }
        this.cliente = cliente;
        this.dataEntrada = dataEntrada;
        this.valorTaxaServico = valorTaxaServico;
    }

    public void cadastraEquipamento(Equipamento equipamento){
        equipamentos.add(equipamento);
    }

    public Double valorTotal(){
        for (Equipamento equipamento : equipamentos) {
            if (equipamento.valorParcialConserto() > 0){
                return equipamento.valorParcialConserto() + valorTaxaServico;
            }
        }
        return valorTaxaServico;
    }

   public Integer getId() {
        return id;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public LocalDate getDataEntrada() {
        return dataEntrada;
    }

    public List<Equipamento> getEquipamentos() {
        return equipamentos;
    }

    public Double getValorTaxaServico() {
        return valorTaxaServico;
    }

    public void setValorTaxaServico(Double valorTaxaServico) {
        this.valorTaxaServico = valorTaxaServico;
    }

    @Override
    public String toString() {
        return "Servico{" +
                "id=" + id +
                ", cliente=" + cliente.getNome() +
                ", dataEntrada=" + dataEntrada +
                ", equipamentos=" + equipamentos +
                ", valorTaxaServico=" + valorTaxaServico + " Valor Total dos Serviços " + this.valorTotal() +
                '}';
    }
}