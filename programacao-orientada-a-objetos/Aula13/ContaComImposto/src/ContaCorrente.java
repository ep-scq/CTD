public class ContaCorrente extends Conta {
    private double valorPermitido;


    @Override
    public void sacar(Double valor) {
        if (valorPermitido < valor) {
            System.out.println("Transação não realizada");
            System.out.println("Valor maior que o permitido");
        } else {
            this.saldo = this.saldo - valor;
        }
    }
}
