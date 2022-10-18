import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Empresa empresa = new Empresa("Digital house", "35155403218");

        Funcionario gerente = new Gerente("Carlos",
                "Rodrigues", "3515442", "carlos@dh.com.br", "1123", 2500.0);

        Funcionario secretaria = new Secretaria("Jessica",
                "Souza", "12345", "jessica@dh.com.br", "1124", 1500.d);

        gerente.pagamento();
        secretaria.pagamento();

        List<Funcionario> funcionarios = new ArrayList<>();
        funcionarios.add(gerente);
        funcionarios.add(secretaria);
        empresa.setFuncionarios(funcionarios);

//        empresa.setFuncionarios(List.of(gerente, secretaria));

    }
}
