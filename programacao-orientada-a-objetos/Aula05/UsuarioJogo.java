package br.com.poo.ctd;

public class UsuarioJogo {
    private String nome;
    private String nick;
    private int pontuacao;
    private int nivel;

    public UsuarioJogo(String nome, String nick) {
        this.nome = nome;
        this.nick = nick;
    }

    public void aumentaPontuacao() {
        this.pontuacao++;
    }

    public void bonus(int valor) {
        this.pontuacao += valor;
    }

    public String getNome() {
        return nome;
    }

    public String getNick() {
        return nick;
    }

    public int getPontuacao() {
        return pontuacao;
    }

    public int getNivel() {
        return nivel;
    }
}

