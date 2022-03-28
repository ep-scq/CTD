function executor(func){

    return func(1, 2);

}

function somar(a, b){
    return a + b;
}

console.log(executor(somar))
