public class CaminharLocomocao implements LocomocaoStrategy {

    @Override
    public void locomover(Ponto pontoInicial, Ponto pontoFinal) {
        double tempo = pontoInicial.calcularDistancia(pontoFinal) / 0.20366 * 13;
        System.out.printf("\nO tempo caminhando é de: %.2f minutos.", tempo);
    }
}