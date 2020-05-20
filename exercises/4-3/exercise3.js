let array = [2, 4, 6, 7, 10, 0, -3];

function MenorValor(arrayNumeros){
    let menorValor = 0;
    let posicao = 0;

    for(let i = 0; i < arrayNumeros.length; i++){
        if( menorValor > arrayNumeros[i]){
            menorValor = arrayNumeros[i];
            posicao = i;
        }
    }
    return posicao;
}

console.log(MenorValor(array));