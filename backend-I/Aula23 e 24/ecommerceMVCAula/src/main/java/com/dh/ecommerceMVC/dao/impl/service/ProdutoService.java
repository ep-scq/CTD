package com.dh.ecommerceMVC.dao.impl.service;

import com.dh.ecommerceMVC.dao.IDao;
import com.dh.ecommerceMVC.model.Produto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;


@Service
public class ProdutoService {


    @Autowired
    IDao<Produto> produtoDaoH2;

    public Produto salvar(Produto produto) throws SQLException {
        return produtoDaoH2.salvar(produto);
    }



}
