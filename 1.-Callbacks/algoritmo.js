// ejercicio 1
let entrada = [1,3,4,5,2];
function maximo(entrada){
    for(let i = 0; i<entrada.length; i++){
        if(entrada[i]>entrada[i+1]){
           return entrada[i]
        }
    }
}
console.log("ejercicio 1")
console.log(maximo(entrada));

// ejercicio 2
let entrada2 = "hola mundo";
function reverse(entrada){
    let pReverse = "";
    for(let i = entrada.length-1; i >= 0; i--){
        pReverse +=entrada[i];
    }
    return pReverse;
}
console.log("ejercicio 2")
console.log(reverse(entrada2));

// ejercicio 3
let a = 4, b = 2;
let c = 5, d = 0;
function divicionMinuscula(a, b){
    if(b===0){
        return 'error'
    }else{
        return a/b;
    }
}
console.log("ejercicio 3")
console.log(divicionMinuscula(a,b))
console.log(divicionMinuscula(c,d)) 