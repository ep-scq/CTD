public class PessoaFisica extends Cliente{
    private String cpf;

    public PessoaFisica(Integer id, String nome, String telefone, String cpf) {
        super(id, nome, telefone);
        this.cpf = cpf;
    }
}
