package com.dh.ecommerceMVC.controller;

import com.dh.ecommerceMVC.model.Produto;
import com.dh.ecommerceMVC.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
@RequestMapping("/produto")
public class ProdutoController {

        @Autowired
        ProdutoService service;

        @RequestMapping(value = "/salvar/{nomeProduto}/{valor}", method = RequestMethod.GET)
        public Produto salvaProduto(@PathVariable String nomeProduto, @PathVariable double valor) throws SQLException {
            Produto produto = new Produto(nomeProduto,valor);

            return service.salvarProduto(produto);
        }


}