import java.time.LocalDate;

public class Pedido {
    private Integer idPedido;
    private Cliente cliente;
    private Produto produto;
    private Integer quantidadeProduto;
    private Boolean statusDoPedido;
    private LocalDate dataEntrega;

    public Pedido(Integer idPedido,
                  Cliente cliente,
                  Produto produto,
                  Integer quantidadeProduto,
                  Boolean statusDoPedido,
                  LocalDate dataEntrega) {
        this.idPedido = idPedido;
        this.cliente = cliente;
        this.produto = produto;
        this.quantidadeProduto = quantidadeProduto;
        this.statusDoPedido = statusDoPedido;
        this.dataEntrega = dataEntrega;
    }

    public Integer getIdPedido() {
        return idPedido;
    }

    public void setIdPedido(Integer idPedido) {
        this.idPedido = idPedido;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public Integer getQuantidadeProduto() {
        return quantidadeProduto;
    }

    public void setQuantidadeProduto(Integer quantidadeProduto) {
        this.quantidadeProduto = quantidadeProduto;
    }

    public Boolean getStatusDoPedido() {
        return statusDoPedido;
    }

    public void setStatusDoPedido(Boolean statusDoPedido) {
        this.statusDoPedido = statusDoPedido;
    }

    public LocalDate getDataEntrega() {
        return dataEntrega;
    }

    public void setDataEntrega(LocalDate dataEntrega) {
        this.dataEntrega = dataEntrega;
    }

    @Override
    public String toString() {
        return "Pedido{" +
                "idPedido=" + idPedido +
                ", cliente=" + cliente +
                ", produto=" + produto +
                ", quantidadeProduto=" + quantidadeProduto +
                ", statusDoPedido=" + statusDoPedido +
                ", dataEntrega=" + dataEntrega +
                '}';
    }

    public void detalhesPedido() {
        System.out.println("Foram pedidos um total de : " + this.quantidadeProduto + " brownies");
        System.out.println("Que serão entregues no dia: " + this.dataEntrega);
    }

}