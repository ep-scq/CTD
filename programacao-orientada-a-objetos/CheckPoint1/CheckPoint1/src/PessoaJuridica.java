public class PessoaJuridica extends Cliente {

    private String cnpj;

    public PessoaJuridica(Integer id, String nome, String telefone, String cnpj) {
        super(id, nome, telefone);
        this.cnpj = cnpj;
    }
}
