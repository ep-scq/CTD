package com.dh.cao.model;

import java.io.Serializable;

public class Cao implements Serializable {
    private String nome;
    private int idade;

    public Cao(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }
}
