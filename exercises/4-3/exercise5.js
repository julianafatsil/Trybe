let array = [2, 3, 2, 5, 8, 2, 3];

function NumeroMaisSeRepete (arrayFuncao){
    let repositorioArray = [];
    let numeroMaisSeRepete = 0;
    let vezesQueSeRepete = 0;

    for(let i = 0; i < arrayFuncao.length; i++){
        repositorioArray[arrayFuncao[i]] = (repositorioArray[arrayFuncao[i]] || 0) + 1;    //criando índices para o repositórioArray 
    }
//o indice nunca se repete
    for( let index in repositorioArray) {
        if(repositorioArray[index] > vezesQueSeRepete){
            vezesQueSeRepete = repositorioArray[index];
            numeroMaisSeRepete = index;
        }
    }

    return numeroMaisSeRepete;

}

console.log(NumeroMaisSeRepete(array));