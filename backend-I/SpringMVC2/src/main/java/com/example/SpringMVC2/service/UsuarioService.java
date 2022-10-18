package com.example.SpringMVC2.service;

import com.example.SpringMVC2.model.Usuario;

public class UsuarioService {

    public Usuario criarUsuario(String nome, int idade){
        Usuario usuario = new Usuario(nome, idade);
        return usuario;
    }
}
