package com.digitalhouse.junit.exercicio;

public class Circulo implements Figura {

    private double raio;

    public Circulo(double raio) {
        this.raio = raio;
    }

    public double getRadio() {
        return raio;
    }

    public void setRadio(double radio) {
        this.raio = raio;
    }

    @Override
    public double calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
}
