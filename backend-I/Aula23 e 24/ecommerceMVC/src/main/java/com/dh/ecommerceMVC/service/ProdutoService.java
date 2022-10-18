package com.dh.ecommerceMVC.service;

import com.dh.ecommerceMVC.dao.IDao;
import com.dh.ecommerceMVC.model.Produto;
import com.dh.ecommerceMVC.model.ProdutoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class ProdutoService {


    @Autowired
    IDao<Produto> produtoDaoH2;

    public Produto salvar(Produto produto) throws SQLException {
        return produtoDaoH2.salvar(produto);
    }

    public List<ProdutoDTO> buscarTodos() throws SQLException {
        List<Produto> listProduto =produtoDaoH2.buscarTodos();

        List<ProdutoDTO> listProdutoDTO = new ArrayList<>();


        for (Produto p : listProduto){
            listProdutoDTO.add(new ProdutoDTO(p));
        }

        return listProdutoDTO;

    }

    public void alterar(Produto produto) throws SQLException {
        produtoDaoH2.alterar(produto);
    }

    public void excluir(int id) throws SQLException {
        produtoDaoH2.excluir(id);
    }

    public Optional<Produto> buscaPorId(int id) throws SQLException {
       return produtoDaoH2.buscarPorId(id);
    }


}
