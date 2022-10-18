package com.dh.ecommerceMVC.model;

public class Produto {
    private int id;
    private String nomeProduto;
    private double valor;

    public Produto(String nomeProduto, double valor) {
        this.nomeProduto = nomeProduto;
        this.valor = valor;
    }

    public Produto(int id, String nomeProduto, double valor) {
        this.id = id;
        this.nomeProduto = nomeProduto;
        this.valor = valor;
    }

    public Produto() {

    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomeProduto() {
        return nomeProduto;
    }

    public void setNomeProduto(String nomeProduto) {
        this.nomeProduto = nomeProduto;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }
}
