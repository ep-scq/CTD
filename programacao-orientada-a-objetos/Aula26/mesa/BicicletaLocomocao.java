public class BicicletaLocomocao implements LocomocaoStrategy {
    @Override
    public void locomover(Ponto pontoInicial, Ponto pontoFinal) {
        double tempo = pontoInicial.calcularDistancia(pontoFinal) / 0.050366 * 1.5;
        System.out.printf("\nO tempo de bicicleta é de: %.2f minutos.", tempo);
    }
}
