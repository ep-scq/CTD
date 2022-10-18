public class Main {
    public static void main(String[] args) {

        Jogador jogador1 = new Jogador(15, "Carlos", true, true);
        Jogador jogador2 = new Jogador(24, "Diego", true, false);
        Jogador jogador3 = new Jogador(5, "Jessica", false, true);
        Jogador jogador4 = new Jogador(11, "Rodrigo", false, false);
        Jogador jogador5 = new Jogador(7, "Andressa", false, true);

        Equipe equipe = new Equipe("Juventus");

        equipe.addJogador(jogador1);
        equipe.addJogador(jogador2);
        equipe.addJogador(jogador3);
        equipe.addJogador(jogador4);
        equipe.addJogador(jogador5);

        equipe.mostrarJogadoresTitulares();
        equipe.mostrarJogadoresLesionados();

    }

}