let entrada = [{nombre: 'juan'}, {nombre: 'ozcar'}];
// entrada = [1,2,3,2,5]

function filter(arr, callback){
    let newArray = [];
    for(let i = 0; i<arr.length; i++){
        if(callback(arr[i])){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

console.log(filter(entrada, (e) => e < 5));
console.log(filter(entrada, (e) => e.nombre === "juan"));