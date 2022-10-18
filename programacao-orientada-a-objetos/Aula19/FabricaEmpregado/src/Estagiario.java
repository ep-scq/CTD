public class Estagiario extends EmpregadoContratado {

    private int limiteHorasDiarias;
    public Estagiario(String nome,
                      String sobrenome,
                      String arquivo,
                      double valorPorHora,
                      double imposto,
                      int limiteHoras) {
        super(nome, sobrenome, arquivo, valorPorHora, imposto);
        this.limiteHorasDiarias = limiteHoras;
    }

    @Override
    public double calcularSalario(int dias) {
        return  15 * dias;
    }

    public double calculaSalarioComoEmpregadoContrato(int dias) {
        return super.calcularSalario(dias);
    }

    public double metodo(int dias) {
        return this.calcularSalario(dias);
    }



}
