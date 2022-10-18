package com.dh.ecommerceMVC.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ProdutoDTO {
    private String nomeProduto;
    private double valor;

    public ProdutoDTO(Produto produto){
        this.nomeProduto = produto.getNomeProduto();
        this.valor = produto.getValor();
    }

}
