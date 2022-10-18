package br.com.poo.ctd;

public class TestaUsuario {
    public static void main(String[] args) {

        UsuarioJogo user1 = new UsuarioJogo("Daniel", "Danitchan");

        System.out.println("Nickname: " + user1.getNick());

        System.out.println("Pontuação anterior: " + user1.getPontuacao());
        user1.aumentaPontuacao();
        user1.aumentaPontuacao();

        System.out.println("Pontuação atual:  " + user1.getPontuacao());

        user1.bonus(10);
        System.out.println("Pontuação com bonus:  " + user1.getPontuacao());

//        if (user1.getPontuacao() > 1) {
//            System.out.println("parabens! maior que 1");
//        }
    }
}
