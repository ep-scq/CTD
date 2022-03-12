function podeSubir(altura, vemAcompanhado){
    let podeSubir = false
  
    if(altura <= 2.0 && altura >= 1.20){
        podeSubir = true
    }
  
    if(altura >= 1.20 && vemAcompanhado){
        podeSubir = true
    }
    return podeSubir
  
  }
  
  
  function podeSubir(altura,vemAcompanhado){
  
    //1.39 -> F
    let logica1 = altura <= 2.0 && altura >= 1.40; 
    //1.39 -> V
    let logica2 = altura >= 1.20 && vemAcompanhado;
   
    let or = logica1 || logica2;
  
    if(or){
        return true
    }
    else{
        return false
    }
  }
  
  function podeSubir(altura,vemAcompanhado){
    return (altura <= 2.0 && altura >= 1.40)  (altura >= 1.20 && vemAcompanhado)
  
  }
