let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function NomeMaior(arrayNomes) {
    let nomeMaior = '';

    for (let i = 0; i < arrayNomes.length; i++) {
        if (arrayNomes[i].length > nomeMaior.length) {
            nomeMaior = arrayNomes[i];
        }
    }


    return nomeMaior;

}

console.log(NomeMaior(array));

