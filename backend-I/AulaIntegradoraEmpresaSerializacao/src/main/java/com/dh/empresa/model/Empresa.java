package com.dh.empresa.model;

import java.io.Serializable;

public class Empresa implements Serializable {
    private String razaoSocial;
    private String cnpj;
    private Empregado empregado;

    public Empresa(String razaoSocial, String cnpj, Empregado empregado) {
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
        this.empregado = empregado;
    }

    public String getRazaoSocial() {
        return razaoSocial;
    }

    public void setRazaoSocial(String razaoSocial) {
        this.razaoSocial = razaoSocial;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public Empregado getEmpregado() {
        return empregado;
    }

    public void setEmpregado(Empregado empregado) {
        this.empregado = empregado;
    }

    @Override
    public String toString() {
        return "Empresa{" +
                "razaoSocial='" + razaoSocial + '\'' +
                ", cnpj='" + cnpj + '\'' +
                ", empregado=" + empregado +
                '}';
    }
}
