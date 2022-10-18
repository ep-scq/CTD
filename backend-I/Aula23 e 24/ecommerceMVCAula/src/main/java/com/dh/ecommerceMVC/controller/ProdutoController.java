package com.dh.ecommerceMVC.controller;

import com.dh.ecommerceMVC.dao.impl.service.ProdutoService;
import com.dh.ecommerceMVC.model.Produto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;

@RestController
@RequestMapping("/produto")
public class ProdutoController {

    @Autowired
    ProdutoService service;

    @PostMapping
    public Produto salvaProduto(@RequestBody Produto produto) throws SQLException {
        return service.salvar(produto);
    }

}

