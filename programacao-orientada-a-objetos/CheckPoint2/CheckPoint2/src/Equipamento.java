public class Equipamento {
    private Integer id;
    private String marca;
    private String modelo;
    private Double valorDosServicos;
    private Double valorDasPecas;

    public Equipamento(Integer id, String marca) {
        this.id = id;
        this.marca = marca;
    }

    public Equipamento(Integer id, String marca, String modelo) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
    }

    public Double valorParcialConserto(){
        return valorDasPecas + valorDosServicos;
    }


    public Integer getId() {
        return id;
    }

    public String getMarca() {
        return marca;
    }

    public String getModelo() {
        return modelo;
    }

    public Double getValorDosServicos() {
        return valorDosServicos;
    }

    public Double getValorDasPecas() {
        return valorDasPecas;
    }

    public void setValorDosServicos(Double valorDosServicos) {
        this.valorDosServicos = valorDosServicos;
    }

    public void setValorDasPecas(Double valorDasPecas) {
        this.valorDasPecas = valorDasPecas;
    }

    @Override
    public String toString() {
        return marca + " - " + modelo;
    }
}
