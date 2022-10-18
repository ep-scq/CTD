package com.dh.ecommerceMVC.controller;

import com.dh.ecommerceMVC.dao.impl.ProdutoDAOH2;
import com.dh.ecommerceMVC.model.Produto;
import com.dh.ecommerceMVC.model.ProdutoDTO;
import com.dh.ecommerceMVC.service.ProdutoService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/produto")
public class ProdutoController {

    @Autowired
    ProdutoService service;

    @PostMapping
    public Produto salvaProduto(@RequestBody Produto produto) throws SQLException {
        return service.salvar(produto);
    }

    @GetMapping
    public List<ProdutoDTO> buscarTodos() throws SQLException {
        return service.buscarTodos();
    }
    @RequestMapping(value = "/buscaId")
    public ResponseEntity buscarPorId(@RequestParam("id") int id) throws SQLException {
        ObjectMapper mapper = new ObjectMapper();

        Optional<Produto> produtoOptional = service.buscaPorId(id);
        if(produtoOptional.isEmpty()){
            return new ResponseEntity("Produto não foi encontrado", HttpStatus.NOT_FOUND);
        }
        //Aqui fazemos a conversão de Produto para ProdutoDTO usando Jackson
        Produto produto =  produtoOptional.get();
        ProdutoDTO produtoDTO = mapper.convertValue(produto, ProdutoDTO.class);

        //Aqui fazemos a conversão de Produto para ProdutoDTO manualmente usando getter e setter
//        ProdutoDTO produtoDTO1 = new ProdutoDTO();
//        produtoDTO1.setNomeProduto(produto.getNomeProduto());
//        produtoDTO1.setValor(produto.getValor());
        return new ResponseEntity(produtoDTO, HttpStatus.OK);


        //return service.buscaPorId(id).isEmpty() ? new Produto() :service.buscaPorId(id).get()  ;
    }

    @PatchMapping
    public void alterar(@RequestBody Produto produto) throws SQLException {
        System.out.println();
        service.alterar(produto);
    }

    @DeleteMapping
    public void excluir(@RequestParam("id") int id) throws SQLException {
        service.excluir(id);
    }

}
