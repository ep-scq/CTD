public class Locomover {
    private LocomocaoStrategy locomocao;

    public Locomover(LocomocaoStrategy locomocao) {
        this.locomocao = locomocao;
    }

    public void locomover(Ponto pontoInicial, Ponto pontoFinal) {
        locomocao.locomover(pontoInicial, pontoFinal);
    }

    public void setLocomocao(LocomocaoStrategy locomocao) {
        this.locomocao = locomocao;
    }
}
