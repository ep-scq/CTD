package com.dh.ecommerceMVC.service;

import com.dh.ecommerceMVC.dao.IDao;
import com.dh.ecommerceMVC.dao.impl.ProdutoDaoH2;
import com.dh.ecommerceMVC.model.Produto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;

@Service
public class ProdutoService {

    @Autowired
    IDao<Produto> produtoDaoH2;


    public Produto salvarProduto(Produto produto) throws SQLException {
        return produtoDaoH2.salvar(produto);
    };
}
