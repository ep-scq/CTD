public abstract class Exame {
    protected String titulo;
    protected double nota;
    protected Aluno aluno;

    public Exame(String titulo, double nota, Aluno aluno) {
        this.titulo = titulo;
        this.nota = nota;
        this.aluno = aluno;
    }

    public abstract boolean aprovado();
}
