function podeSubir(altura,vemAcompanhado){
    let podeSubir = false
    if (altura <= 2.00 && altura >=1.40){
        podeSubir = true
    }
    if (altura >= 1.20 && vemAcompanhado){
        podeSubir = true
    }
    if (altura < 1.20){
        podeSubir = false
    }
}
