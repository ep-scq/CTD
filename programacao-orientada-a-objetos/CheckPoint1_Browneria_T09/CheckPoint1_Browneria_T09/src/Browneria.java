public class Browneria {
    private String nome;
    private String CNPJ;
    private Produto produtos;
    private Pedido pedido;

    public Browneria(String nome, String CNPJ, Produto produtos, Pedido pedido) {
        this.nome = nome;
        this.CNPJ = CNPJ;
        this.produtos = produtos;
        this.pedido = pedido;
    }

    @Override
    public String toString() {
        return "Browneria{" +
                "nome='" + nome + '\'' +
                ", CNPJ='" + CNPJ + '\'' +
                ", produtos=" + produtos +
                ", pedido=" + pedido +
                '}';
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCNPJ() {
        return CNPJ;
    }

    public void setCNPJ(String CNPJ) {
        this.CNPJ = CNPJ;
    }

    public Produto getProdutos() {
        return produtos;
    }

    public void setProdutos(Produto produtos) {
        this.produtos = produtos;
    }

    public Pedido getPedido() {
        return pedido;
    }

    public void setPedido(Pedido pedido) {
        this.pedido = pedido;
    }
}