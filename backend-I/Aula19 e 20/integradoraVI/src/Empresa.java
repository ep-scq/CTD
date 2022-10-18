import java.io.Serializable;
import java.util.List;

public class Empresa implements Serializable {

    private String CNPJ;
    private String razaoSocial;
    List<Funcionario> funcionarioList;

    public Empresa(String CNPJ, String razaoSocial, List<Funcionario> funcionarioList) {
        this.CNPJ = CNPJ;
        this.razaoSocial = razaoSocial;
        this.funcionarioList = funcionarioList;
    }

    public String getCNPJ() {
        return CNPJ;
    }

    public void setCNPJ(String CNPJ) {
        this.CNPJ = CNPJ;
    }

    public String getRazaoSocial() {
        return razaoSocial;
    }

    public void setRazaoSocial(String razaoSocial) {
        this.razaoSocial = razaoSocial;
    }

    public List<Funcionario> getFuncionarioList() {
        return funcionarioList;
    }

    public void setFuncionarioList(List<Funcionario> funcionarioList) {
        this.funcionarioList = funcionarioList;
    }
}
