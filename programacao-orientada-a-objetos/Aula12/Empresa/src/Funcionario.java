public abstract class Funcionario {

    private String nome;
    private String nobrenome;
    private String cpf;
    private String email;
    private String matricula;

    public abstract void pagamento();

    public Funcionario(String nome,
                       String nobrenome,
                       String cpf,
                       String email,
                       String matricula) {
        this.nome = nome;
        this.nobrenome = nobrenome;
        this.cpf = cpf;
        this.email = email;
        this.matricula = matricula;
    }

    @Override
    public String toString() {
        return "Funcionario{" +
                "nome='" + nome + '\'' +
                ", nobrenome='" + nobrenome + '\'' +
                ", cpf='" + cpf + '\'' +
                ", email='" + email + '\'' +
                ", matricula='" + matricula + '\'' +
                '}';
    }

    public String getNome() {
        return nome;
    }

    public String getNobrenome() {
        return nobrenome;
    }

    public String getCpf() {
        return cpf;
    }

    public String getEmail() {
        return email;
    }

    public String getMatricula() {
        return matricula;
    }
}
