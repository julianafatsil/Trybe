let n = 5

let asterisco = " ";

for (let i = 0; i < n; i++) { //5 asteriscos
    asterisco = "";

    for (let j = 1; j < n - i; j++) { // quantos espaços em branco vai ter
        asterisco += " ";
    }

    for (let j = 0; j < i + 1; j++) { // quant de asteriscos
        asterisco += "*";
    }

    console.log(asterisco);
}
