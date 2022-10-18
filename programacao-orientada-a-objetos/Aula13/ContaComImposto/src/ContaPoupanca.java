public class ContaPoupanca extends Conta implements GravarImposto, ExibirEmTela {

    @Override
    public void sacar(Double valor) {
        if (valor > this.saldo) {
            System.out.println("Transação não realizada");
            System.out.println("Saldo insuficiente");
        } else {
            this.saldo = this.saldo - valor;
        }
    }

    public void creditarJuros() {
        this.saldo = this.saldo * 1.1;
    }

    @Override
    public double imposto(double porcentagem) {
        return this.saldo = this.saldo * porcentagem *0.1;
    }
}
