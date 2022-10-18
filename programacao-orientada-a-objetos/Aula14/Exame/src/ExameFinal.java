public class ExameFinal extends Exame implements Comparable<ExameFinal> {
//public class ExameFinal extends Exame implements Comparable<ExameFinal> {

    private double notaOral;
    private double notaEscrita;

    public ExameFinal(String titulo, double nota, Aluno aluno, double notaOral, double notaEscrita) {
        super(titulo, nota, aluno);
        this.notaEscrita = notaEscrita;
        this.notaOral = notaOral;
    }

    @Override
    public boolean aprovado() {
        return this.nota > 4;
    }

    @Override
    public int compareTo(ExameFinal modelo) {
        double somaNotaLocal = notaOral + notaEscrita;
        double somaNotaModelo = modelo.getNotaEscrita() + modelo.getNotaOral();
        if (somaNotaLocal == somaNotaModelo) {
            return 0;
        }
        else if (somaNotaLocal > somaNotaModelo) {
            return 1;
        }
        return -1;
    }

    public double getNotaOral() {
        return notaOral;
    }

    public void setNotaOral(double notaOral) {
        this.notaOral = notaOral;
    }

    public double getNotaEscrita() {
        return notaEscrita;
    }

    public void setNotaEscrita(double notaEscrita) {
        this.notaEscrita = notaEscrita;
    }

}
