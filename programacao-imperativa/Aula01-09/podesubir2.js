function podeSubir(altura,vemAcompanhado){
    if (altura >= 1.40 && altura <=2.00){
        console.log('Acesso Autorizado!')
    }
    else if (altura >= 1.20 && altura < 1.40 && vemAcompanhado){
        console.log('Acesso autorizado somente com acompanhante.')
    }
    else if (altura < 1.20){
        console.log('Acesso negado.')
    }
}
podeSubir(1.80,false)
podeSubir(1.35,true)
podeSubir(1.19,true)
