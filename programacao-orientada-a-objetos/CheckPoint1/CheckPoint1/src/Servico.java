import java.time.LocalDate;

public class Servico {
    private Integer id;
    private Cliente cliente;
    private LocalDate dataEntrada;
    private Equipamento equipamento;
    private Double valorTaxaServico;

    public Servico(Integer id, Cliente cliente, LocalDate dataEntrada, Equipamento equipamento, Double valorTaxaServico) {
        this.id = id;
        this.cliente = cliente;
        this.dataEntrada = dataEntrada;
        this.equipamento = equipamento;
        this.valorTaxaServico = valorTaxaServico;
    }

    public Double valorTotal(Equipamento equipamento){
        if (equipamento.valorParcialConserto() > 0){
            return equipamento.valorParcialConserto() + valorTaxaServico;
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

    public Equipamento getEquipamento() {
        return equipamento;
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
                ", equipamento=" + equipamento.getModelo() +
                ", valorTaxaServico=" + valorTaxaServico + " Valor Total dos Serviços " + this.valorTotal(equipamento) +
                '}';
    }
}