function podeSubir(altura,estaAcompanhado){
    let podeSubir = false
    if (altura >= 1.40 && altura <= 2.0){
        podeSubir = true
    }
    if (altura < 1.40 && altura >= 1.20 && estaAcompanhado == "sim"){
        podeSubir = true
    }
    return podeSubir
    
}
console.log(podeSubir(1.25,"sim"))
