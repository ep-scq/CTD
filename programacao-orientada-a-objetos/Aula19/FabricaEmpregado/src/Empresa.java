import java.util.ArrayList;
import java.util.List;

public class Empresa {
    private String cnpj;
    private List<Empregado> empregados;

    public Empresa(String cnpj) {
        this.cnpj = cnpj;
        this.empregados = new ArrayList<>();
    }

    public String getCnpj() {
        return cnpj;
    }

    public double calculadorSalarioTotal(int salario){
        return 0;
    }
}
