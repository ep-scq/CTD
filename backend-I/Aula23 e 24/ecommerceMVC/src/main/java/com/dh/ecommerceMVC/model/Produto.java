package com.dh.ecommerceMVC.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Produto {
    private int id;
    private String nomeProduto;
    private String lote;
    private String fornecedor;
    private String categoria;
    private double valor;
}