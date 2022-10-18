public class ExameParcial extends Exame {
    private Integer unidade;
    private Integer numeroTentativas;

    public ExameParcial(String titulo,
                        double nota,
                        Aluno aluno,
                        Integer unidade,
                        Integer numeroTentativas) {
        super(titulo, nota, aluno);
        this.unidade = unidade;
        this.numeroTentativas = numeroTentativas;
    }

    @Override
    public boolean aprovado() {
        return nota > 4;
    }

    public boolean possivelRecuperar() {
        return false;
    }
}
