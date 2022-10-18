public class AutomovelLocomocao implements LocomocaoStrategy {
    @Override
    public void locomover(Ponto pontoInicial, Ponto pontoFinal) {
        double tempo = pontoInicial.calcularDistancia(pontoFinal) / 0.40366 * 4;
        System.out.printf("\nO tempo de automóvel é de: %.2f minutos.", tempo);
    }
}
