import java.time.LocalDate;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("Insira seu ID ");
        Integer idServico = scanner.nextInt();
        System.out.println("Insira seu nome ");
        String nome = scanner.next();

        PessoaFisica pessoaFisica = new PessoaFisica(1,nome,"54123456789", "12345678949");
        Equipamento equipamento = new Equipamento(1, "Dell", "XPS15");
        Equipamento equipamentoSemModelo = new Equipamento(5,"Samsung");

        Servico servico = new Servico(idServico,pessoaFisica, LocalDate.of(2022,6,10), 100d);
        Servico servico2 = new Servico(-6,pessoaFisica, LocalDate.of(2022,6,10), 100d);
        servico.cadastraEquipamento(equipamento);
        servico.cadastraEquipamento(equipamentoSemModelo);

        equipamento.setValorDasPecas(250d);
        equipamento.setValorDosServicos(120d);

        System.out.println(servico);

    }
}
