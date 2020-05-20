let n = 7;
let asterisco = '';
let array = [];
let armazenaN = n;
let totalLinha = 0;

while (armazenaN > 0) {
    totalLinha += 1;
    armazenaN -= 2;
}
totalLinha = Math.round(totalLinha)
armazenaN = n;
for (let i = 0; i < totalLinha; i++) {
    asterisco = '';
    if (i > 0) {
        for (let j = 0; j < i; j++) {
            asterisco += ' ';
        }
    }
    for (let j = 0; j < armazenaN; j++) {
        asterisco += '*';
    }
    armazenaN -= 2;
    array.push(asterisco);
}

for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i])
}
