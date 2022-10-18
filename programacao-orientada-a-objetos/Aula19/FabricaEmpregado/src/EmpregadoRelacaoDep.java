public class EmpregadoRelacaoDep extends Empregado {
    private double salarioMensal;

    public EmpregadoRelacaoDep(String nome,
                               String sobrenome,
                               String arquivo,
                               double salarioMensal) {
        super(nome, sobrenome, arquivo);
        this.salarioMensal = salarioMensal;
    }

    @Override
    public double calcularSalario(int dias) {
        return 0;
    }
}
