package com.dh.empresa.model;

import java.io.Serializable;

public class Empregado implements Serializable {
    private String nome;
    private String sobreNome;
    private String rgCpf;
    private double salario;

    public Empregado(String nome, String sobreNome, String rgCpf, double salario) {
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.rgCpf = rgCpf;
        this.salario = salario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobreNome() {
        return sobreNome;
    }

    public void setSobreNome(String sobreNome) {
        this.sobreNome = sobreNome;
    }

    public String getRgCpf() {
        return rgCpf;
    }

    public void setRgCpf(String rgCpf) {
        this.rgCpf = rgCpf;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    @Override
    public String toString() {
        return "Empregado{" +
                "nome='" + nome + '\'' +
                ", sobreNome='" + sobreNome + '\'' +
                ", rgCpf='" + rgCpf + '\'' +
                ", salario=" + salario +
                '}';
    }
}