public class Gerente extends Funcionario {

    private Double salario;
    private Double bonus;

    private double valorAdicional;

    public Gerente(String nome,
                   String nobrenome,
                   String cpf,
                   String email,
                   String matricula,
                   double salario) {
        super(nome, nobrenome, cpf, email, matricula);
        this.salario = salario;
        this.bonus = 500d;

    }

    @Override
    public void pagamento() {
        System.out.println("Gerente recebeu "
                + (this.salario + this.bonus) + "de salário.");
    }
}
