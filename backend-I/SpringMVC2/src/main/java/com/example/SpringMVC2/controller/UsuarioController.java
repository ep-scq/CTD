package com.example.SpringMVC2.controller;

import com.example.SpringMVC2.model.Usuario;
import com.example.SpringMVC2.service.UsuarioService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsuarioController {
    private UsuarioService usuarioService = new UsuarioService();

    @GetMapping("/")
    public Usuario criarUsuario(){
        return usuarioService.criarUsuario("Elissandro",42);
    }

    @GetMapping("criar2")
    public Usuario criarUsuario2(){
        return usuarioService.criarUsuario("Priscila",33);
    }
}
