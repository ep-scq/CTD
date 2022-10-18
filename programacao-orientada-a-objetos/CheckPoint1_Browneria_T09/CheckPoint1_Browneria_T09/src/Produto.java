public class Produto {
    private Integer idProduto;
    private Double valorUnitores;
    private String sabor1;
    private Integer quantidadeSabor1;
    private String sabor2;
    private Integer quantidadeSabor2;

    public Produto(Integer idProduto,
                    Double valorUnitores,
                    String sabor1,
                    Integer quantidadeSabor1,
                    String sabor2,
                    Integer quantidadeSabor2) {
        this.idProduto = idProduto;
        this.valorUnitores = valorUnitores;
        this.sabor1 = sabor1;
        this.quantidadeSabor1 = quantidadeSabor1;
        this.sabor2 = sabor2;
        this.quantidadeSabor2 = quantidadeSabor2;
    }



    public void escolherSabor() {
        System.out.println("Seu pedido foi: " + this.quantidadeSabor1 + " de " + this.sabor1);
        System.out.println("Seu pedido foi: " + this.quantidadeSabor2 + " de " + this.sabor2);
    }

    @Override
    public String toString() {
        return "Produtos{" +
                "idProduto=" + idProduto +
                ", valorUnitores=" + valorUnitores +
                ", sabor1='" + sabor1 + '\'' +
                ", quantidadeSabor1=" + quantidadeSabor1 +
                ", sabor2='" + sabor2 + '\'' +
                ", quantidadeSabor2=" + quantidadeSabor2 +
                '}';
    }

    public Integer getIdProduto() {
        return idProduto;
    }

    public void setIdProduto(Integer idProduto) {
        this.idProduto = idProduto;
    }

    public Double getValorUnitores() {
        return valorUnitores;
    }

    public void setValorUnitores(Double valorUnitores) {
        this.valorUnitores = valorUnitores;
    }

    public String getSabor1() {
        return sabor1;
    }

    public void setSabor1(String sabor1) {
        this.sabor1 = sabor1;
    }

    public Integer getQuantidadeSabor1() {
        return quantidadeSabor1;
    }

    public void setQuantidadeSabor1(Integer quantidadeSabor1) {
        this.quantidadeSabor1 = quantidadeSabor1;
    }

    public String getSabor2() {
        return sabor2;
    }

    public void setSabor2(String sabor2) {
        this.sabor2 = sabor2;
    }

    public Integer getQuantidadeSabor2() {
        return quantidadeSabor2;
    }

    public void setQuantidadeSabor2(Integer quantidadeSabor2) {
        this.quantidadeSabor2 = quantidadeSabor2;
    }
}
