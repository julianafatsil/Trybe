let array = [2, 3, 6, 7, 10, 1];

function MaiorValor(arrayFuncao) {
    let valorMaior = 0;
    let posicao = 0;
    for (let i = 0; i < arrayFuncao.length; i++) {
        if (arrayFuncao[i] > valorMaior) {
            valorMaior = arrayFuncao[i];
            posicao = i;
        }
    }

    return posicao;
}

console.log(MaiorValor(array));