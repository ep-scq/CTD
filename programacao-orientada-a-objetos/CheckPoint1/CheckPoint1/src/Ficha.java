public class Ficha {
    private Integer id;
    private Cliente cliente;
    private String dataEntrada;
    private Equipamento equipamento;

    public Ficha(Integer id, Cliente cliente, String dataEntrada, Equipamento equipamento) {
        this.id = id;
        this.cliente = cliente;
        this.dataEntrada = dataEntrada;
        this.equipamento = equipamento;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public String getDataEntrada() {
        return dataEntrada;
    }

    public void setDataEntrada(String dataEntrada) {
        this.dataEntrada = dataEntrada;
    }

    public Equipamento getEquipamento() {
        return equipamento;
    }

    public void setEquipamento(Equipamento equipamento) {
        this.equipamento = equipamento;
    }
}
