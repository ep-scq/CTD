import java.util.Objects;

public abstract class Empregado {

    protected String nome;
    protected String sobrenome;
    private String arquivo; //Foto-do-robertinho

    public abstract double calcularSalario(int dias);

    public Empregado(String nome, String sobrenome, String arquivo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.arquivo = arquivo;
    }

    public String getNome() {
        return nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public String getArquivo() {
        String retorno = "http://storage-s3/"
                + "fotos-dos-usuarios/"
                + this.arquivo;
        return retorno;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Empregado empregado = (Empregado) o;
        return Objects.equals(nome, empregado.nome) && Objects.equals(sobrenome, empregado.sobrenome) && Objects.equals(arquivo, empregado.arquivo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(nome, sobrenome, arquivo);
    }
}
