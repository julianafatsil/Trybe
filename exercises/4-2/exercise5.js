let n = 25;
let asterisco = '';
let array = [];
let armazenaN = n;
let totalColuna = 0;

while (armazenaN > 0) {
    totalColuna += 1;
    armazenaN -= 2;
}
totalColuna = Math.round(totalColuna)

armazenaN = n;
for (let i = 0; i < totalColuna; i++) {
    asterisco = '';

    if (i > 0) {
        for (let j = 0; j < i; j++) {
            asterisco += ' ';
        }
    }
    for (let j = 0; j < armazenaN; j++) {
        if ((i == 0) || (j == 0) || (j == (armazenaN - 1))) {
            asterisco += '*';
        } else {
            asterisco += ' ';
        }
    }
    armazenaN -= 2;
    array.push(asterisco);
}

for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i])
}