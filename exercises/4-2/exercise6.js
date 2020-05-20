let numero = 25;
let IsPrimo = true;
for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
        IsPrimo = false;
        break;
    }
}

if (IsPrimo) {
    console.log('Número ' + numero + ' é primo.')
} else {
    console.log('O Número ' + numero + ' não é primo.')
}
