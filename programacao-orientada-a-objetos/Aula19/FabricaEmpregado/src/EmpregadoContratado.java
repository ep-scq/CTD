public class EmpregadoContratado extends Empregado {
    protected double valorPorHora;
    protected double imposto;

    public EmpregadoContratado(String nome,
                               String sobrenome,
                               String arquivo,
                               double valorPorHora,
                               double imposto) {
        super(nome, sobrenome, arquivo);
        this.valorPorHora = valorPorHora;
        this.imposto = imposto;
    }

    @Override
    public double calcularSalario(int dias) {
        return 0;
    }

}
