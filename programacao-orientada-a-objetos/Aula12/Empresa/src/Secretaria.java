public class Secretaria extends Funcionario{

    private Double salario;

    public Secretaria(String nome,
                      String nobrenome,
                      String cpf,
                      String email,
                      String matricula,
                      Double salario) {
        super(nome, nobrenome, cpf, email, matricula);
        this.salario = salario;
    }

    @Override
    public void pagamento() {
        System.out.println("Secretaria recebe " +
                this.salario + " de salário");
    }
}
