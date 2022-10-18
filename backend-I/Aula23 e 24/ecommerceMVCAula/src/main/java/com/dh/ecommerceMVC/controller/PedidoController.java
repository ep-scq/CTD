package com.dh.ecommerceMVC.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pedido")
public class PedidoController {

    @RequestMapping (value = "/findPedido", method = RequestMethod.GET)
    public String getPedidoAll(){
        return "Você buscou todos os pedidos";
    }

//    @RequestMapping(value = "/findPedido/{numPedido}/{usuario}", method = RequestMethod.GET)
//    public String getPedidoById(@PathVariable int numPedido, @PathVariable int usuario){
//        return "Você pediu o pedido: "+numPedido+", Usuario :"+usuario;
//    }

//    @RequestMapping(value = "/findPedido", method = RequestMethod.GET)
//    public String getPedidoById(@RequestParam("numPedido") int numPedido){
//        return "Você pediu o pedido: "+numPedido;
//    }
}
