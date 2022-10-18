import java.time.LocalDate;

public class Main {

    public static void main(String[] args) {
        PessoaFisica pessoaFisica = new PessoaFisica(1,"Daniel Marques","54123456789", "12345678949");
        Equipamento equipamento = new Equipamento(1, "Dell", "XPS15");
        Servico servico = new Servico(1,pessoaFisica, LocalDate.now(),equipamento,30d);

        equipamento.setValorDasPecas(250d);
        equipamento.setValorDosServicos(120d);

        System.out.println(servico);

    }
}
