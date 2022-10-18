public abstract class Conta {
    protected double saldo;

    public abstract void sacar(Double valor);

    public void depositar(double valor) {
        this.saldo = this.saldo + valor;
    }

    public void informarSaldo() {
        System.out.println(
                "O saldo da conta é " + this.saldo + "!!!");
    }
}
