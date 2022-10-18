public class Vendedor extends Funcionario {

    private double salario;

    private double comissao;

    public Vendedor(String nome,
                    String nobrenome,
                    String cpf,
                    String email,
                    String matricula,
                    double salario,
                    double comissao) {
        super(nome, nobrenome, cpf, email, matricula);
        this.salario = salario;
        this.comissao = comissao;
    }

    @Override
    public void pagamento() {
        System.out.println("O vendedor recebe de salário " +
                (this.salario + this.comissao));
    }
}
