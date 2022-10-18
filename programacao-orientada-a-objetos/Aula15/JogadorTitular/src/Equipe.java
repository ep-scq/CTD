import java.util.ArrayList;
import java.util.Collections;

public class Equipe {
    private String nome;
    private ArrayList<Jogador> listaJogadores = new ArrayList<>();

    public Equipe(String nome) {
        this.nome = nome;
    }

    public void addJogador(Jogador jogador) {
        this.listaJogadores.add(jogador);
    }

    public void mostrarJogadoresTitulares() {
        Collections.sort(this.listaJogadores);

        for (Jogador jogador : this.listaJogadores) {
            if (jogador.isTitular()) {
                System.out.println("Nome: " + jogador.getNome() + " Número camiseta " + jogador.getNumCamisa() + " \n");
            }
        }
    }

    public void mostrarJogadoresLesionados() {
        int jogadoresLesionados = 0;
        for (Jogador jogador : this.listaJogadores) {
            if (jogador.isLesionado() && jogador.isTitular()) {
                jogadoresLesionados++;
            }
        }
        System.out.println("Numero de jogadores lesionados é: " + jogadoresLesionados);
    }
}
