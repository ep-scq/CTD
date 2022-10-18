public class Cliente {
    private String nome;
    private String sobrenome;
    private String rg;
    private double saldoEmConta;
    private double limite;
    private double divida;

    public Cliente(String nome, String sobrenome, String rg, double limite) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.rg = rg;
        this.limite = limite;
        this.divida = 0;
        saldoEmConta = 0;

    }

    public void comprar(Double valor) {
        if (valor > this.limite) {
            throw new ClientesException("Operação não permitida, pois o valor solicitado é maior que o limite");
        }
        System.out.println("Operação realizada");

    }

}
